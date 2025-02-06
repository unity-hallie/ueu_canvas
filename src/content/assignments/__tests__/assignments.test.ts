import {mockCourseData} from "../../../course/__mocks__/mockCourseData";
import {formDataify, ICanvasCallConfig, range} from "../../../canvasUtils";
import {updateAssignmentData} from "../index";
import {mockAssignmentData} from "../../__mocks__/mockContentData";
import fetchMock from "jest-fetch-mock";
import {assignmentDataGen} from "@/content/assignments";
import {returnMockAsyncGen} from "@/__mocks__/utils";

import * as canvasUtils from '@/canvasUtils';
import {getPagedDataGenerator} from "@/fetch/getPagedDataGenerator";
import {fetchJson} from "@/fetch/fetchJson";
import {putContentConfig} from "@/content/BaseContentItem";
import AssignmentKind from "@/content/assignments/AssignmentKind";
import {UpdateAssignmentDataOptions} from "@canvas/content/types";

fetchMock.enableMocks();

jest.mock('@/fetch/getPagedDataGenerator', () => ({
    getPagedDataGenerator: jest.fn(),

}));

jest.mock('@/fetch/fetchJson', () => ({
    fetchJson: jest.fn(),
}))


it('gets assignments from course id', async () => {
    const {id} = mockCourseData;
    const config: ICanvasCallConfig = {
        queryParams: {
            bunnies: true,
        },
        fetchInit: {}
    };


    const responseDatas = [...range(0, 10)].map(id => ({...mockAssignmentData, id}));
    (getPagedDataGenerator as jest.Mock).mockImplementation(returnMockAsyncGen(responseDatas));
    const i = range(0, 10);
    for await (const assignment of assignmentDataGen(id, config)) {
        expect(assignment.id).toEqual(i.next().value);
    }
})

it('gets assignment HTML url', () => {
    expect(AssignmentKind.getHtmlUrl(1, 2)).toEqual('/courses/1/assignments/2');
})

it('updates assignment data', async () => {
    const mockData = {...mockAssignmentData, name: "X"};
    const updateData: UpdateAssignmentDataOptions = {
        assignment: {
            name: "Y"
        }
    };
    const formData = {
        data: "FormData"
    }
    const config = {};
    const formDataify = jest.spyOn(canvasUtils, 'formDataify');
    (fetchJson as jest.Mock).mockResolvedValue(mockData);
    (formDataify as jest.Mock).mockReturnValue(formData)
    const result = await updateAssignmentData(0, 0, updateData);
    expect(formDataify).toHaveBeenCalledWith((updateData));
    expect(fetchJson).toHaveBeenCalledWith('/api/v1/courses/0/assignments/0', putContentConfig(formData, config));

    expect(result).toEqual(mockData);


})


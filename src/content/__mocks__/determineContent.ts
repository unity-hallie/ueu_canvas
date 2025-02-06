import {mockAssignmentData} from "@/content/__mocks__/mockContentData";
import {mockCourseData} from "@/course/__mocks__/mockCourseData";
import {Assignment} from "@/content/assignments/Assignment";
import {ContentData} from "@/content/types";
import {ICanvasCallConfig} from "@/canvasUtils";

import AssignmentKind from "@/content/assignments/AssignmentKind";

export const getContentClassFromUrl = jest.fn((url: string | null = null) => {
    return Assignment;
});

export const getContentItemFromUrl = jest.fn(
    async (url: string | null = null)  =>
        new Assignment(mockAssignmentData, mockCourseData.id))

export function getContentKindFromUrl(url:string) {
    return AssignmentKind;
}

export function getContentKindFromContent(contentData:ContentData) {
    return AssignmentKind;
}

export async function getContentDataFromUrl(url:string, config:ICanvasCallConfig) {
    return {...mockAssignmentData}
}
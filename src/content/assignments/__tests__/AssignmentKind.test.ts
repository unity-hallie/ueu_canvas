import {mockAssignmentData} from "@/content/__mocks__/mockContentData";
import AssignmentKind, {assignmentUrlFuncs} from "@/content/assignments/AssignmentKind";
import {getDataTests, kindUrlTests} from "@/content/__testingUtils__/utils";


jest.mock('@/fetch/fetchJson')
jest.mock('@/fetch/getPagedDataGenerator')
describe('AssignmentKind', () => {
    it('getId works', () => expect(AssignmentKind.getId({...mockAssignmentData, id: 100})).toEqual(100))
    it('getName works', () => expect(AssignmentKind.getName({
        ...mockAssignmentData,
        name: "Assignment"
    })).toEqual('Assignment'))
    it('getBody works', () => expect(AssignmentKind.getBody({
        ...mockAssignmentData,
        description: "<p>Instructions</p>"
    })).toEqual("<p>Instructions</p>"))

    describe('get Data Tests', getDataTests(AssignmentKind, [
        {...mockAssignmentData, id: 1},
    ], { name: "x" }));

})

describe('AssignmentUrlFuncs', kindUrlTests(assignmentUrlFuncs,
    1, 3,
    '/api/v1/courses/1/assignments/3',
    '/courses/1/assignments/3',
    '/api/v1/courses/1/assignments'
))


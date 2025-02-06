import AssignmentKind, {assignmentUrlFuncs} from "@/content/assignments/AssignmentKind";
import {mockAssignmentData, mockDiscussionData} from "@/content/__mocks__/mockContentData";
import {getDataTests, kindUrlTests} from "@/content/__testingUtils__/utils";
import DiscussionKind, {discussionUrlFuncs} from "@/content/discussions/DiscussionKind";

jest.mock('@/fetch/fetchJson')
jest.mock('@/fetch/getPagedDataGenerator')
describe('DiscussionKind', () => {
    it('getId works', () => expect(DiscussionKind.getId({...mockDiscussionData, id: 100})).toEqual(100))
    it('getName works', () => expect(DiscussionKind.getName({
        ...mockDiscussionData,
        title: "Discussion"
    })).toEqual('Discussion'))
    it('getBody works', () => expect(DiscussionKind.getBody({
        ...mockDiscussionData,
        message: "<p>Instructions</p>"
    })).toEqual("<p>Instructions</p>"))

    describe('get Data Tests', getDataTests(DiscussionKind, [
        {...mockDiscussionData, id: 1},
    ], { title: "x" }));

})


describe('DiscussionUrlFuncs', kindUrlTests(discussionUrlFuncs,
    1, 3,
    '/api/v1/courses/1/discussion_topics/3',
    '/courses/1/discussion_topics/3',
    '/api/v1/courses/1/discussion_topics'
))

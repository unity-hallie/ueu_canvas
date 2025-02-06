import {mockQuizData} from "@/content/__mocks__/mockContentData";
import QuizKind, {quizUrlFuncs} from "@/content/quizzes/QuizKind";
import {getDataTests, kindUrlTests} from "@/content/__testingUtils__/utils";

jest.mock('@/fetch/fetchJson')
jest.mock('@/fetch/getPagedDataGenerator')
describe('QuizKind', () => {
    it('getId works', () => expect(QuizKind.getId({...mockQuizData, id: 100})).toEqual(100))
    it('getName works', () => expect(QuizKind.getName({
        ...mockQuizData,
        title: "Quiz"
    })).toEqual('Quiz'))
    it('getBody works', () => expect(QuizKind.getBody({
        ...mockQuizData,
        description: "<p>Instructions</p>"
    })).toEqual("<p>Instructions</p>"))

    describe('get Data Tests', getDataTests(QuizKind, [
        {...mockQuizData, id: 1},
    ], { name: "x" }));

})

describe('QuizUrlFuncs', kindUrlTests(quizUrlFuncs,
    1, 3,
    '/api/v1/courses/1/quizzes/3',
    '/courses/1/quizzes/3',
    '/api/v1/courses/1/quizzes'
))


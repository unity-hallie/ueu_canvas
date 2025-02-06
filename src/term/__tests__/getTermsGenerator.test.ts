import {getTermsGenerator} from "@/term/getTermsGenerator";

jest.mock("@/fetch/getPagedDataGenerator")

import {getPagedDataGenerator} from "@/fetch/getPagedDataGenerator";
import {mockAsyncGen} from "@/__mocks__/utils";


describe("getTermsGenerator", function () {

    const rootAccountId = 10;
    const mockTerms = [
        {id: 1},
        {id: 2},
    ];

    it("returns terms", async function () {
        const termGenerator = getTermsGenerator(rootAccountId);
        (getPagedDataGenerator as jest.Mock).mockReturnValueOnce(mockAsyncGen(mockTerms));
        expect(getPagedDataGenerator).toHaveBeenCalledWith(`/api/v1/accounts/${rootAccountId}/terms`, expect.anything())
    })


})

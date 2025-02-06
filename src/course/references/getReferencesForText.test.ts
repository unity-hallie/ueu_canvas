import getReferencesForText from "@/course/references/getReferencesForText";
import {fetchJson} from "@/fetch/fetchJson";
import {jest} from "@jest/globals";
import mockCiteAsResponse from "@/course/references/mockCiteAsResponse";

jest.mock('@/fetch/fetchJson', () => ({
    fetchJson: jest.fn(),
}))

describe('getReferencesForText', () => {
    const userEmail = 'ttestersson@unity.edu';
    const testText = "The Hungry, Hungry Caterpillar";
    (fetchJson as jest.Mock).mockImplementation(async () => mockCiteAsResponse)
    it('passes email and text into url', async () => {
        const refs = await getReferencesForText(testText, userEmail);

    });
});
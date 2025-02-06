import {getPagedDataGenerator} from "@/fetch/getPagedDataGenerator";


export type TermQueryParams = {
    workflow_state?: 'active' | 'deleted' | 'all',
    include?: ('overrides' | 'course_count')[],
    term_name?: string,
}

const defaultTermQueryParams = {
    workflow_state: 'active',
}
export const getTermsGenerator = (rootAccountId:number, queryParams?: TermQueryParams) => {


    const generator = getPagedDataGenerator(`/api/v1/accounts/${rootAccountId}/terms`, {
        queryParams: {...defaultTermQueryParams, ...queryParams ?? {}},
    });
    return generator;

}
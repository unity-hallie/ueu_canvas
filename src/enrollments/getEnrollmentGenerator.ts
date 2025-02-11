import {getPagedDataGenerator} from "@/fetch/getPagedDataGenerator";
import {HasUser} from "@/canvasDataDefs";
import {EnrollmentRole} from "@/enrollments/enrollmentRole";
import {EnrollmentData, EnrollmentState, EnrollmentType, EnrollmentUserState} from "@/enrollments/EnrollmentTypes";


export type EnrollmentInclude = 'avatar_url' |
    'group_ids' |
    'locked' |
    'observed_users' |
    'can_be_removed' |
    'uuid' |
    'current_points'

type EnrollmentGenQueryConfig = {
    type?: EnrollmentType[],
    role?: EnrollmentRole[],
    include?: EnrollmentInclude[],
    state?: EnrollmentState[],
    grading_period_id?: number,
    sis_account_id?: number | number[],

} & ({
    sis_user_id: number | number[],
    created_for_sis_user_id: true,
} | {
    sis_user_id?: never,
    created_for_sis_user_id?: false,
})


export type GetEnrollmentSectionGenConfig = {
    sectionId: number;
    queryParams: EnrollmentGenQueryConfig & {
        user_id?: string
    }
};


export type GetEnrollmentUserGenConfig = {
    userId: number;
    queryParams: EnrollmentGenQueryConfig & {
        state?: EnrollmentUserState;
        enrollment_term_id?: number;
    }
};

export type GetEnrollmentCourseGenConfig = {
    courseId: number;
    queryParams: EnrollmentGenQueryConfig & {
        user_id?: string,
    }
}


export type GetEnrollmentGenConfig = GetEnrollmentUserGenConfig | GetEnrollmentCourseGenConfig | GetEnrollmentSectionGenConfig;


export const getEnrollmentGenerator = ( config: GetEnrollmentGenConfig) => {
    let url: string;


    const { queryParams, ...internalParams } = config;
    if ('userId' in config) {
        url = `/api/v1/accounts/${config.userId}/users`;
    } else if ('courseId' in config) {
        url = `/api/v1/courses/${config.courseId}/users`;
    } else  if ('sectionId' in config) {
        url = `/api/v1/sections/${config.sectionId}/users`;
    } else {
        throw new Error('config type not recognized')
    }



    return getPagedDataGenerator<EnrollmentData>(url, {
        queryParams,
    });
}
import {EnrollmentRole} from "@/enrollments/enrollmentRole";
import {IUserData} from "@/canvasDataDefs";

export type EnrollmentData = {
    id: number,
    course_id: number,
    sis_course_id?: string,
    course_integration_id?: string,
    course_section_id?: number,
    section_integration_id?: string,
    sis_account_id?: string,
    sis_section_id?: string,
    sis_user_id?: string,
    enrollment_state: EnrollmentState,
    limit_privileges_to_course_section?: boolean,
    root_account_id: number,
    type: EnrollmentType,
    user_id: number,
    associated_user_id?: number | null,
    role: EnrollmentRole,
    role_id: number,
    created_at: string,
    updated_at: string,
    start_at: string,
    end_at: string,
    last_activity_at?: string,
    last_attended_at?: string,
    total_activity_time: number,
    html_url: string,
    grades?: Grade,
    user: IUserData,
    override_grade?: string,
    override_score?: number,
    has_grading_periods?: boolean,
    totals_for_all_grading_periods_option?: boolean,
    current_grading_period_title?: string,
    current_grading_period_id?: number,
    current_period_unposted_current_score?: number,
    current_period_unposted_final_score?: number,
    current_period_unposted_current_grade?: string,
    current_period_unposted_final_grade?: string,

} & UnpostedGradeParams
export type Grade = {
    html_url?: string,
    current_grade?: string,
    final_grade?: string,
    current_score?: number,
    final_score?: number,
    current_points?: number,
} & UnpostedGradeParams
type UnpostedGradeParams = {
    unposted_current_grade?: string,
    unposted_current_score?: number,
    unposted_final_score?: number
    unposted_current_points: number,
}
export type EnrollmentType = 'StudentEnrollment' |
    'TeacherEnrollment' |
    'DesignerEnrollment' |
    'ObserverEnrollment'
export type EnrollmentState = 'active' |
    'invited' |
    'creation_pending' |
    'deleted' |
    'rejected' |
    'completed' |
    'inactive' |
    'current_and_invited' |
    'current_and_future' |
    'current_and_future_and_restricted' |
    'current_and_concluded'
export type EnrollmentUserState = EnrollmentState | 'current_and_invited' |
    'current_and_future' |
    'current_and_future_and_restricted' |
    'current_and_concluded'
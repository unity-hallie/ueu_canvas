import {IUserData} from "@/canvasDataDefs";
import {mockUserData} from "@/__mocks__/mockUserData";
import {createEnrollmentRole, EnrollmentData} from "@/enrollments";

export const mockEnrollment: EnrollmentData = {
    created_at: "",
    end_at: "",
    html_url: "",
    role: createEnrollmentRole(""),
    role_id: 0,
    root_account_id: 0,
    start_at: "",
    total_activity_time: 0,
    unposted_current_points: 0,
    updated_at: "",
    id: 1,
    user_id: 1,
    type: 'StudentEnrollment',
    enrollment_state: 'active',
    course_id: 1,
    user: {...mockUserData, id: 1, name: 'Student Name', sis_user_id: '12345'} as IUserData
};
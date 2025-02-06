import {ICourseData} from "@/types";
import {mockTermData} from "@/__mocks__/mockTermData";

export const mockCourseData: ICourseData = {
    account_id: 0,
    allow_student_assignment_edits: false,
    allow_student_forum_attachments: false,
    allow_wiki_comments: false,
    apply_assignment_group_weights: false,
    blueprint: false,
    blueprint_restrictions: {
        content: false,
        points: false,
        due_dates: false,
        availability_dates: false
    },
    blueprint_restrictions_by_object_type: {},
    calendar: {},
    course_code: "BP_TEST000",
    course_format: "",
    course_progress: {},
    created_at: "",
    default_view: "wiki",
    end_at: "",
    enrollment_term_id: 0,
    enrollments: 0,
    grading_standard_id: 0,
    hide_final_grades: false,
    id: 0,
    license: "",
    locale: "",
    name: "BP_TEST000",
    open_enrollment: false,
    original_name: "",
    permissions: {},
    public_description: "",
    restrict_enrollments_to_course_dates: false,
    root_account_id: 0,
    self_enrollment: false,
    start_at: "",
    storage_quota_mb: 0,
    storage_quota_used_mb: 0,
    template: false,
    term: mockTermData,
    time_zone: "",
    uuid: "",
    workflow_state: 'available'

}
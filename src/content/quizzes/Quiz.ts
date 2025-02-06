import {BaseContentItem} from "@/content/BaseContentItem";
import {fetchJson} from "@/fetch/fetchJson";
import {formDataify} from "@/canvasUtils";


export class Quiz extends BaseContentItem {
    static nameProperty = 'title';
    static bodyProperty = 'description';
    static contentUrlTemplate = "/api/v1/courses/{course_id}/quizzes/{content_id}";
    static allContentUrlTemplate = "/api/v1/courses/{course_id}/quizzes";

    async setDueAt(date: Date): Promise<Record<string, any>> {
        const url = `/api/v1/courses/${this.courseId}/quizzes/${this.id}`;
        return fetchJson(url, {
            fetchInit: {
                method: 'PUT',
                body: formDataify({
                    quiz: {
                        due_at: date
                    }
                })
            }
        })
    }
}
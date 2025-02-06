import {IBlueprintCourse} from "@canvas/course/IBlueprintCourse";
import {Course} from "@canvas/course/Course";

import {getSections} from "@canvas/course/getSections";

export function cachedGetAssociatedCoursesFunc(course: IBlueprintCourse) {
    let cache: Course[] | null = null;
    return async (redownload = false) => {
        if (!redownload && cache) return cache;
        cache = await getSections(course.id);
        return cache;
    }
}
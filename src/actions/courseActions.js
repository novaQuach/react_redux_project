export function createCourse(course) {
    return {
        type: 'CREATE_COURSE',
        course: course,
    };
}

// action creator will return an object that must contain the type property; under the course property, the course data (object) is held

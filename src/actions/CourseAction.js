import * as types from './actionsTypes' ;
import courseApi from '../api/mockCourseApi';


export function loadCoursesSuccess(course){
    return { type: types.LOAD_COURSES_SUCCESS , course};
}

export function loadCourses(){
    return function(dispatch){
        return courseApi.getAllCourses().then(courses =>{
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    }
}

export function createCourse(course){
    return { type: types.CREATE_COURSE , course};
}
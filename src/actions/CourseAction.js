import * as types from './actionsTypes' ;
export function createCourse(course){
    return { type: types.CREATE_COURSE , course};
}
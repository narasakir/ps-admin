import * as types from '../actions/actionsTypes' ;
export default function courseReducer(state = [], action){
    switch(action.type){
        case types.LOAD_COURSES_SUCCESS:
            return action.course;
        case types.CREATE_COURSE : 
            return [...state,
                Object.assign({}, action.course)
            ];
        default: 
            return state;
    }
}
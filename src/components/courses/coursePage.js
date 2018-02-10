import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseAction';
import CourseList from './CourseList';

class CoursesPage extends Component{

    constructor(props, context){
        super(props, context);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    render(){
        const {courses} = this.props
        return(
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses} />
            </div>

        );
    }
}

CoursesPage.propTypes = {
    courses : PropTypes.array.isRequired,
    actions : PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps){
    return{
        courses : state.courses
    };
}
function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(courseAction, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
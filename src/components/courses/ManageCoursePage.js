import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseAction from '../../actions/courseAction';
import CourseForm from './CourseForm';
import toastr from 'toastr'; 

export class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            error: {}, 
            saving : false
        };
        this.updateCourseState = this.updateCourseState.bind(this);     
        this.saveCourse = this.saveCourse.bind(this);   
    }

    componentWillReceiveProps(nextProps){
        if(this.props.course.id != nextProps.course.id){
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event){
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    saveCourse(event){
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
            toastr.error(error);
            this.setState({saving: false})
        })     
    }

    redirect(){
        this.setState({saving:false});
        toastr.success('Course saved');
        this.context.router.push('/courses');
    }

    render() {
        return (
                <CourseForm 
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}
                allAuthors={this.props.authors}
                    saving={this.state.saving}
                />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors : PropTypes.array.isRequired,
    actions : PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
}
function getCourseById(courses, id){
    
    const course = courses.filter(course => course.id == id);
    if(course) return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id;
    let course =   {id: "", title: "", watchHref: "",    authorId: "",    length: "",    category: ""};
    if(courseId && state.courses.length > 0){
        course = getCourseById(state.courses, courseId);
    }
    const authorFormattedForDropdown = state.authors.map(author => {
        return {
            value : author.id,
            text : author.firstName + ' ' + author.lastName
        };
    });
    
    return {
        course: course,
        authors: authorFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

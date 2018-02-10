import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseAction from '../../actions/courseAction';

export class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {
        return (
            <h1> Manage Course </h1>
        );
    }
}

ManageCoursePage.PropTypes = {
    //myProp: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)

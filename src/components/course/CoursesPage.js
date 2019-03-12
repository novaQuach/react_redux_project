import React, { Component, PropTypes } from 'react';
// this is to connect this component to work with redux
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: { title: '' },
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({
            course: course,
        });
    }

    onClickSave() {
        // here we can manually dispatch the actions since we did not define the mapDispatchToProps function
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        debugger;
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Courses</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />
                <input type="submit" value="Save" onClick={this.onClickSave} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        // nb: state.courses , the courses term here is determined what was used in the reducer
        courses: state.courses,
    };
}

// some validation
CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
};

export default connect(
    mapStateToProps
    // mapDispatchToProps
)(CoursesPage);

// connect is a higher order component that will wrap our coursesPage
// recall: connect will connect the container components to wrok with redux
// it takes 2 parameters --> 1) mapStateToProps, and 2)mapDispatchToProps
// NB: the syntax is two sets of brackets beside one another, connect will return a function that'll immediately call the container function;
// below is an alternative to what is written above:

// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);

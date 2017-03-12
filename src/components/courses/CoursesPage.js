import React, {PropTypes} from 'react';

class CoursesPage extends React.Component {
<<<<<<< HEAD
=======
  constructor(props, context){
    super(props, context);
    this.state = {
      course: { title: "" }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState(course);
  }

  onClickSave() {
    alert(`Saving ${this.state.course.title}`);
  }
>>>>>>> Initial commit
  render() {
    return (
      <div>
        <h1>Courses Page</h1>
<<<<<<< HEAD
=======
        <input
          type='text'
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
      <input
        type='submit'
        value='Save'
        onClick={this.onClickSave}
      />
>>>>>>> Initial commit
      </div>
    )
  }
}

export default CoursesPage;

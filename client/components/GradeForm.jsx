import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: parseInt(this.state.grade)
    };
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  resetHandler(event) {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form className="col-4 form-collection" onSubmit={this.handleSubmit}>
        <label>
          <div className="form-group row ml-2">
            <i className="fas fa-user-circle fa-2x mr-3"></i>
            <input
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
              type="text"
              size="30"
              placeholder="Name" />
          </div>
          <div className="form-group row ml-2">
            <i className="far fa-list-alt fa-2x mr-3"></i>
            <input
              name="course"
              onChange={this.handleInputChange}
              value={this.state.course}
              type="text"
              size="30"
              placeholder="Course" />
          </div>
          <div className="form-group row ml-2">
            <i className="fa fa-graduation-cap fa-2x mr-2"></i>
            <input
              name="grade"
              onChange={this.handleInputChange}
              value={this.state.grade}
              type="text"
              size="30"
              placeholder="Grade" />
          </div>
        </label>
        <div className="container">
          <button type="submit" className="btn btn-primary col-4 ml-4" >Add</button>
          <button type="reset"
            className="btn btn-secondary col-5 ml-3"
            onClick={this.resetHandler}
          >Cancel</button>
        </div>
      </form>
    );
  }
}

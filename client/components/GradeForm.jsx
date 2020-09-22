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
        <h2 className="ml-2 mb-4">Add Grade</h2>
        <div className="input-group row ml-2 mb-3">
          <span className="input-group-text">
            <i className="fas fa-user-circle fa-lg "></i>
          </span>
          <input
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            className="form-control"
            placeholder="Student Name" />
        </div>

        <div className="input-group ml-2 mb-3">
          <span className=" input-group-text">
            <span className="far fa-list-alt fa-lg"></span>
          </span>
          <input
            name="course"
            onChange={this.handleInputChange}
            value={this.state.course}
            type="text"
            className="form-control"
            placeholder="Student Course" />
        </div>

        <div className="input-group row ml-2 mb-3">
          <span className="input-group-text">
            <i className="fa fa-graduation-cap fa-lg"></i>
          </span>
          <input
            name="grade"
            onChange={this.handleInputChange}
            value={this.state.grade}
            type="text"
            className="form-control"
            placeholder="Student Grade" />
        </div>

        <div className="row">
          <button type="submit" className="btn btn-primary col-3 ml-4" >Add</button>
          <button type="reset"
            className="btn btn-secondary col-3 ml-3"
            onClick={this.resetHandler}
          >Cancel</button>
        </div>
      </form>
    );
  }
}

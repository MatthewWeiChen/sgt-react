import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
  }

  render() {
    return (
      <form className="col-4 form-collection">
        <label>
          <div className="form-group row ml-2">
            <i className="fas fa-user-circle fa-2x mr-3"></i>
            <input type="text" size="30"></input>
          </div>
          <div className="form-group row ml-2">
            <i className="far fa-list-alt fa-2x mr-3"></i>
            <input type="text" size="30"></input>
          </div>
          <div className="form-group row ml-2">
            <i className="fa fa-graduation-cap fa-2x mr-2"></i>
            <input type="text" size="30"></input>
          </div>
        </label>
        <div className="container">
          <button type="submit" className="btn btn-primary col-4 ml-4">Add</button>
          <button type="reset" className="btn btn-secondary col-5 ml-3">Cancel</button>
        </div>
      </form>
    );
  }
}

import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './GradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addGrade = this.addGrade.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades: grades });
      });
  }

  getAverageGrade() {
    const listOfStudents = this.state.grades;
    const listOfGrades = listOfStudents.map(student => {
      return student.grade;
    });
    const averageGrade = listOfGrades.reduce((sum, currentValue) => sum + currentValue, 0);
    const averageGradeRounded = Math.round(averageGrade / listOfGrades.length);
    return averageGradeRounded;
  }

  addGrade(newGrade) {
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    };
    fetch('/api/grades', init)
      .then(res => res.json())
      .then(grade => this.setState({ grades: this.state.grades.concat(grade) }));
  }

  render() {
    const averageGrade = this.getAverageGrade();
    return (
      <div className="ml-4 mr-2">
        <Header average={averageGrade} />
        <div className="row">
          <GradeTable grades={this.state.grades} />
          <GradeForm onSubmit={this.addGrade} />

        </div>
      </div>
    );
  }
}

export default App;

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
    const averageGrade = listOfGrades.reduce((sum, currentValue) => sum + currentValue, 0) / listOfGrades.length;
    const averageGradeRounded = Math.round(averageGrade);
    return averageGradeRounded;
  }

  addGrade(newGrade) {
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGrade)
    };
    fetch('/api/grades', init)
      .then(res => res.json());
  }

  render() {
    const averageGrade = this.getAverageGrade();
    return (
      <>
        <Header average={averageGrade} />
        <div className="table-container">
          <GradeTable grades={this.state.grades} />
          <GradeForm />
        </div>
      </>
    );
  }
}

export default App;

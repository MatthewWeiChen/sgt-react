import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

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

  render() {
    return (
      <>
        <Header average={this.getAverageGrade} />
        <GradeTable grades={this.state.grades} />
      </>
    );
  }
}

export default App;

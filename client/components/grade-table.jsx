import React from 'react';
import Grade from './grade';

const GradeTable = props => {
  const listGrades = props.grades;
  const gradeRows = listGrades.map(grade => {
    return <tr key={grade.id}><Grade grade={grade.grade} name={grade.name} course={grade.course} /></tr>;
  });

  return (
    <table className="table table-striped" >
      <thead className="thead-dark">
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {gradeRows}
      </tbody>
    </table>
  );
};

export default GradeTable;

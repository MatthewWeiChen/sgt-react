import React from 'react';
import Grade from './grade';

const GradeTable = props => {
  const listGrades = props.grades;
  const gradeRows = listGrades.map(grade => {
    return <Grade
      delete={props.delete}
      key={grade.id}
      grade={grade} />;
  });

  return (
    <table className="table table-striped col-7" >
      <thead className="thead-dark">
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      <tbody>
        {gradeRows}
      </tbody>
    </table>
  );
};

export default GradeTable;

import React from 'react';

function Grade(props) {
  const grade = props.grade;
  return (
    <tr>
      <td>{grade.name}</td>
      <td>{grade.course}</td>
      <td>{grade.grade}</td>
      <td>
        <button type="submit" className="btn btn-danger" onClick={() => props.delete(grade.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Grade;

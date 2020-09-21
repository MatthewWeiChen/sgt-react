import React from 'react';

function Grade(props) {
  return (
    <>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
    </>
  );
}

export default Grade;

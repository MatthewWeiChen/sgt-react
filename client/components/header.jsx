import React from 'react';

function Header(props) {
  const average = props.average();
  return (
    <div className="header-container">
      <h1>Student Grade Table</h1>
      <h3 className="ml-auto">Average Grade
        <span className="badge badge-secondary ml-3">
          {String(average)}
        </span>
      </h3>
    </div>
  );
}

export default Header;

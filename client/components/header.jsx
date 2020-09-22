import React from 'react';

function Header(props) {
  return (
    <div className="page-header">
      <div className="row mt-4 mb-4">
        <h1 className="left col-6">Student Grade Table</h1>
        <h3 className="col-4 text-right mt-3 mr-1">Average Grade
          <span className="badge badge-secondary ml-3">
            {String(props.average)}
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Header;

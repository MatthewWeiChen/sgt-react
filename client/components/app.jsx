import React from 'react';
import Header from './header';
// import Grades from './grades';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades: grades });
      });
  }

  render() {
    return (
      <>
        <Header />
        <GradeTable />
      </>
    );
  }
}

export default App;

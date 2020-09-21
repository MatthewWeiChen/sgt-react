import React from 'react';
import Header from './header';
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
        <GradeTable grades={this.state.grades} />
      </>
    );
  }
}

export default App;

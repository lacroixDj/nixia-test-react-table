import React, {Component} from 'react';
import Radio from './components/Radio';
import Table from './components/Table';

class App extends Component {
  constructor() {
      super()
    this.state = {
      parameterState: "name"
    }

    this.sortByParameter = this.sortByParameter.bind(this);

  }

  sortByParameter(parameter) {
    this.setState({
      parameterState: parameter
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <center>
          <h1>Birthday Records</h1>
        </center>
        <Radio sortByParameter={this.sortByParameter}/>
        <Table />
      </div>
);


  }
}

export default App;

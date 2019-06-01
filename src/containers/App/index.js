import React, { Component } from 'react';
import Header from '../../components/Header';
import BookTickets from '../BookTickets';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <BookTickets />
      </React.Fragment>
    );
  }
}

export default App;

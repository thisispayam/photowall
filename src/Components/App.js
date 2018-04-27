import React, { Component } from 'react';
import Title from './Title';
import '../styles/styles.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title title={'PhotoWall'} />
        </header>
      </div>
    );
  }
}

export default App;

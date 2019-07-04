import React, { Component } from 'react';
import './App.scss';
import StarshipViewer from './containers/StarshipViewer';

class App extends Component {
  render () {
    return (
      <div className="App">
        <StarshipViewer />
      </div>
    );
  }
  
}

export default App;

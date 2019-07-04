import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import StarshipViewer from './containers/StarshipViewer';
import DetailedView from './containers/DetailedView';
import Header from './components/Header';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={StarshipViewer} />
          <Route path='/ship' component={DetailedView} />
        </Switch>
      </div>
    );
  }
  
}

export default App;

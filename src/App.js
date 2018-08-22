import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheets/App.css';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';

import Home from './pages/home';
import Certifications from './pages/certifications';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
          <Switch>
            <Route exact path="/pages/certifications" component={Certifications} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;

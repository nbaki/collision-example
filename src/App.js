import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheets/App.css';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';

import Home from './pages/home';
import Certifications from './pages/certifications';
import AudiBrand from './pages/certified/brands/audi';
import AstonMartinBrand from './pages/certified/brands/aston_martin'
import BentleyBrand from './pages/certified/brands/bentley';
import BMWBrand from './pages/certified/brands/bmw';
import HondaBrand from './pages/certified/brands/honda';
import InfinitiBrand from './pages/certified/brands/infiniti';
import MiniBrand from './pages/certified/brands/mini';
import RollsRoyceBrand from './pages/certified/brands/rolls_royce';
import Location from './pages/location';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
          <Switch>
            <Route exact path="/pages/location" component={Location} />
            <Route exact path="/certified/brands/audi" component={AudiBrand} />
            <Route exact path="/certified/brands/aston_martin" component={AstonMartinBrand} />
            <Route exact path="/certified/brands/bentley" component={BentleyBrand} />
            <Route exact path="/certified/brands/bmw" component={BMWBrand} />
            <Route exact path="/certified/brands/honda" component={HondaBrand} />
            <Route exact path="/certified/brands/infiniti" component={InfinitiBrand} />
            <Route exact path="/certified/brands/mini" component={MiniBrand} />
            <Route exact path="/certified/brands/rolls_royce" component={RollsRoyceBrand} />
            <Route exact path="/pages/certifications" component={Certifications} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;

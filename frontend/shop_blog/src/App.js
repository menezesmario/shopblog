import React, { lazy, Suspense } from 'react';

import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

// import Navbar from './components/Navbar';
const Navbar = lazy (() => import('./components/Navbar'));


function App() {
  return (
    <>
      <Router>
      <Suspense fallback={<img style={{height: 300, position: "absolute", top: 0, bottom: 0, left: 0, right: 0, margin: "auto"}} src="../public/images/loading.gif" alt="loading..."/> }>
        <Navbar />
      </Suspense>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
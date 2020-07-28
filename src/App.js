import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { LoginPopup } from './components/LoginPopup'
import { HomePage, LoginPage, SignupPage, MainPage } from './pages'
import GlobalStyle from './styles/global'

function App() {
  return (
    <div className="App">
      <Router>

        {/* <LoginPopup /> */}
        <Navigation top />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignupPage} />
          <Route path='/main' component={MainPage} />
        </Switch>
        {/* <Footer /> */}
      </Router>
      <GlobalStyle />

    </div>
  );
}

export default App;
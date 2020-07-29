import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { LoginPopup } from './components/LoginPopup'
import { HomePage, LoginPage, SignupPage, MainPage } from './pages'
import { Container } from './components/Shared'
import GlobalStyle from './styles/global'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <LoginPopup /> */}
        <Switch>
          <Container>
            <Navigation top />
            <Route exact path='/' component={HomePage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />
            <Route path='/main' component={MainPage} />
            <Footer />
          </Container>
        </Switch>
      </Router>
      <GlobalStyle />

    </div>
  );
}

export default App;
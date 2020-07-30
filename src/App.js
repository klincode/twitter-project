import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link, Redirect
} from "react-router-dom";

import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { LoginPopup } from './components/LoginPopup'
import { HomePage, LoginPage, SignupPage, MainPage } from './pages'
import { Container } from './components/Shared'
import GlobalStyle from './styles/global'
import axios from 'axios'
import { API } from './API'

function App(props) {
  console.log('props');
  console.log(props);
  const [guestsPosts, setGuestsPosts] = useState([]);
  const [load, setLoad] = useState(true);
  const [isLoginPopupVisible, setLoginPopupVisible] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [toke, setToken] = useState();

  useEffect(() => {
    axios({
      method: 'post',
      url: API.endPoints.latest,
      headers: API.config.headers,
    })
      .then((res) => {
        setGuestsPosts(res.data);
        console.log(res.data);
        setLoad(false)
      })
      //todo: dodać wyświetlanie błędów
      .then((err) => console.log(err))
    setTimeout(() => setLoginPopupVisible(true), 1000)
  }, [])

  useEffect(() => {
    if (localStorage.getItem('jwt_token')) {
      setLoggedIn(true)
    }
  })

  const logOut = () => {
    console.log('logout');
    axios({
      method: 'post',
      url: API.endPoints.logout,
      headers: API.config.headers,
    })
      .then((res) => {
        console.log(res);
        setLoggedIn(false);
        localStorage.removeItem('jwt_token');
      })
      //todo: dodać wyświetlanie błędów
      .then((err) => console.log(err))
  }
  return (
    <div className="App">
      <Router>
        {/* {isLoginPopupVisible ? <LoginPopup /> : null} */}
        <Navigation top logOut={logOut} isLoggedIn={isLoggedIn} />
        <Switch>
          <Route exact path='/' component={() => <HomePage data={guestsPosts} />} />
          <Container>
            <Route path='/login'> {isLoggedIn ? <Redirect to='/main' /> : <LoginPage setToken={setToken} setLoggedIn={setLoggedIn} />}</Route>
            <Route path='/signup' component={SignupPage} />
            <Route path='/main'> {isLoggedIn ? <MainPage /> : <LoginPage setToken={setToken} setLoggedIn={setLoggedIn} />}</Route>
            <Route path='/logout' component={() => <HomePage data={guestsPosts} />} />

            {/* //! ??? */}
            <Route component={() => <h2>Page not found</h2>} />

            <Footer />
          </Container>
        </Switch>
      </Router>
      <GlobalStyle />

    </div>
  );
}

export default App;
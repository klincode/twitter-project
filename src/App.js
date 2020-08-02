import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { LoginPopup } from './components/LoginPopup'
import { HomePage, LoginPage, SignupPage, MainPage, Page404 } from './pages'
import { Container } from './components/Shared'
import GlobalStyle from './styles/global'
import axios from 'axios'
import { API } from './API'

function App() {
  const [guestsPosts, setGuestsPosts] = useState([]);
  const [load, setLoad] = useState(true);
  const [isLoginPopupVisible, setLoginPopupVisible] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState();
  const [errors, setError] = useState([]);

  useEffect(() => {
    axios({
      method: 'post',
      url: API.endPoints.latest,
      headers: API.config.headers,
    })
      .then((res) => {
        setGuestsPosts(res.data);
        setLoad(false)
      })
      .catch((err) => {
        setError([...errors, { "server": `Błąd serwera : ${err.toString()}}`, "type": "error" }]);
      });

    setTimeout(() => setLoginPopupVisible(true), 1000);
  }, [])

  useEffect(() => {
    if (localStorage.getItem('jwt_token')) {
      setLoggedIn(true);
      setToken(localStorage.getItem('jwt_token'));
    }
  }, [])

  const logOut = () => {
    axios({
      method: 'post',
      url: API.endPoints.logout,
      headers: { ...API.config.headers, 'Authorization': 'Bearer ' + token },
    })
      .then((res) => {
        setLoggedIn(false);
        localStorage.removeItem('jwt_token');
      })
      .catch((err) => {
        setError([...errors, { "server": `Błąd serwera : ${err.toString()}}`, "type": "error" }]);
      })
  }

  return (
    <div className="App">
      <Router>
        {isLoginPopupVisible && !isLoggedIn ? <LoginPopup setToken={setToken} setLoggedIn={setLoggedIn} setLoginPopupVisible={setLoginPopupVisible} token={token} /> : null}
        <Navigation top logOut={logOut} isLoggedIn={isLoggedIn} />
        <Switch>
          <Route exact path='/' component={() => <HomePage data={guestsPosts} errors={errors} />} />
          <Container>
            <Route path='/login'> {isLoggedIn ? <Redirect to='/main' /> : <LoginPage setToken={setToken} setLoggedIn={setLoggedIn} />}</Route>
            <Route path='/signup' component={SignupPage} />
            <Route path='/main'> {isLoggedIn ? <MainPage /> : <LoginPage setToken={setToken} setLoggedIn={setLoggedIn} />}</Route>
            <Route path='/logout' component={() => <HomePage data={guestsPosts} />} />
            <Footer />
          </Container>
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
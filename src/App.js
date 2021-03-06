import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LoginPopup } from './components/LoginPopup';
import { HomePage, LoginPage, SignupPage, MainPage } from './pages';
import { Container } from './components/Shared';
import GlobalStyle from './styles/global';
import axios from 'axios';
import { API } from './API';

function App() {
  const [guestsPosts, setGuestsPosts] = useState([]);
  const [load, setLoad] = useState(true);
  const [isLoginPopupVisible, setLoginPopupVisible] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState();
  const [errors, setError] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios({
      method: 'post',
      url: API.endPoints.latest,
      headers: API.config.headers,
      cancelToken: source.token
    })
      .then((res) => {
        setGuestsPosts(res.data);
        setLoad(false)
      })
      .catch((err) => {
        setError([...errors,
        { "server": `Błąd serwera : ${err.toString()}}`, "type": "error" }]);
      });

    const handle = setTimeout(() => setLoginPopupVisible(true), 10000);

    return () => {
      clearTimeout(handle)
      source.cancel();
    };
  }, [])

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      if (localStorage.getItem('jwt_token')) {
        setLoggedIn(true);
        setToken(localStorage.getItem('jwt_token'));
      }
    }
    return () => {
      isCancelled = true;
    };

  }, [])

  const logOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('jwt_token');

    const source = axios.CancelToken.source();
    axios({
      method: 'post',
      url: API.endPoints.logout,
      headers: {
        ...API.config.headers,
        'Authorization': 'Bearer ' + token
      },
      cancelToken: source.token
    })
      .then(() => {
        setLoggedIn(false);
        localStorage.removeItem('jwt_token');
      })
      .catch((err) => {
        setError([...errors, { "server": `Błąd serwera : ${err.toString()}}`, "type": "error" }]);
      })
      .finally(() => {
        return () => {
          source.cancel();
        };
      })
  }

  return (
    <div className="App">
      <Router>
        {isLoginPopupVisible && !isLoggedIn ?
          <LoginPopup
            setToken={setToken}
            setLoggedIn={setLoggedIn}
            setLoginPopupVisible={setLoginPopupVisible}
            token={token} /> : null}

        <Navigation top logOut={logOut} isLoggedIn={isLoggedIn} />

        <Switch>
          {/* <Route exact path='/' component={() => <HomePage data={guestsPosts} errors={errors} isLoggedIn={isLoggedIn} />} /> */}
          <Route exact path='/'> {isLoggedIn ? <Redirect to='/main' /> : <HomePage data={guestsPosts} errors={errors} isLoggedIn={isLoggedIn} />}</Route>
          <Container>

            <Route path='/login'> {isLoggedIn ? <Redirect to='/main' /> : <LoginPage setToken={setToken} setLoggedIn={setLoggedIn} />}</Route>
            <Route path='/signup' component={SignupPage} />
            <Route path='/main'> {isLoggedIn ? <MainPage /> : <LoginPage setToken={setToken} setLoggedIn={setLoggedIn} />}</Route>
            <Route path='/logout' component={() => <HomePage data={guestsPosts} />} />
            <Footer logOut={logOut} isLoggedIn={isLoggedIn} />
          </Container>
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;
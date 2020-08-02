import React, { useState } from 'react';
import { Form, Input, FormLabel, Button, Wrapper } from '../Shared';
import axios from 'axios';
import { API } from '../../API';
import { showMessage } from '../../helpers/showMessage';

const LoginForm = ({ setToken, setLoggedIn }) => {
  const [errors, setError] = useState([]);
  const [messages, setMessage] = useState([]);
  const [userName, setUserName] = useState('adam');
  const [userPass, setUserPass] = useState('1234');

  const userLogIn = (payload) => {
    axios({
      method: 'post',
      url: API.endPoints.login,
      headers: API.config.headers,
      data: payload
    })
      .then((res) => {
        if (res.data.error) {
          setError([...errors, { "server": "Nie udało się zalogować. Sprawdź login i hasło", "type": "error" }])
        } else if (res.data.password) {
          setError([...errors, { "server": res.data.password[0], "type": "error" }])
        }
        else if (!res.data.error) {
          setMessage([...messages, { "server": "Logowanie zakończone powodzeniem", "type": "info" }]);
          authenticateUser(res.data.jwt_token)
        }
      })
      .catch((err) => {
        setError([...errors, { "server": err.toString(), "type": "error" }])
      })
  }

  const authenticateUser = (token) => {
    setToken(token);
    localStorage.setItem('jwt_token', token);
    setLoggedIn(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      userLogIn({
        "username": userName,
        "password": userPass,
        "ttl": 3600
      })
    }
  }

  const validateForm = () => {
    let errorMessages = [];
    if (userName === '') {
      errorMessages.push({ 'userName': 'Wprowadź nazwię użytkownika', 'type': 'error' });
    }
    if (userPass === '') {
      errorMessages.push({ 'userPass': 'Wprowadź hasło', 'type': 'error' });
    }
    if (errorMessages.length > 0) {
      setError(errorMessages); return false
    }
    else {
      setError([]); return true
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "userName") {
      setUserName(value)
    };

    if (name === "userPass") {
      setUserPass(value)
    };
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Nazwa Użytkownika
          <Input type="text" name="userName" onChange={handleInputChange} value={userName} />
        </FormLabel>
        {showMessage('userName', errors)}

        <FormLabel>
          Hasło
          <Input type="password" name="userPass" onChange={handleInputChange} value={userPass} />
        </FormLabel>
        {showMessage('userPass', errors)}

        <Button full type="submit">Zaloguj się</Button>
      </Form>

      {showMessage('server', errors)}
      {showMessage('server', messages)}
    </>
  );
}

export { LoginForm };
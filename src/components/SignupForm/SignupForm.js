import React, { useState } from 'react';
import { Form, Input, FormLabel, Button } from '../Shared';
import { API } from '../../API';
import { showMessage } from '../../helpers/showMessage';
import axios from 'axios';

const SignupForm = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userConfirmPass, setUserConfirmPass] = useState('');
  const [errors, setError] = useState([]);
  const [messages, setMessage] = useState([]);

  const createUser = (payload) => {
    axios({
      method: 'post',
      url: API.endPoints.signup,
      headers: API.config.headers,
      data: payload
    })
      .then((res) => {
        if (!res.data.signedup) {
          setError([...errors,
          { "server": `Błąd serwera : ${res.status} ${res.data.message.username[0]}`, "type": "error" }]);
        }
        else {
          setMessage([...messages,
          { "server": `Użytkownik ${res.data.user.username} : ${res.data.user.email} został zarejestrowany w systemie`, "type": "info" }])
        }
      })
      .catch((err) => {
        setError([...errors,
        { "server": `Błąd serwera : ${err.response.status} ${err.response.statusText}`, "type": "error" }])
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      createUser({
        "username": userName,
        "email": userEmail,
        "password": userPass
      })

    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'userName': { setUserName(value); break; }
      case 'userEmail': { setUserEmail(value); break; }
      case 'userPass': { setUserPass(value); break; }
      case 'userConfirmPass': { setUserConfirmPass(value); break; }
      default: setError([...errors,
      { "server": `Sth went wrong...`, "type": "error" }])
    }
  }

  const validateForm = () => {
    let errorMessages = [];
    if (userName.length < 4 || userName === '' || (/\s/.test(userName))) {
      errorMessages.push({ 'userName': 'Wymagane min. 4 znaki \\ nie może zawierać spacji', 'type': 'error' });
    }
    if (!userEmail.includes('@') || userEmail === '' || (/\s/.test(userEmail))) {
      errorMessages.push({ 'userEmail': 'Niprawidłowy adres E-mail', 'type': 'error' });
    }
    if (userPass === '' || (/\s/.test(userPass)) || userPass.length < 6) {
      errorMessages.push({ 'userPass': 'Wymagane min. 6 znaki \\ nie może zawierać spacji', 'type': 'error' });
    }
    if (!(/[!#@$%]/i.test(userPass)) || !(/[0-9]{1,}/i.test(userPass))) {
      errorMessages.push({ 'userPass': 'Hasło musi zawierać znaki specjalne i jedną cyfrę', 'type': 'error' });
    }
    if (userConfirmPass !== userPass) {
      errorMessages.push({ 'userConfirmPass': 'Wprowadzone hasła są różne', 'type': 'error' });
    }
    if (errorMessages.length > 0) {
      setError(errorMessages);
      return false
    }
    else {
      setError([]);
      return true
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Nazwa Użytkownika
        <Input
            onChange={handleChange}
            type="text"
            value={userName}
            name="userName" />
          {showMessage('userName', errors, messages)}
        </FormLabel>

        <FormLabel>
          Adres e-mail
        <Input
            onChange={handleChange}
            type="text"
            value={userEmail}
            name="userEmail" />
          {showMessage('userEmail', errors, messages)}
        </FormLabel>

        <FormLabel>
          Hasło
        <Input
            onChange={handleChange}
            type="password"
            value={userPass}
            name="userPass" />
          {showMessage('userPass', errors, messages)}
        </FormLabel>

        <FormLabel>
          Powtórz hasło
        <Input
            onChange={handleChange}
            type="password"
            value={userConfirmPass}
            name="userConfirmPass" />
          {showMessage('userConfirmPass', errors, messages)}
        </FormLabel>

        <Button full type="submit">Zarejestruj się</Button>
      </Form>

      {showMessage('server', errors, messages)}
    </>
  );
}

export { SignupForm }

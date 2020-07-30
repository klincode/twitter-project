import React, { useState } from 'react';
import { Form, Input, FormLabel, Button, Alert } from '../Shared';
import { API } from '../../API';
import axios from 'axios'

const SignupForm = () => {
  const [userName, setUserName] = useState('homer666');
  const [userEmail, setUserEmail] = useState('adam@em.pl');
  const [userPass, setUserPass] = useState('adam!@#1');
  const [userConfirmPass, setUserConfirmPass] = useState('adam!@#1');
  const [errors, setError] = useState([]);
  const [messages, setMessage] = useState([]);

  const createUser = (payload) => {
    axios.post(
      API.endPoints.signup,
      payload,
      API.config.headers
    )
      .then((res) => {
        if (!res.data.signedup) {
          setError([...errors, { "server": `Błąd serwera : ${res.status} ${res.data.message.username[0]}`, "type": "error" }]);

        } else {
          setMessage([...messages, { "server": `Użytkownik ${res.data.user.username} : ${res.data.user.email} został zarejestrowany w systemie`, "type": "info" }])

        }
      })
      .catch((err) => {
        setError([...errors, { "server": `Błąd serwera : ${err.response.status} ${err.response.statusText}`, "type": "error" }])
      })

  }

  const clearForm = () => {
    setUserName('');
    setUserEmail('');
    setUserPass('');
    setUserConfirmPass('');
    setMessage(['']);
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

    if (errorMessages.length > 0) { setError(errorMessages); return false } else { setError([]); return true }

  }

  const showMessageAlert = (inputName, errors = [], messages = []) => {
    let message = {
      text: '',
      type: ''
    };
    errors.filter(item => {
      if (Object.keys(item)[0] === inputName) {
        message.text = item[inputName];
        message.type = item['type'];
      }
    })

    messages.filter(item => {
      if (Object.keys(item)[0] === inputName) {
        message.text = item[inputName];
        message.type = item['type'];
      }
    })
    if (message.type === 'error') return <Alert error >{message.text}</Alert>
    if (message.type === 'info') return <Alert info center>{message.text}</Alert>

  }



  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Nazwa Użytkownika
        <Input onChange={handleChange} type="text" value={userName} name="userName" />
          {showMessageAlert('userName')}
        </FormLabel>
        <FormLabel>
          Adres e-mail
        <Input onChange={handleChange} type="text" value={userEmail} name="userEmail" />
          {showMessageAlert('userEmail')}
        </FormLabel>
        <FormLabel>
          Hasło
        <Input onChange={handleChange} type="password" value={userPass} name="userPass" />
          {showMessageAlert('userPass')}
        </FormLabel>
        <FormLabel>
          Powtórz hasło
        <Input onChange={handleChange} type="password" value={userConfirmPass} name="userConfirmPass" />
          {showMessageAlert('userConfirmPass')}
        </FormLabel>
        <Button type="submit">Zarejestruj się</Button>
      </Form>
      {showMessageAlert('server')}
    </>
  );
}

export { SignupForm }

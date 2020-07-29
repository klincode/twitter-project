import React, { useState } from 'react';
import { Form, Input, FormLabel, Button, Alert } from '../Shared';
import { API } from '../../API';
import axios from 'axios'

const SignupForm = () => {
  const [userName, setUserName] = useState('homer666');
  const [userEmail, setUserEmail] = useState('adam@em.pl');
  const [userPass, setUserPass] = useState('adam!@#1');
  const [userConfirmPass, setUserConfirmPass] = useState('adam!@#1');
  const [messages, setMessage] = useState([]);

  const createUser = (payload) => {
    axios.post(
      API.endPoints.signup,
      payload,
      API.config.headers
    )
      .then((res) => {
        console.log("response", res);
        setMessage([...messages, { "server": `Użytkownik ${res.data.user.username} : ${res.data.user.email} został zarejestrowany w systemie`, "type": "info" }])
      })
      .catch((err) => {
        setMessage([...messages, { "server": `Błąd serwera : ${err.response.status} ${err.response.statusText}`, "type": "error" }])
        console.log(err.response.statusText);
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('wysłane');
      createUser({
        "username": "adam66ff6",
        "email": "adamklin86k@gmail.com",
        "password": "1234"
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
    let messages = [];
    if (userName.length < 4 || userName === '' || (/\s/.test(userName))) {
      messages.push({ 'userName': 'Wymagane min. 4 znaki \\ nie może zawierać spacji', 'type': 'error' });
    }
    if (!userEmail.includes('@') || userEmail === '' || (/\s/.test(userEmail))) {
      messages.push({ 'userEmail': 'Niprawidłowy adres E-mail' });
    }
    if (userPass === '' || (/\s/.test(userPass)) || userPass.length < 6) {
      messages.push({ 'userPass': 'Wymagane min. 6 znaki \\ nie może zawierać spacji', 'type': 'error' });
    }
    if (!(/[!#@$%]/i.test(userPass)) || !(/[0-9]{1,}/i.test(userPass))) {
      messages.push({ 'userPass': 'Hasło musi zawierać znaki specjalne i jedną cyfrę', 'type': 'error' });
    }
    if (userConfirmPass !== userPass) {
      messages.push({ 'userConfirmPass': 'Wprowadzone hasła są różne', 'type': 'error' });
    }
    setMessage(messages);
    let validationResult = messages.length === 0 ? true : false;
    return validationResult

  }

  const showMessageAlert = (inputName) => {
    // [0] - nazwa pola
    // [1] - typ komunikatu [error,info]
    let message = [];
    messages.filter(item => {
      // console.log(Object.keys(item)[1]);
      console.log(item['type']);
      if (Object.keys(item)[0] === inputName) {
        message[0] = item[inputName];
        message[1] = item['type'];
      }
    })

    if (message[1] === 'error') return <Alert error center>{message[0]}</Alert>
    if (message[1] === 'info') return <Alert info center>{message[0]}</Alert>

  }



  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Nazwa Użytkownika
        <Input onChange={handleChange} type="text" value={userName} name="userName" />
          <Alert error>{showMessageAlert('userName')}</Alert>
        </FormLabel>
        <FormLabel>
          Adres e-mail
        <Input onChange={handleChange} type="text" value={userEmail} name="userEmail" />
          <Alert error>{showMessageAlert('userEmail')}</Alert>
        </FormLabel>
        <FormLabel>
          Hasło
        <Input onChange={handleChange} type="password" value={userPass} name="userPass" />
          <Alert error>{showMessageAlert('userPass')}</Alert>
        </FormLabel>
        <FormLabel>
          Powtórz hasło
        <Input onChange={handleChange} type="password" value={userConfirmPass} name="userConfirmPass" />
          <Alert error>{showMessageAlert('userConfirmPass')}</Alert>
        </FormLabel>
        <Button type="submit">Zarejestruj się</Button>
      </Form>
      {showMessageAlert('server')}
    </>
  );
}

export { SignupForm }

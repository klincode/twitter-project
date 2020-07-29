import React, { useState } from 'react';
import { Form, Input, FormLabel, Button, Alert } from '../Shared'
const SignupForm = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userConfirmPass, setUserConfirmPass] = useState('');
  const [errors, setError] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

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
    let errors = [];
    if (userName.length < 4 || userName === '' || (/\s/.test(userName))) {
      errors.push({ 'userName': 'Wymagane min. 4 znaki \\ nie może zawierać spacji' });
    }
    if (!userEmail.includes('@') || userEmail === '' || (/\s/.test(userEmail))) {
      errors.push({ 'userEmail': 'Niprawidłowy adres E-mail' });
    }
    if (userPass === '' || (/\s/.test(userPass)) || userPass.length < 6) {
      errors.push({ 'userPass': 'Wymagane min. 6 znaki \\ nie może zawierać spacji' });
    }
    if (!(/[!#@$%]/i.test(userPass)) || !(/[0-9]{1,}/i.test(userPass))) {
      errors.push({ 'userPass': 'Hasło musi zawierać znaki specjalne i jedną cyfrę' });
    }
    if (userConfirmPass !== userPass) {
      errors.push({ 'userConfirmPass': 'Wprowadzone hasła są różne' });
    }

    setError(errors);
    console.log(errors);
  }

  const showError = (inputName) => {
    let error = '';
    errors.filter(item => {
      if (Object.keys(item).join() === inputName) {
        error = item[inputName];
      }
    })
    console.log(error);
    return error;
  }


  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Nazwa Użytkownika
        <Input onChange={handleChange} type="text" value={userName} name="userName" />
        <Alert error>{showError('userName')}</Alert>
      </FormLabel>
      <FormLabel>
        Adres e-mail
        <Input onChange={handleChange} type="text" value={userEmail} name="userEmail" />
        <Alert error>{showError('userEmail')}</Alert>
      </FormLabel>
      <FormLabel>
        Hasło
        <Input onChange={handleChange} type="password" value={userPass} name="userPass" />
        <Alert error>{showError('userPass')}</Alert>
      </FormLabel>
      <FormLabel>
        Powtórz hasło
        <Input onChange={handleChange} type="password" value={userConfirmPass} name="userConfirmPass" />
        <Alert error>{showError('userConfirmPass')}</Alert>
      </FormLabel>
      <Button type="submit">Zarejestruj się</Button>
    </Form>
  );
}

export { SignupForm }

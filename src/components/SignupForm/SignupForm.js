import React from 'react';
import { Form, Input, FormLabel, Button } from '../Shared'
const SignupForm = () => {
  return (
    <Form>
      <FormLabel>Nazwa Użytkownika<Input type="text" /></FormLabel>
      <FormLabel>Adres e-mail<Input type="email" /></FormLabel>
      <FormLabel>Hasło<Input type="password" /></FormLabel>
      <FormLabel>Powtórz hasło<Input type="password" /></FormLabel>
      <Button type="submit">Zarejestruj się</Button>
    </Form>
  );
}

export { SignupForm }

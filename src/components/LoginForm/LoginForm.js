import React from 'react';
import { Form, Input, FormLabel, Button, Wrapper } from '../Shared'

const LoginForm = () => {
  return (
    <Form>
      <FormLabel>Nazwa Użytkownika<Input type="text" /></FormLabel>
      <FormLabel>Hasło<Input type="password" /></FormLabel>
      <Button full type="submit">Zaloguj się</Button>
    </Form>

  );
}

export { LoginForm };
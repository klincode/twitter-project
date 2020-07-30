import React from 'react';
import { Alert } from '../components/Shared'
export const showMessage = (inputName, errors = [], messages = []) => {
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
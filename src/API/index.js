import axios from 'axios';

export const API = {
  config: {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  },
  endPoints: {
    "signup": "https://akademia108.pl/api/social-app/user/signup",
    "login": "https://akademia108.pl/api/social-app/user/login",
    "logout": "https://akademia108.pl/api/social-app/user/logout",
    "latest": "https://akademia108.pl/api/social-app/post/latest",
    "usersList": "https://akademia108.pl/api/social-app/follows/recommendations"
  },
}


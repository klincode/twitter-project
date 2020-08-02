let token = localStorage.getItem('jwt_token') || "";
export const API = {
  config: {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
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

console.log('====================================');
console.log(API.config.headers);
console.log('====================================');
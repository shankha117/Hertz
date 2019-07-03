
import axios from 'axios'

var headers = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}
export function login(credentials) {
  console.log("I am in login AUTH");
  console.log(credentials);


  return new Promise((res, rej) => {
    axios
      .post('http://0.0.0.0:8001/hertz/login', credentials, { headers: headers })
      .then(response => {
        res(response.data)
      })
      .catch(err => {
        let err_message = err.response.data.Error;
        rej(err_message);
      })
  })
}

export function getLocalUser() {
  const userStr = localStorage.getItem('user')
  if (!userStr) {
    return null
  }
  return JSON.parse(userStr)
}

import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}

export function login(credentials) {
  console.log('I am in login AUTH')
  console.log(credentials)

  return new Promise((res, rej) => {
    axios
      .post('http://0.0.0.0:8001/hertz/login', credentials, {
        headers: headers
      })
      .then(response => {
        res(response.data)
      })
      .catch(err => {
        let err_message = err.response.data.Error
        rej(err_message)
      })
  })
}

export async function register(credentials) {
  return new Promise((res, rej) => {
    axios
      .post('http://0.0.0.0:8001/hertz/register', credentials, {
        headers: headers
      })
      .then(response => {
        res(response.data)
      })
      .catch(err => {
        let err_message = err.response.data.Error
        rej(err_message)
      })
  })
}

export function getLocalUser() {
  if (localStorage.getItem('user') === null) {
    return null
  } else {
    return JSON.parse(localStorage.getItem('user'))
  }

  // if (!localStorage.getItem('user')) {
  //   return null
  // }
  // else{
  //   return JSON.parse(userStr)
  // }
}

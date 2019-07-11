const email_reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
export function Login_validator(email, password) {
  let res = { status: '', err: '' }
  if (email.length != 0) {
    if (email_reg.test(String(email).toLowerCase())) {
      if (password.length != 0) {
        res['status'] = true
      } else {
        res['status'] = false
        res['err'] = 'password can not be empty'
      }
    } else {
      res['status'] = false
      res['err'] = 'please enter a valid email'
    }
  } else {
    res['status'] = false
    res['err'] = 'email can not be empty'
  }
  return res
}

export function Register_validator(username, email, password) {
  let res = { status: '', err: '' }
  if (username.length != 0) {
    if (email.length != 0) {
      if (email_reg.test(String(email))) {
        if (password.length != 0) {
          res['status'] = true
        } else {
          res['status'] = false
          res['err'] = 'password can not be empty'
        }
      } else {
        res['status'] = false
        res['err'] = 'please enter a valid email'
      }
    } else {
      res['status'] = false
      res['err'] = 'email can not be empty'
    }
  } else {
    res['status'] = false
    res['err'] = 'please enter a username for your account'
  }
  return res
}

//TODO--------------need to add username and password

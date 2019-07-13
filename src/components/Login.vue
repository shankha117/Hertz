<template>
  <div class="container" :class="{ 'sign-up-active': signUp }">
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-left">
          <h2>Welcome Back!</h2>
          <p>Log in to your Hertz account</p>
          <button class="invert" id="signIn" @click="signUp = !signUp">Sign In</button>
        </div>
        <div class="overlay-right">
          <h2>Hello, Amigo!</h2>
          <p>
            Not a member yet?
            <br />Sign Up Now
          </p>
          <button class="invert" id="signUp" @click="signUp = !signUp">Sign Up</button>
        </div>
      </div>
    </div>
    <form class="sign-up">
      <h2>Create Account</h2>
      <div>Use your email for registration</div>
      <input type="text" v-model="register.username" placeholder="Name" />
      <input type="text" v-model="register.email" placeholder="Email" />
      <input type="password" v-model="register.password" placeholder="Password" />
      <button type="button" @click="Registervalidation">Sign Up</button>
    </form>
    <form class="sign-in">
      <h2>Sign In</h2>
      <div>Use your account</div>
      <input type="text" v-model="login.email" placeholder="Email" />
      <input type="password" v-model="login.password" placeholder="Password" />
      <button type="button" @click.stop="loginvalidation">Sign In</button>
      <a href="#">Forgot your password?</a>
    </form>
  </div>
</template>

<script>
import { login, register } from '../helper/Auth'
// import { log } from 'util';
import { Login_validator, Register_validator } from '../helper/Validator'

export default {
  name: 'signin',
  data: () => {
    return {
      signUp: false,
      login_err: 'Login Error',
      register_err: 'Register Error',
      login: {
        email: '',
        password: ''
      },
      register: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginvalidation() {
      let email = this.login.email
      let password = this.login.password
      let validation_res = Login_validator(email, password)
      if (validation_res['dial'] == true) {
        this.alreadyloggedin()
      } else if (validation_res['status'] == true) {
        this.Loginauthenticate()
      } else {
        this.error_notifications(this.login_err, validation_res['err'])
      }
    },
    Loginauthenticate() {
      this.$store.dispatch('login')
      login(this.$data.login)
        .then(res => {
          this.$store.commit('loginSuccess', res)
          this.$router.push({ path: '/home' })
        })
        .catch(error => {
          this.error_notifications(this.login_err, error)
        })
    },
    Registervalidation() {
      var username = this.register.username
      var email = this.register.email
      let password = this.register.password
      let validation_res = Register_validator(username, email, password)

      if (validation_res['dial'] == true) {
        this.alreadyloggedin()
      } else if (validation_res['status'] == true) {
        this.Registerauthenticate()
      } else {
        this.error_notifications(this.register_err, validation_res['err'])
      }
    },
    Registerauthenticate() {
      register(this.$data.register)
        .then(res => {
          console.log(res)
          this.$store.commit('loginSuccess', res)
          this.$router.push({ path: '/home' })
        })
        .catch(error => {
          this.error_notifications(this.register_err, error)
        })
    },
    alreadyloggedin() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: `Already Logged In`,
        text:
          'redirect to the home page with current login creds? Cancel to login with new creds',
        accept: this.redirect,
        cancel: this.delete_user
      })
    },
    redirect() {
      this.$router.push({ path: '/home' })
    },
    delete_user() {
      this.$store.commit('logout')
    },
    error_notifications(type, error_message) {
      this.$vs.notify({
        color: 'danger',
        icon: 'error',
        position: 'top-right',
        title: type,
        text: error_message
      })
    }
  },
  computed: {
    authError() {
      return this.$store.state.authError
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 768px;
  height: 480px;
  // border-radius: 10px;
  border: none;
  overflow: hidden;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.385), 0 10px 10px rgba(0, 0, 0, 0.385);
  background: linear-gradient(to bottom, #efefef, #ccc);

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    // padding: 60px 40px;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
  }

  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: linear-gradient(to bottom right, #7fd625, #009345);
    color: #fff;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }

  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 60px 40px;
    width: 50%;
    height: 100%;
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }

  .overlay-left {
    @include overlays(-20%);
  }

  .overlay-right {
    @include overlays(0);
    right: 0;
  }
}

h2 {
  margin: 0;
}

p {
  margin: 20px 0 30px;
}

a {
  color: #222;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}

// .submit_button {
//   border-radius: 20px;
//   border: 0px;
//   color: #fff;
//   font-size: 1rem;
//   font-weight: bold;
//   padding: 10px 40px;
//   letter-spacing: 1px;
//   cursor: pointer;
//   transition: transform 0.1s ease-in;
// }

button {
  border-radius: 20px;
  border: 0px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }
}

button.invert {
  background-color: transparent;
  // border-color: ;
  border: 1px solid #fff;
  // background-color: #009345;
}

form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 60px 40px;
  width: 50%;
  height: 100%;
  text-align: center;
  background: linear-gradient(to bottom, #efefef, #ccc);
  transition: all 0.5s ease-in-out;

  div {
    font-size: 1rem;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 15px;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
      0 1px 0 #fff;
    overflow: hidden;

    &:focus {
      outline: none;
      background-color: #fff;
    }
  }
  button {
    background: linear-gradient(to bottom right, #7fd625, #009345);
  }
}

.sign-in {
  left: 0;
  z-index: 2;
}

.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}

.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }

  .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    transform: translateX(50%);
  }

  .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    transform: translateX(20%);
  }
}

@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}
</style>

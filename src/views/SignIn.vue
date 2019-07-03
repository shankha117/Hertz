<template>
  <div id="SignIn">
    <div id="heading">
      <h1><span>Hertz</span>.io</h1>
      <img alt="Vue logo" src="../assets/AIw.png" />
    </div>
    <div id="form">
      <Login class="Login"></Login>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'SignIn',
  components: {
    Login
  },
  beforeMount() {
    this.$store.state.showsidebar.value = false
  }
}
</script>

<style lang="scss" scoped>
// body {
//   margin: 0;
//   padding: 0;
//   height: 100vh;
// }

#SignIn {
  font-family: Tahoma;
  font-size: 1.6rem;
  color: #222;
  margin: 0px;
  padding: 0px;
  height: 100vh;
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
  // background-color: #29323c;
  justify-content: center;
  align-items: center;
}

#heding {
  display: inline;
  position: relative;
  // float: left;
}
img {
  width: 80px;
  height: 70px;
  margin-top: 20px;
  padding-left: 10px;
}
h1 {
  color: #fdfbfb;
  padding-left: 50px;
  padding-top: 20px;
  // display: inline;
  // position: relative;
  float: left;
  font-family: sans-serif;
  font-weight: 100; // padding-left: 150px;
  span {
    font-weight: 300;
    font-size: larger;
    font-family: 'Audiowide', cursive;
  }
}

.Login {
  width: 700px;
  height: 450px;
}
#form {
  // width: 400px;
  // display: flexbox;
  float: right;
  padding-top: 7%;
  padding-right: 50px;
}
</style>

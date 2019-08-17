<template>
  <div id="SignIn">
    <div id="heading">
      <h1><span>Hertz</span>.io</h1>
      <img alt="Vue logo" src="../assets/AIw.png" />
      <ul> 
        <li><a href="">about</a></li>
        <li><a href="">services</a></li>
        <li><a href="">conatct</a></li>
      </ul>
    </div>
  
    <div id="form">
      <Login class="Login"></Login>
    </div>
    <div id="svg"></div>
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
    this.$store.state.showsidebar = false
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
  margin: auto;
  padding: 0px;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  // background-image:url("../assets/undraw_Data_points_ubvs.svg");
  background-size: cover;
  background-blend-mode: multiply;
  // background-color: #29323c;
  justify-content: center;
  align-items: center;
}

#heding {
  display: inline;
  position: relative;
  height: 20vh;
  width: 100vw;
  // float: left;
}
#heading ul{
  list-style-type: none;
  float: right;
  // margin-right: 20px;
}
#heading ul li {
  display: inline-block;
  padding-top: 30px;
  padding-right: 22px;
 
}
#heading ul li a{
  color: #fdfbfb;
  font-family: 'Roboto Mono', monospace;
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
#svg{
  position: relative;
  top: 12px;
  left: 50px;
  float: left;
  // background: red;
  height: 80vh;
  width: 55vw;
  // display: block;
  
  // background-image: url("../assets/undraw_visual_data_b1wx.svg");
  background-image: url("../assets/undraw_at_the_park_2e47.svg");

  // height: 70%;
  // width: 80%;

}
#form {
  height: 100px;
  // width: 20vw;
  float: right;
  padding-top: 10%;
  padding-right: 20px;
}
</style>

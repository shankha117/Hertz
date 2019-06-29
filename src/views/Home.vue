<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <HelloWorld :msg="msg" />

    <img style="width:2%;" alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Sidebar from '@/components/sidebar.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: ' I AM PASSING THIS FROM MY HOME VUE TO HELLOWORD COMPONENT'
    }
  }
}
</script>

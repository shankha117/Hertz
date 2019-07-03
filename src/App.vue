<template>
  <div id="app">
    <div class="sidebars" v-show="showside.value">
      <Sidebar></Sidebar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

// import Sidebar from '@/components/sidebar.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'app',
  components: {
    Sidebar
  },
  computed: {
    showside() {
      return this.$store.state.showsidebar
    }
  }
}
</script>

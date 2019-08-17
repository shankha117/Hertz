<template>
  <div id="stream">
    <Camera class="cam"></Camera>
  </div>
</template>

<script>
import Camera from '@/components/Camera.vue'
export default {
  name: 'about',
  data: () => {
    return {}
  },
  components: {
    Camera
  },
  methods: {
    show_loading(value) {
      if (value) {
        this.$vs.loading({
          type: 'radius',
          scale: 2.5,
          background:
            'linear-gradient(90deg, rgba(50,44,44,0.6250875350140056) 100%, rgba(215,255,254,1) 100%)',
          text: 'Loading Models',
          color: '#b3ffb3'
        })
      } else {
        this.$vs.loading.close()
      }
    }
  },
  watch: {
    loading_models(newval) {
      this.show_loading(newval)
    }
  },
  created() {
    this.show_loading(this.$store.getters.isloadingmodels)
  },
  computed: {
    loading_models() {
      return this.$store.getters.isloadingmodels
    }
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
#stream {
  margin-top: 20px;
}
</style>

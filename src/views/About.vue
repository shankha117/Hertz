<template>
  <div id="stream">
    <Camera class="cam"></Camera>
    
  </div>
</template>

<script>
import Camera from '@/components/Camera.vue'
import { log } from 'util';

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
        console.log("I AM HERE closing the ");
        this.$vs.loading.close()
        console.log('closed');
      }
    },
  },

mounted() {
  this.$store.dispatch('loadmodel')
},
  watch: {
    loading_models(newval) {
      console.log("thsi is newval",newval);
      this.show_loading(newval)
    }
  },
  created() {
    console.log("BEFORE MOUNT",this.$store.getters.isloadingmodels);
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

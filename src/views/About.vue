<template>
  <div id="stream">
    <Camera class="cam"></Camera>    
  </div>
</template>

<script>
import Camera from '@/components/Camera.vue'
import { log } from 'util';
import Vue from 'vue'
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';


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
        this.$vs.loading.close(),
        this.$vs.notify({title:'Models Loaded Successfully',text:'Face App is ready',position: 'top-right',color:'success',icon:'check_box'})
      }
    },
  },

async mounted() {
  await this.$store.dispatch('loadmodel')
},
  watch: {
    loading_models(newval) {
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

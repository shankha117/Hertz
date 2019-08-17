<template>
  <div class="about">
    <div class="content">
      <vs-row vs-justify="center">
        <vs-col
          class="card"
          type="flex"
          vs-justify="center"
          vs-align="center"
          vs-w="3"
        >
          <vs-card actionable class="cardx">
            <div slot="header">
              <h3>Hello world !</h3>
            </div>
            <div slot="media">
              <img src="../assets/card.png" />
            </div>
            <div>
              <span
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
              >
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button color="primary" type="gradient">View</vs-button>
                <vs-button color="danger" type="gradient">Delete</vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
        <vs-col
          class="card"
          type="flex"
          vs-justify="center"
          vs-align="center"
          vs-w="3"
        >
          <vs-card actionable class="cardx">
            <div slot="header">
              <h3>Hello world !</h3>
            </div>
            <div slot="media">
              <img src="../assets/card.png" />
            </div>
            <div>
              <span
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
              >
            </div>
            <div slot="footer">
              <vs-row vs-justify="flex-end">
                <vs-button color="primary" type="gradient">View</vs-button>
                <vs-button color="danger" type="gradient">Delete</vs-button>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import 'vuesax/dist/vuesax.css'
// import Sidebar from '@/components/Sidebar.vue'
// import Sidebar from '@/components/sidebar.vue'

export default {
  name: 'home',
  beforeMount() {
    this.$store.state.showsidebar = true
  }
}
</script>

<style>
.content row col card {
  margin-top: 20px;
}
.card {
  padding: 20px;
}
img {
  width: 10px;
  height: 200px;
}
</style>

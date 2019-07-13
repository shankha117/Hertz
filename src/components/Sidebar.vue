<template lang="html">
  <div id="parentx">
    <div>
      <vs-navbar v-model="sidebar.activeItem" class="navbar">
        <div slot="title">
          <vs-navbar-title>
            <vs-button
              @click.stop=";(sidebar.active = true), (sidebar.notExpand = false)"
              color="linear-gradient(to bottom right, #7fd625, #009345)"
              icon="menu"
              height="10px"
            >
            </vs-button>
            <span class="title">{{ sidebar.app_title }}</span>
          </vs-navbar-title>
        </div>
        <vs-navbar-item index="0">
          <a href="#">Home</a>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <a href="#">News</a>
        </vs-navbar-item>
        <vs-navbar-item index="2">
          <a href="#">Update</a>
        </vs-navbar-item>
        <vs-button
          @click.stop="logout"
          class="logout_button"
          color="dark"
          size="small"
          type="gradient"
          icon="exit_to_app"
          >logout</vs-button
        >
      </vs-navbar>
    </div>
    <vs-sidebar
      :reduce="sidebar.reduce"
      :reduce-not-hover-expand="sidebar.notExpand"
      parent="body"
      default-index="1"
      color="success"
      class="sidebarx"
      v-model="sidebar.active"
    >
      <div class="header-sidebar" slot="header">
        <vs-avatar size="70px" />{{ currentusername }}
      </div>
      <vs-sidebar-group open title="Application">
        <vs-sidebar-item index="5" icon="verified_user">
          Configurations
        </vs-sidebar-item>
        <vs-sidebar-group title="Store">
          <vs-sidebar-item index="2.1" icon="store" to="/about">
            NLP
          </vs-sidebar-item>
          <vs-sidebar-item index="2.2" icon="nature_people">
            OpenCV
          </vs-sidebar-item>
          <vs-sidebar-item index="2.3" icon="style">
            SomeMagic
          </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-item index="2" icon="gavel">
          History
        </vs-sidebar-item>
        <vs-sidebar-item index="3" icon="https">
          Security
        </vs-sidebar-item>
        <vs-sidebar-item index="4" icon="help">
          Help
        </vs-sidebar-item>
      </vs-sidebar-group>

      <vs-divider icon="person" position="left">
        User
      </vs-divider>

      <vs-sidebar-item index="6" icon="account_box">
        Profile
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>


export default {
  // data:()=>{
  //   return{
  //   currentusername:''
  //   }

  // },
  methods:{
    logout(){
      this.$store.commit('logout')
      this.$router.push({ path: '/Login'})
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.sidebar
    },
    currentusername(){
    return this.$store.getters.currentUsername
    }
  },
  // beforeMount(){
  //     this.data.currentusername = this.$store.getters.currentUser.username
  //   }
}
</script>

<style lang="stylus">
.navbar {
  height: 60px;
  padding-right: 100px;

  .title {
    margin-left: 30px;
    font-family: 'Audiowide', cursive;
    font-weight: 600;
    font-size: 30px;
  }

  .logout_button {
    position: relative;
    left: 50px;
  }
}

.vs-sidebar-group {
  font-size: 10px;
  font-weight: 400;
}

.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    > button {
      margin-left: 10px;
    }
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}
</style>

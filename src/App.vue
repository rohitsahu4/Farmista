<template>
  <v-app>
  
    <v-navigation-drawer app style="z-index:1;" class="secondary" dark permanent absolute v-if="isDrawer">
      <v-toolbar dark class="transparent" style="margin-top:70px" flat>
        <v-list dense class="pa-0">
          <v-list-tile v-for="menuitem in menuItems" :key="menuitem.title" :to="menuitem.link">
            <v-list-tile-action>
              <v-icon>{{ menuitem.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ menuitem.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logout" v-if="userSignedIn">
            <v-list-tile-action>
              <v-icon>logout</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Log Out</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
  
  
        </v-list>
      </v-toolbar>
    </v-navigation-drawer>
  
  
    <v-toolbar dark color="secondary" fixed>
      <v-toolbar-side-icon @click="isDrawer=!isDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="font-weight-regular">
        Farmista
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="hidden-sm-and-down" flat @click="goto('/')">Home
          <v-icon right>home</v-icon>
        </v-btn>
        <v-btn class="hidden-sm-and-down" flat>Profile
          <v-icon right>person</v-icon>
        </v-btn>
        <v-btn flat v-if="userSignedIn" @click="logout">Logout
          <v-icon right>logout</v-icon>
        </v-btn>
        <v-btn flat @click="goto('/login')" v-if="!userSignedIn">Sign In
          <v-icon right>person</v-icon>
        </v-btn>
        <v-btn flat @click="goto('/signup')" v-if="!userSignedIn">Sign Up
          <v-icon right>person</v-icon>
        </v-btn>
  
      </v-toolbar-items>
  
    </v-toolbar>
  
    <main>
      <v-progress-linear slot="extension" v-if="loading" :indeterminate="true" class="ma-0">Progress?</v-progress-linear>
      <v-container>
  
        <div id="app">
          <!-- <img src="./assets/logo.png"> -->
          <router-view/>
        </div>
      </v-container>
    </main>
  
  
    <v-footer fixed class="pa-3">
  
      <div>Farmista</div>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }} All rights Reserved.</div>
    </v-footer>
  </v-app>
</template>

<style>
  .nav-drawer {
    margin-top: 64px !important;
  }
  
  @media screen and (max-width: 960px) {
    .nav-drawer {
      margin-top: 48px !important;
    }
    main {
      padding: 48px 0;
    }
  }
  
  main {
    padding: 64px 0;
  }
</style>

<script>
  import firebase from "firebase";
  export default {
    name: "App",
    data() {
      return {
        isDrawer: false,
        toolbarMargin: ""
      };
    },
    computed: {
      loading() {
        return this.$store.getters["mandi/getLoading"]
      },
      menuItems() {
        let menuItems;
        if (!this.userSignedIn)
          menuItems = [{
              icon: "face",
              title: "Sign up",
              link: "/signup"
            },
            {
              icon: "lock_open",
              title: "Sign in",
              link: "/login"
            },
              
          ];
        if (this.userSignedIn) {
          menuItems = [];
        }
        menuItems.push({
          icon: "shop",
          title: "E-Mandi",
          link: "/mandi"
        })
  
        menuItems.push({
          icon: "home",
          title: "Home",
          link: "/dashboard"
        })
      // menuItems.push({
      //         icon: "face",
      //         title: "Video Chat",
      //         link: "/vc"
      //       })
        return menuItems;
      },
      userSignedIn() {
        return this.$store.getters["user/getIsSignedIn"];
      },
      user() {
        return this.$store.getters["user/getUserDetails"];
      }
    },
    watch: {
      userSignedIn(value) {
        if (value) this.$router.push("/dashboard");
      }
    },
    methods: {
      goto(route) {
        this.$router.push(route);
      },
      switchDrawer() {
        this.isDrawer != this.isDrawer;
        if (isDrawer) this.toolbarMargin = "margin:left:300px";
      },
      logout() {
        this.$store.dispatch("user/logout");
        this.$router.push("/");
      },
      created() {
        firebase.auth().onAuthStateChanged((user) => {
  
          this.$store.dispatch("user/SetuserStatus", {
            status: user ? true : false
          })
  
        })
      }
    }
  };
</script>


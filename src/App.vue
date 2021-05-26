<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
        flat
    >
      <v-btn small v-if="$store.getters.isAuthenticated" color="primary">
        <v-icon small class="ml-1">mdi-account</v-icon>
        <div v-if="!$vuetify.breakpoint.mobile">{{ $store.getters.getUsername }}</div>
      </v-btn>
      <v-spacer></v-spacer>

      <v-app-bar-title>
        <h2>WebEngineering - <span class="accent--text">ChatApp</span></h2>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn id="logout" small v-if="$store.getters.isAuthenticated" color="error" @click="logout">
        <v-icon small class="ml-1">mdi-lock</v-icon>
        <div v-if="!$vuetify.breakpoint.mobile">Logout</div>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab v-if="!$store.getters.isAuthenticated" to="/">Home</v-tab>

          <v-tab id="about-btn" to="/about" v-if="!notChat()">About</v-tab>
          <v-tab id="dashboard-btn" v-if="$store.getters.isAuthenticated && !notChat()" to="/dashboard" >Dashboard</v-tab>
          <v-btn id="back-to-dashboard" v-if="notChat()" color="primary" v-on:click="getDashboard()" class="pa-3" style="margin-left: 10px">Zurück zum Dashboard</v-btn>
          <v-spacer></v-spacer>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main class="primary">
      <router-view/>
    </v-main>
    <v-footer color="primary" class="accent--text">
      <v-spacer/>
      made with <v-icon color="accent" class="mr-1 ml-1">mdi-heart</v-icon> by David & Alejandro
      <v-spacer/>
    </v-footer>
  </v-app>
</template>

<script>


import Home from "@/views/Home";
export default {
  name: 'App',
  methods:  {
    logout: function () {
      this.$store.dispatch('AUTH_LOGOUT')
          .then(() => {
            this.$router.go()
            this.$router.push('/login')
          })
    },
    notChat() {
      return this.$route.name === 'Chat'
    },
    getDashboard(){
       this.$router.push({ name: 'Dashboard' })
       this.$router.go()
    }

  },
  mounted () {

  },
  components: {
    Home

  },

  data: () => ({
    //
  }),
};
</script>

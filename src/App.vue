<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
        flat
    >
<!--      -->
      <v-btn small v-if="$store.getters.isAuthenticated" color="primary">
        <v-icon class="ml-1">mdi-account</v-icon>
        <div v-if="!$vuetify.breakpoint.mobile">{{ $store.getters.getUsername }}</div>
      </v-btn>
      <v-spacer></v-spacer>

      <v-app-bar-title><h2>WebEngineering</h2></v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn small v-if="$store.getters.isAuthenticated" color="red" @click="logout">
        <v-icon class="ml-1">mdi-lock</v-icon>
        <div v-if="!$vuetify.breakpoint.mobile">Logout</div>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab v-if="!$store.getters.isAuthenticated" to="/">Home</v-tab>

          <v-tab to="/about" v-if="!notChat()">About</v-tab>
          <v-tab v-if="$store.getters.isAuthenticated && !notChat()" to="/dashboard" >Dashboard</v-tab>
          <v-btn v-if="notChat()" color="primary" v-on:click="getDashboard()" class="pa-3" style="margin-left: 10px">Zurück zum Dashboard</v-btn>
          <v-spacer></v-spacer>
<!--          <v-tab v-if="!$store.getters.isAuthenticated" to="/register">Register</v-tab>-->
<!--          <v-tab v-if="!$store.getters.isAuthenticated" to="/login">Login</v-tab>-->
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main class="primary">
      <router-view/>
    </v-main>
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

<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
        flat
    >
      <v-spacer></v-spacer>

      <v-app-bar-title><h2>WebEngineering</h2></v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn
          icon
          href="https://github.com/dev-ale/WebEngineering"
          target="_blank"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/register">Register</v-tab>
          <v-tab to="/login">Login</v-tab>
          <v-tab to="/about">About</v-tab>
          <v-tab to="/dashboard">Dashboard</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main class="primary">
      <home/>
    </v-main>
  </v-app>
</template>

<script>


import Home from "@/views/Home";
export default {
  name: 'App',

  components: {
    Home

  },

  data: () => ({
    //
  }),
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <h2 class="white--text">welcome</h2>
        <p>Welcome text......</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <v-btn to="/register" class="mr-5" x-large>Registrieren</v-btn>
        <v-btn to="/login" class="ml-5" x-large>Einloggen</v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  methods: {

  }
}
</script>

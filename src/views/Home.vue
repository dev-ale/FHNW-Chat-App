<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <h2 class="white--text">Wilkommen beim FHNW Chat für Studierende und Dozenten</h2>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center">
        <v-btn to="/register" x-large>Registrieren</v-btn>
      </v-col>
      <v-col align="center" justify="center">
        <v-btn to="/login"  x-large>Einloggen</v-btn>
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

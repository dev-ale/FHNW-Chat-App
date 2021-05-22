<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <h2 class="white--text">Wilkommen beim FHNW Chat für Studierende und Dozenten</h2>
        <p style="font-size:18px;" class="caption third--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" cols="12">
        <v-btn width="200" to="/register" class="text--primary" color="accent" x-large>Registrieren</v-btn>
      </v-col>
      <v-col align="center" justify="center" cols="12">
        <v-btn width="200" to="/login" class="text--primary" color="accent" x-large>Einloggen</v-btn>
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

<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <h2 class="white--text">Wilkommen beim FHNW Chat für Studierende und Dozenten</h2>
        <p style="font-size:18px;" class="caption third--text">Dies ist ein Studierendenprojekt an der FHNW von David Kern und Alejandro Garcia. Diese Applikation ermöglicht es Nutzenden sich zu registrieren und bei erfolgreiche einloggen miteinander in echtzeit zu kommunizieren. Für mehr Informationen klicken Sie auf "About".
          <br>Ansonsten wünschen wir viel Spass!</p>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" cols="12">
        <v-btn id="register" width="200" to="/register" class="text--primary" color="accent" x-large>Registrieren</v-btn>
      </v-col>
      <v-col align="center" justify="center" cols="12">
        <v-btn width="200" to="/login" class="text--primary" color="accent" x-large id="login">Einloggen</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
}
</script>

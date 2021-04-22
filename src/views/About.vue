<template>
  <v-container>
    <v-card height="700">
      <v-card-text>
        <v-card-title>
          <v-spacer></v-spacer>about
        <v-spacer></v-spacer></v-card-title>
        <v-row>
          <v-col>
            <h2>Technologien</h2>
            <v-list>
              <v-list-item>Vue.js - Frontend</v-list-item>
              <v-list-item>Node.js(Express) - Backend</v-list-item>
              <v-list-item>MongoDB Atlas - Datenbank</v-list-item>
              <v-list-item>Heroku - Deployment</v-list-item>
            </v-list>
          </v-col>
          <v-col>
            <h2>Funktionen</h2>
            <v-list>
              <v-list-item>Registrieren</v-list-item>
              <v-list-item>Einloggen</v-list-item>
              <v-list-item>Input Validation</v-list-item>
              <v-list-item>Passwort Encryption</v-list-item>
              <v-list-item>Protected Routes</v-list-item>
              <v-list-item>HTTPS</v-list-item>
              <v-list-item>REST API Requests</v-list-item>

            </v-list>
          </v-col>
        </v-row>
        <v-row>
          <v-col></v-col>
          <v-col align="center">
            <Room :title="'Allgemein'" :color="'primary'" :deletable="false"/>
          </v-col>
          <v-col align="center">
            <Room :title="'WebEng'" :color="'fhnw'" :deletable="true"/>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import Room from "@/components/Room";
export default {
  components: {Room}
}
</script>

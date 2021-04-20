<template>
  <v-container>
    <v-layout wrap>
      <v-flex sm12 md6 offset-md3>
        <v-card elevation="4" light tag="section">
          <v-card-title>
            <v-layout align-center justify-space-between>
              <h3 class="headline">Login</h3>
            </v-layout>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p>Sign in with your username and password:</p>
            <v-form>
              <v-text-field
                  outline
                  label="E-Mail"
                  type="text"
                  v-model="email"></v-text-field>
              <v-text-field
                  outline
                  hide-details
                  label="Password"
                  type="password"
                  v-model="password"></v-text-field>

            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
            <v-btn dark color="primary" flat>
              Registrieren
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn dark color="primary" :large="$vuetify.breakpoint.smAndUp">
              <v-icon left>mdi-lock</v-icon>
              Anmelden
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm12 md6 offset-md3>
        <v-layout align-center justify-space-between justify-center>
          <v-spacer/>
          <p class="caption my-3">Made with ♥️  by <strong class="primary--text">David & Alejandro</strong></p>
          <v-spacer/>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import router from "../router"
import axios from "axios"
export default {
  name: "Login",
  methods: {
    login: (e) => {
      e.preventDefault()
      let email = "user@email.com"
      let password = "password"
      let login = () => {
        let data = {
          email: email,
          password: password
        }
        axios.post("/api/login", data)
            .then((response) => {
              console.log("Logged in")
              console.log(response)
              router.push("/dashboard")
            })
            .catch((errors) => {
              console.log("Cannot log in")
              console.log(errors)
            })
      }
      login()
    }
  }
}
</script>

<style scoped>

</style>

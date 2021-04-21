<template>
  <v-container>
    <v-layout wrap>
      <v-flex sm12 md6 offset-md3>
        <v-card elevation="4" light tag="section">
          <v-divider></v-divider>
          <v-card-text>
            <v-form>
              <v-text-field
                  outline
                  label="E-Mail"
                  type="text"
                  v-model="email">
              </v-text-field>
              <v-text-field
                  outline
                  hide-details
                  label="Password"
                  type="password"
                  v-model="password">
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
            <v-spacer></v-spacer>
            <v-btn @click="login" dark color="primary" >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <h1>Name: {{name}}</h1>
  </v-container>
</template>

<script>
import router from "../router"
import axios from "axios"

export default {
  name: "Login",
  data: () => ({
    email: "ale.iphone@gmail.com",
    password: "Wikipedia91",
    name: ""
  }),
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password
      };
      axios.post("/api/user/login", data)
          .then((response) => {
            console.log(response.data)
            console.log(response)
            this.username = response.data["name"]
            const authtoken = response.headers["auth-token"];
            router.push("/dashboard")
          })
          .catch((errors) => {
            console.log("Cannot log in")
            console.log(errors)
          })
    }
  }
}
</script>

<style scoped>

</style>

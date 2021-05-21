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
                  label="Name"
                  type="text"
                  v-model="name">
              </v-text-field>
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
            <p class="caption red--text">{{ errorMessage }}</p>
            <v-spacer></v-spacer>
            <v-btn @click="register" dark color="primary" >
              Registrieren
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-row>
          <v-col align="center">
            <v-btn to="/" icon dark outlined class="mt-5">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </v-col>
        </v-row>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "Register",
  data: () => ({
    email: "",
    password: "",
    name: ""
  }),
  mounted() {
    this.$store.commit("SET_ERRORMESSAGE", "");
  },
  computed: {
    errorMessage() {
      return this.$store.getters.getErrorMessage
    },
  },
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password
      };
      axios.post("/api/user/login", data)
          .then((response) => {
            console.log("Logged in")
            console.log(response)
            console.log(response.headers["auth-token"])

            router.push("/dashboard")
          })
          .catch((errors) => {
            console.log("Cannot log in")
            console.log(errors)
          })
    },
    register: function () {
      const { name, email, password } = this
      this.$store.dispatch('AUTH_REGISTER', { name, email, password }).then(() => {
        this.$store.dispatch('AUTH_REQUEST',{email,password}).then(() => {
          this.$router.go()
          this.$router.push('/dashboard')
        })

      })
    },
    register2() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      axios.post("/api/user/register", data)
          .then((response) => {
            this.login()
            router.push("/dashboard")
          })
          .catch((errors) => {
            console.log("Cannot register")
            console.log(errors)
          })
    }
  }
}
</script>

<style scoped>

</style>

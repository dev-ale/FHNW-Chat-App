<template>
  <v-container>
    <v-layout wrap>
      <v-flex sm12 md6 offset-md3>
        <v-card elevation="4" light tag="section" color="third">
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
            <p class="caption red--text">{{ errorMessage }}</p>
            <v-spacer></v-spacer>
            <v-btn @click="login" large class="text--primary" color="accent" >
              Login
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
import router from "../router"
import axios from "axios"
import store from '../store'

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
    name: "",
  }),
  methods: {
    login: function () {
      const { email, password } = this
      this.$store.dispatch('AUTH_REQUEST', { email, password }).then(() => {
        this.$router.go()
        this.$router.push('/dashboard')
      })
    }
  },
  mounted() {
    this.$store.commit("SET_ERRORMESSAGE", "");
  },
  computed: {
    errorMessage() {
      return this.$store.getters.getErrorMessage
    },
  }
}
</script>

<style scoped>

</style>

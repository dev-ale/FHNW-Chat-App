<template>
  <v-container>
    <v-layout wrap>
      <v-flex sm12 md6 offset-md3>
        <v-card elevation="4" light tag="section">
          <v-card-title>
            <v-layout align-center justify-space-between>
              <h3 class="headline">
                {{ platformName }}
              </h3>
              <v-flex>
                <h2>Login</h2>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p>Sign in with your username and password:</p>
            <v-form>
              <v-text-field
                  outline
                  label="Username"
                  type="text"
                  v-model="username"></v-text-field>
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
            <v-btn dark color="teal" flat>
              Passwort vergessen?
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn dark color="teal" :large="$vuetify.breakpoint.smAndUp">
              <v-icon left>mdi-lock</v-icon>
              Anmelden
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm12 md6 offset-md3>
        <v-layout align-center justify-space-between justify-center>
          <p class="caption my-3">Powered by <strong class="teal--text">David & Alejandro</strong></p>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
name: "Login.vue"
}
</script>

<style scoped>

</style>

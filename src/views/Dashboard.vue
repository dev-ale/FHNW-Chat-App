<template>
  <v-container>
    <v-card height="700">
      <v-card-text>
        <v-card-title>Hallo, {{ username }}</v-card-title>
      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
export default {
name: "Dashboard",
  data: () => ({

  }),
  mounted() {

  },
  computed: {
    username () {
      console.log(this.$store.getters.getUsername)
      return this.$store.getters.getUsername
    }
  }
}
</script>

<style scoped>

</style>

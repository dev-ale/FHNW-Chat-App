<template>
  <v-container>
    <v-card height="700">
      <v-card-text>
        <v-card-title>Hallo, {{ username }}</v-card-title>
        <v-row>
          <v-col>
            <Room/>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
import Room from "@/components/Room";
export default {
name: "Dashboard",
  components: {Room},
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

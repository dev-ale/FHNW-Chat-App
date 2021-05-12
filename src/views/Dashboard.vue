<template>
  <v-container>
    <v-card height="700">
      <v-card-text>
        <v-card-title>
          <v-row>
            <v-col>
              Hallo, {{ username }}
            </v-col>
            <v-col align="right">
              <v-btn @click="getRooms" color="primary">Refresh Rooms</v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-row>
          <v-col v-for="room in updateRooms" :key="room.name" align="center">
            <Room :title="room.name" :color="room.type" :deletable="false" :id="room._id"/>
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
    rooms: []
  }),
  created() {
    this.getRooms()
  },
  methods: {
   getRooms () {
     this.$store.dispatch('ROOMS')
   }
  },
  computed: {
    username () {
      console.log(this.$store.getters.getUsername)
      return this.$store.getters.getUsername
    },
    updateRooms() {
      console.log(this.$store.getters.getRooms)
      return this.$store.getters.getRooms
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <v-container>
    <v-card height="600">
      <v-card-text>
        <v-card-title>
          <v-row>
            <v-col>
              Hallo, {{ username }} ({{ role }})
            </v-col>
            <v-col align="right">
              <v-btn v-if="role == 'admin' || role == 'dozent'" class="mr-5" color="primary">Add New Room</v-btn>
              <v-btn icon @click="getRooms" color="primary"><v-icon>mdi-refresh</v-icon></v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-row>
          <v-col v-for="room in updateRooms" :key="room.name" align="center">
            <Room :title="room.name" :color="room.type" :deletable="deletable" :id="room._id" :username="username" :role="role" :creator="room.creator"/>
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
    rooms: [],
    deletable: false
  }),
  created() {
    this.getRooms()
  },
  methods: {
   getRooms () {
     this.$store.dispatch('ROOMS')
   },




  },
  computed: {
    username () {
     // console.log(this.$store.getters.getUsername)
      return this.$store.getters.getUsername
    },
    role () {
      //console.log(this.$store.getters.getUsername)
      if (this.$store.getters.getRole == 'admin') {
        this.deletable = true;
      }
      return this.$store.getters.getRole
    },
    updateRooms() {
      console.log(this.$store.getters.getRooms)
      return this.$store.getters.getRooms
    },
    reloadPage() {
      window.location.reload()
    }


  },
  mounted: function() {
  },
}
</script>

<style scoped>

</style>

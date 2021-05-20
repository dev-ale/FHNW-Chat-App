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
              <v-btn @click="dialog = true" v-if="role == 'admin' || role == 'dozent'" class="mr-5" color="primary">Add New Room</v-btn>
              <v-btn icon @click="getRooms" color="primary"><v-icon>mdi-refresh</v-icon></v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-row>
          <v-col v-for="room in updateRooms" :key="room.name" align="center">
            <Room @delete-room="deleteRoom" :title="room.name" :color="room.type" :deletable="deletable" :id="room._id" :username="username" :role="role" :creator="room.creator"/>
          </v-col>
        </v-row>
        <v-row v-if="updateRooms.length < 1">
          <v-col align="center">
            <h3>no Chat-Rooms available yet</h3>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <NewRoom :creator="username" @close="closeModal" @add-room="addRoom"/>
    </v-dialog>

  </v-container>



</template>

<script>

import Room from "@/components/Room";
import NewRoom from "@/components/NewRoom";

export default {
name: "Dashboard",
  components: {NewRoom, Room},
  data: () => ({
    rooms: [],
    deletable: false,
    dialog: false,
    name: false,
    type: false,
    creator: false
  }),
  created() {
    this.getRooms()
  },
  methods: {
    deleteRoom (roomId) {
      console.log('function called')
      this.$store.dispatch('DELETE_ROOM', roomId).then(() => {
        this.getRooms();
      })
    },
    addRoom (chatName, type, creator) {
      this.name = chatName;
      this.type = type;
      this.creator = creator;
      this.postCall()
      this.closeModal();
    },
    postCall() {
      const { name, type, creator } = this
      this.$store.dispatch('POST_ROOM', { name, type, creator }).then(() => {
        this.getRooms();
      })
    },
    closeModal () {
      this.dialog = false;
    },
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

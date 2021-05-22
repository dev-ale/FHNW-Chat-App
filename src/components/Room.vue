<template>
  <div>
    <v-row>
      <v-col>
        <v-avatar
            class="room"
            :color="color"
            size="128"
            @click="joinRoom"
            style="cursor: pointer"
            v-if="!hover"
        >
          <span v-if="color !== 'fhnw'" class="white--text headline">{{ title }}</span>
          <span v-if="color === 'fhnw'" class="black--text headline">{{ title }}</span>
        </v-avatar>
        <p class="caption mb-1">{{ creator }}</p>
        <v-container>
          <v-row justify="center" align-items="flex-end" align="center">
            <v-col>
              <v-btn x-small @click="joinRoom" class="mr-2" color="primary">Join</v-btn>
              <v-btn x-small @click="dialog = true" v-if="deletable" class="ml-2"  color="error">Delete</v-btn>
              <v-btn x-small @click="dialog = true" v-if="creator == username && role == 'dozent'" class="ml-2"  color="error">Delete</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-dialog
        v-model="dialog"
        width="300"
    >

      <v-card color="third">
        <v-card-title class="headline error white--text">
          Raum löschen?
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
              color="error"
              text
              @click="deleteRoom"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
export default {
name: "Room",
  data() {
    return {
      dialog: false
    };
  },
  props: {
    title: String,
    color: String,
    deletable: Boolean,
    id: String,
    username: String,
    creator: String,
    role: String
  },
  methods: {
    joinRoom() {
      this.$store.commit('SET_CURRENTROOM', this.id)
      this.$router.push('/chat');

    },
    deleteRoom() {
      this.dialog = false;
      this.$emit("delete-room",this.id);
    }
  },
  computed: {


  }
}
</script>

<style scoped>

.room {
  filter: drop-shadow(0 0 0.1rem #4B4453);
}

.room:hover {
  filter: drop-shadow(0 0 0.25rem #4B4453);
}

</style>

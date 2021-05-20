<template>
  <div>
    <v-row>
      <v-col>
        <v-avatar
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :color="color"
            size="128"
            @click="joinRoom"
            style="cursor: pointer"
            v-if="!hover"
        >
          <span v-if="color !== 'fhnw'" class="white--text headline">{{ title }}</span>
          <span v-if="color === 'fhnw'" class="black--text headline">{{ title }}</span>
        </v-avatar>
        <v-avatar
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :color="color"
            size="133"
            @click="joinRoom"
            style="cursor: pointer"
            v-if="hover"
        >
          <span v-if="color !== 'fhnw'" class="white--text headline">{{ title }}</span>
          <span v-if="color === 'fhnw'" class="black--text headline">{{ title }}</span>
        </v-avatar>
        <p class="caption mb-1">{{ creator }}</p>
        <v-container>
          <v-row justify="center" align-items="flex-end" align="center">
            <v-btn x-small @click="joinRoom" class="mt-3" outlined  color="primary">Join</v-btn>
            <v-btn x-small @click="deleteRoom" v-if="deletable" class="mt-1" outlined color="red">Delete</v-btn>
            <v-btn x-small @click="deleteRoom" v-if="creator == username && role == 'dozent'" class="mt-1" outlined color="red">Delete</v-btn>

          </v-row>
        </v-container>

      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
name: "Room",
  data() {
    return {
      hover: false,

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
      console.log('trying to delete room ' + this.id);
    }
  },
  computed: {


  }
}
</script>

<style scoped>

</style>

<template>
  <v-card>
    <v-card-title>
      <span class="headline">Add New Room</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>



          <v-col cols="12">
            <v-text-field
                v-model="chatName"
                label="Chatname *"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
                label="Creator"
                required
                disabled
                :value="creator"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-select
                v-model="type"
                :items="['general', 'fhnw', 'admin']"
                label="Type *"
                required
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
          color="blue darken-1"
          text
          @click="close"
      >
        Cancel
      </v-btn>
      <v-btn
          color="blue darken-1"
          text
          @click="addRoom(chatName, type)"
      >
        Add Room
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
name: "NewRoom",
  data: () => ({
    chatName: null,
    type: null
  }),

  props: {
  creator: String,
  },
  methods: {
    close() {
      this.$emit("close");
      this.chatName = null;
      this.type = null;
    },
    addRoom(chatName, type) {
      this.$emit("add-room",chatName,type, this.creator);
      this.chatName = null;
      this.type = null;
    }
  }
}
</script>

<style scoped>

</style>

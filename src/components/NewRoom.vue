<template>
  <v-card color="primary" class="white--text">
    <v-card-title>
      <span class="headline">Add New Room</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row class="white--text">
          <v-col cols="12">
            <v-text-field
                id="chat-name"
                dark
                color="accent"
                v-model="chatName"
                label="Chatname *"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
                dark
                color="accent"
                label="Creator"
                required
                disabled
                :value="creator"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-select
                id="room-type"
                dark
                color="accent"
                v-model="type"
                :items="['general', 'fhnw', 'admin']"
                label="Type *"
                required
                data-cy='select-input'
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
      <small class="white--text">*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
          color="third"
          text
          @click="close"
      >
        Cancel
      </v-btn>
      <v-btn
          id="add-new-room"
          color="accent"
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
.my-text-style >>> .v-text-field__slot input {
  color: red
}

</style>

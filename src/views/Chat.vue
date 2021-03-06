<template>
  <v-container>
    <v-row>
      <v-col cols="auto" class="flex-grow-1 flex-shrink-0">
        <v-responsive class="overflow-y-hidden fill-height" height="80vh">
          <v-card flat class="d-flex flex-column fill-height" color="third">
            <v-card-title>
              {{ room_data[0].name }}
              <v-spacer></v-spacer>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="text--primary" color="accent" dark v-bind="attrs" v-on="on">
                    <v-icon style="padding-right: 10px">mdi-account-group</v-icon>
                    {{onlineUsers.length}}
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="user in onlineUsers" :key="user">
                    <v-list-item-title>{{ user.username }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <div class="centerPopup">
              <ul class="centerUl">
                <li v-for="updateMessage in updateMessages" v-bind:key="updateMessage.index" style="padding-top: 5px;">
                  <v-chip class="updatePopup" v-show="updateMessage.visible">{{updateMessage.msg}}</v-chip>
                </li>
              </ul>
            </div>
            <v-card-text class="flex-grow-1 overflow-y-auto scrollbar" v-chat-scroll="{ always: true, smooth: true }">
              <template v-for="message in messages">
                <div v-bind:key="message.index" :class="{ 'd-flex flex-row-reverse': message.username === roomAndUser.username }">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-chip :class="message.username === roomAndUser.username ? 'primary--text' : 'white--text'" :color="message.username === roomAndUser.username ? 'accent' : 'primary'" dark style="height:auto;white-space: normal;" class="pa-4 mb-2" v-on="on">
                        <v-row no-gutters>
                          <v-col cols="12" style="font-size: 1.1rem;">{{ message.msg }}</v-col>
                          <v-col cols="12">
                            <sub class="ml-2" style="font-size: 0.6rem;">
                              <b>{{ message.username }}</b>
                              | {{ message.date }}
                            </sub>
                          </v-col>
                        </v-row>
                      </v-chip>
                    </template>
                  </v-menu>
                </div>
              </template>
            </v-card-text>
            <v-card-text class="flex-shrink-1">
              <v-text-field id="msg-field" color="primary" required v-model="msg" label="Nachricht..." type="text" no-details outlined append-outer-icon="mdi-send" @keyup.enter="sendMessage" @click:append-outer="sendMessage" hide-details />
            </v-card-text>
          </v-card>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: function () {
    return {
      messages: [],
      onlineUsers: [],
      msg: "",
      roomAndUser: { username: "", room: "" },
      room_data: null,
      updateMessages: [],
    };
  },
  methods: {
    // Join current user to room
    joinRoom: function () {
      this.$socket.emit("joinRoom", this.roomAndUser);
      this.$socket.on("db_data", (data) => {
        this.messages = data.messages.filter(
          (e) => e.roomId === this.roomAndUser.room
        );
      });

      this.listen();
    },
    //get all Users which are Online
    listen: function () {
      this.$socket.on("updateOnlineUser", (onlineUsers) => {
        this.onlineUsers = onlineUsers.filter(
          (e) => e.room === this.roomAndUser.room
        );
      });
      // update with popup if a user has left the chat
      this.$socket.on("userLeft", (user) => {
        this.updateMessages.push({
          msg: user + " hat den Chat verlassen",
          visible: true,
        });
        const msg = this.updateMessages[this.updateMessages.length - 1];
        setTimeout(() => (msg.visible = false), 4000);
      });
      //update with popup if a user has joined the chat
      this.$socket.on("userOnline", (user) => {
        this.updateMessages.push({
          msg: user + " ist dem Chat beigetreten",
          visible: true,
        });
        const msg = this.updateMessages[this.updateMessages.length - 1];
        setTimeout(() => (msg.visible = false), 4000);
      });

      this.$socket.on("message", (msg) => {
        this.messages.push(msg);
      });
    },

    sendMessage: function () {
      /* Check if String is empty or only contains spaces
       https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces/50971250 */
      if (!this.msg || !this.msg.replace(/\s/g, "").length) {
        return;
      }
      this.$socket.emit("message", this.msg);

      this.msg = "";
    },
    dispatchRooms() {
      this.$store.dispatch("ROOMS");
    },
    getRoomData: function () {
      this.room_data = this.getRooms.filter(
        (e) => e._id === this.roomAndUser.room
      );
    },
  },
  created() {
    this.dispatchRooms();
  },
  computed: {
    getRooms() {
      return this.$store.getters.getRooms;
    },
  },

  mounted: function () {
    this.roomAndUser.username = this.$store.state.username;
    this.roomAndUser.room = this.$store.state.current_room;
    this.getRoomData();
    this.joinRoom();
  },
};
</script>

<style scoped>
/* Hide scrollbar
https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp */
.scrollbar::-webkit-scrollbar {
  display: none;
}
.scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.updatePopup {
  padding: 12px;
  max-width: 400px;
  font-size: 0.7rem;
  justify-content: center;
}
.centerPopup {
  padding-top: 5px;
  padding-bottom: 5px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
.centerUl {
  list-style-type: none;
  padding: 0;
  text-align: center;
}
</style>

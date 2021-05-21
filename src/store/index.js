import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("auth-token") || "",
    status: "",
    username: "",
    role: "",
    rooms: [],
    current_room: "",
    usersOnline: [],
    error_message: "",
    updateMessages: []
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    authStatus: (state) => state.status,
    getUsername: (state) => state.username,
    getRole: (state) => state.role,
    getRooms: (state) => state.rooms,
    getCurrentRoom: (state) => state.current_room,
    getUsersOnline: (state) => state.usersOnline,
    getErrorMessage: (state) => state.error_message,
    getupdateMessages:(state) => state.updateMessages,
  },
  mutations: {
    AUTH_REQUEST: (state) => {
      state.status = "loading";
    },
    AUTH_SUCCESS: (state, token) => {
      state.status = "success";
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      state.status = "error";
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_ROLE: (state, role) => {
      state.role = role;
    },
    SET_ROOMS: (state, rooms) => {
      state.rooms = rooms;
    },
    SET_CURRENTROOM: (state, room) => {
      state.current_room = room;
    },
    SET_USERSONLINE: (state, user) => {
      state.usersOnline.push(user)
    },
    REMOVE_USERSONLINE: (state, user) => {
      state.usersOnline.splice(user,1);
    },
    SET_ERRORMESSAGE: (state, payload) => {
        state.error_message = payload;
    },
    SET_UPDATEMESSAGES: (state, payload) => {
      state.updateMessages.push(payload)
    }
   
  },
  actions: {
    ROOMS: ({ commit, dispatch }) => {
      return new Promise((resolve, reject) => {
        axios({ url: "api/dashboard/", method: "GET" })
          .then((resp) => {
            const rooms = resp.data;
            commit("SET_ROOMS", rooms);
            resolve(resp);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    AUTH_REQUEST: ({ commit, dispatch }, user) => {
      return new Promise((resolve, reject) => {
        // The Promise used for router redirect in login
        commit("AUTH_REQUEST");
        axios({ url: "api/user/login", data: user, method: "POST" })
          .then((resp) => {
            const token = resp.data.token;
            localStorage.setItem("auth-token", token); // store the token in localstorage
            axios.defaults.headers.common["auth-token"] = token;
            commit("AUTH_SUCCESS", token);
            // you have your token, now log in your user :)
            dispatch("USER_REQUEST");
            const username = resp.data.username;
            commit("SET_USERNAME", username);
            const role = resp.data.role;
            commit("SET_ROLE", role);
            resolve(resp);
          })
          .catch((err) => {
            commit("AUTH_ERROR", err);
            commit("SET_ERRORMESSAGE", err.response.data);
            localStorage.removeItem("auth-token"); // if the request fails, remove any possible user token if possible
            reject(err);
          });
      });
    },
    AUTH_REGISTER: ({ commit, dispatch }, user) => {
      return new Promise((resolve, reject) => {
        // The Promise used for router redirect in login
        commit("AUTH_REQUEST");
        axios({ url: "api/user/register", data: user, method: "POST" })
          .then((resp) => {
            dispatch("USER_REQUEST");
            resolve(resp);
            dispatch("AUTH_REQUEST");
          })
          .catch((err) => {
            commit("AUTH_ERROR", err);
            commit("SET_ERRORMESSAGE", err.response.data);
            reject(err);
          });
      });
    },
    AUTH_LOGOUT: ({ commit, dispatch }) => {
      return new Promise((resolve, reject) => {
        commit("AUTH_LOGOUT");
        localStorage.removeItem("auth-token"); // clear your user's token from localstorage
        localStorage.removeItem("vuex"); // clear your user's token from localstorage

        // remove the axios default header
        delete axios.defaults.headers.common["auth-token"];
        resolve();
      });
    },
    POST_ROOM: ({ commit, dispatch }, room) => {
      return new Promise((resolve, reject) => {
        // The Promise used for router redirect in login
        commit("POST_ROOM");
        axios({ url: "api/dashboard/create", data: room, method: "POST" })
            .then((resp) => {
              resolve(resp);
            })
            .catch((err) => {
              reject(err);
            });
      });
    },
    DELETE_ROOM: ({ commit, dispatch }, roomId) => {
      return new Promise((resolve, reject) => {
        // The Promise used for router redirect in login
        commit("DELETE_ROOM");

        axios({ url: "api/dashboard/delete/" + roomId,  method: "DELETE" })
            .then((resp) => {
              resolve(resp);
            })
            .catch((err) => {
              reject(err);
            });
      });
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});

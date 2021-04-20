<template>
  <div class="home">
    <v-container>
      <Login/>
    </v-container>


  </div>
</template>

<script>

import Rooms from "@/components/Rooms";
import Login from "@/components/Login";
export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>

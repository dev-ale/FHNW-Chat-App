<template>
  <div class="home">
    <v-container>

      <Rooms/>
    </v-container>


  </div>
</template>

<script>

import Rooms from "@/components/Rooms";
export default {
  name: 'Home',
  components: {
    Rooms,
  }
}
</script>

<template>
  <div>
    <v-row>
      <v-col>
        <v-avatar
            :color="color"
            size="128"
        >
          <span v-if="color !== 'fhnw'" class="white--text headline">{{ title }}</span>
          <span v-if="color === 'fhnw'" class="black--text headline">{{ title }}</span>
        </v-avatar>
        <br>
        <v-btn class="mt-3" outlined small color="primary">Join</v-btn>
        <br>
        <v-btn v-if="deletable" class="mt-1" outlined small color="red">Delete</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
name: "Room",
  props: {
    title: String,
    color: String,
    deletable: Boolean
  },
}
</script>

<style scoped>

</style>

<template>
  <div class="socialmedia">
    <v-card
      class="d-flex pa-1"
      rounded
      href="https://www.instagram.com/doanemmanuel/"
      target="_blank"
    >
      <v-card-text>{{ translation.homeInstagram }}</v-card-text>
      <v-icon color="black" x-large>mdi-instagram</v-icon>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({    
    
  }),
  computed: {
    ...mapGetters({
      translation: 'getTranslation'
    }),
  },
  method: {},
};
</script>

<style>
</style>
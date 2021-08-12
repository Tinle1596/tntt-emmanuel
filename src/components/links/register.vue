<template>
  <div class="register">
    <v-card
      class="d-flex pa-1"
      rounded
      href="https://smpconnect.ccbchurch.com/goto/forms/86/responses/new"
      target="_blank"
    >
      <v-card-text>{{ translation.homeRegister }}</v-card-text>
      <v-icon color="black" x-large>mdi-pencil-outline</v-icon>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapGetters({
      translation: 'getTranslation'
    }),
  },
};
</script>

<style>
</style>
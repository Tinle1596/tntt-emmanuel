<template>
  <div class="aboutus">
    <v-card class="pa-1">
      <v-card-title class="text-center justify-center">
        <h1>{{ translation.aboutUsTitle }}</h1>
      </v-card-title>
      <v-tabs v-model="tab">
        <v-tab> test </v-tab>
        <v-tab> test </v-tab>
        <v-tab> test </v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
      tab: null
  }),
  computed: {
    ...mapGetters({
      translation: 'getTranslation'
    }),
  },
};
</script>

<style>
</style>
<template>
  <div>
    <leader-card></leader-card>
    <v-card v-if="isTranslated"> vietnamese </v-card>
    <v-card> english </v-card>
  </div>
</template>

<script>
import LeaderCard from "../components/resource/leadercard.vue";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    
  }),
  components: {
    LeaderCard,
  },
  computed: {
    ...mapGetters({
      isTranslated: 'getLanguage'
    }),
  },
};
</script>

<style>
</style>
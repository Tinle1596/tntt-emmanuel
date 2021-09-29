<template>
  <div>
    <leader-info> </leader-info>
    <v-card v-if="isTranslated"> vietnamese </v-card>
    <v-card> english </v-card>
  </div>
</template>

<script>
import LeaderInfo from "../components/resource/leaderinfo.vue";
import { mapGetters } from "vuex";

export default {
  data: () => ({}),
  components: {
    LeaderInfo,
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
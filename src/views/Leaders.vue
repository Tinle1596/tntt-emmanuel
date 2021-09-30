<template>
  <div>
    <leader-card></leader-card>
    <v-card v-if="isTranslated"> vietnamese </v-card>
    <v-card> english </v-card>
  </div>
</template>

<script>
import LeaderCard from "../components/resource/leadercard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    
  }),
  components: {
    LeaderCard,
  },
  methods: {
    ...mapActions({
      getLeaders: 'getLeaders'
    })
  },
  computed: {
    ...mapGetters({
      isTranslated: 'getLanguage'
    }),
  },
  created() {
    this.getLeaders();
  }
};
</script>

<style>
</style>
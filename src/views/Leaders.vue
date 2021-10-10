<template>
  <div>
    <v-container>
      <div class="pa-2" v-for="(leader, index) in leaders" :key="index">        
        <leader-card
          :type="leader.type"
          :name="leader.name"
          :email="leader.email"
          :group="leader.group"
          :isLead="leader.isLead"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import LeaderCard from "../components/resource/leadercard.vue";
import { mapGetters,  mapActions } from "vuex";

export default {
  data: () => ({}),
  components: {
    LeaderCard,
  },
  methods: {
    ...mapActions({
      setLeaders: "setLeaders",
    }),
  },
  computed: {
    ...mapGetters({
      isTranslated: "getLanguage",
      leaders: "getLeaders"
    }),
    // ...mapState({
    //   leaders: "leaders",
    // }),
  },
  created() {
    this.setLeaders();
  },
};
</script>

<style>
</style>
<template>
  <div class="edit-bulletin">
    <p>this is the edit bulletin component</p>
    {{ currentBulletin }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    bulletin: {},
  }),
  computed: {
    ...mapGetters({
      currentBulletin: "getBulletin",
    }),
  },
  methods:{
    setBulletin() {
      this.bulletin = this.$store.getters.getBulletin;
    }
  },
  created() {
    this.$store.dispatch("getBulletinById", this.$route.params.id);    
  },  
  mounted(){
    this.setBulletin();
  }
};
</script>

<style>
</style>
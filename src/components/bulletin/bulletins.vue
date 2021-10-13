<template>
  <div class="bulletins">
    <v-container>
      <div v-for="(bulletin, index) in bulletins" :key="index">
        {{ bulletin }}
        <v-btn :to="{ name: 'bulletin', params: {id: bulletin.id }}">view</v-btn>   
      </div>
      <!-- <v-btn @click="createBulletin()">save</v-btn>  -->
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Bulletin from "./bulletin.vue";

export default {
  data: () => ({

  }),
  components: {
      Bulletin
  },
  methods: {
    ...mapActions({
      createBulletin: 'createBulletin',
      updateBulletin: 'updateBulleting'
    }),
  },
  computed: {
    ...mapGetters({
      bulletins: "getBulletins",
    }),
  },
  created() {
    this.$store.dispatch("setBulletins");
  },
};
</script>

<style>

</style>
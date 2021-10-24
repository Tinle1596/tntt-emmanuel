<template>
  <div class="bulletins">
    <v-container fluid>
      <v-card class="mx-auto">
        <v-list three-line>
          <v-list-item-group>
            <template v-for="(bulletin, index) in bulletins">
              <v-list-item :key="bulletin.title">
                <v-list-item-content class="text-left align-self-start">
                  <v-list-item-title v-text="bulletin.title" />
                  <div>
                    <v-chip
                      label
                      :color="getBulletinType(bulletin.type)"
                      x-small
                      >
                      <v-icon left>mdi-label-outline</v-icon>
                      {{ bulletin.type }}</v-chip
                    >
                  </div>
                  <v-list-item-subtitle v-text="bulletin.tags"></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text
                    v-text="bulletin.postedDate.toLocaleDateString()"
                  >
                  </v-list-item-action-text>
                  <v-btn depressed block bottom>view</v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-divider :key="index"> </v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
      <!-- <div v-for="(bulletin, index) in bulletins" :key="index"> -->

      <!-- <bulletin :bulletin="bulletin"></bulletin> -->
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Bulletin from "./bulletin.vue";

export default {
  data: () => ({}),
  components: {
    Bulletin,
  },
  methods: {
    ...mapActions({
      createBulletin: "createBulletin",
      updateBulletin: "updateBulletin",
    }),
    //['event', 'notification', 'post'],
    getBulletinType(type) {
      switch (type) {
        case "event":
          return "light-blue";
        case "notification":
          return "light-green";
        case "post":
          return "grey";
        default:
          return "Grey";
      }
    },
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
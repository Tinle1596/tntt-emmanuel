<template>
  <div class="bulletins">
    <v-container fluid>
      <v-card class="mx-auto">
        <v-toolbar color="primary">
          <v-toolbar-title class="font-weight-bold">
            Thieu Nhi Bulletin Board
          </v-toolbar-title>
        </v-toolbar>
        <v-list three-line class="pa-2">
          <v-list-item-group>
            <template v-for="(bulletin, index) in bulletins">
              <v-list-item :key="bulletin.title">
                <v-list-item-content class="text-left align-self-start">
                  <v-list-item-title class="font-weight-bold pa-1">
                    <h3>"{{ bulletin.title }}"</h3>
                  </v-list-item-title>
                  <div>
                    <v-chip label :color="getBulletinType(bulletin.type)" small class="font-weight-bold">
                      <v-icon left>mdi-label-outline</v-icon>
                      {{ bulletin.type }}</v-chip
                    >
                  </div>
                  <div id="chips-container">
                    Tags:
                    <v-chip
                      v-for="(tag, index) in bulletin.tags"
                      :key="index"
                      :class="tag"
                      class="font-weight-bold ma-1 "
                      x-small
                      >{{ tag }}</v-chip
                    >
                  </div>
                  <!-- <v-list-item-subtitle v-text="bulletin.tags"></v-list-item-subtitle> -->
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

<style lang="scss" scoped>
@import '@/scss/_shared.scss';
 
#chips-container .v-chip.TNTT {
  background: $tntt;
}
#chips-container .v-chip.HS {
  background: $hiep-si;
}
#chips-container .v-chip.NS {
  background: $nghia-si;
}
#chips-container .v-chip.TN {
  background: $thieu-ni;
}
#chips-container .v-chip.AU {
  background: $au-nhi;
}
#chips-container .v-chip.TT {
  background: $tro-ta;
}
#chips-container .v-chip.PH {
  background: $phu-huynh;
}
#chips-container .v-chip.HT {
  background: $huynh-truong;
}

</style>


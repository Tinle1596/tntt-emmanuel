<template>
  <div class="bulletins">
    <v-container fluid>
      <v-card class="mx-auto">
        <v-toolbar color="primary">
          <v-toolbar-title class="font-weight-bold">
            Thieu Nhi Bulletin Board
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items v-if="dataReady && checkClaim">
            <v-btn icon :to="{ name: 'createbulletin'}" >
              <v-icon>mdi-plus-box-outline</v-icon>
            </v-btn>
          </v-toolbar-items>
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
                    <v-chip
                      label
                      :color="getBulletinType(bulletin.type)"
                      small
                      class="font-weight-bold"
                    >
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
                      class="font-weight-bold ma-1"
                      x-small
                      >{{ tag }}</v-chip
                    >
                  </div>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text
                    v-text="bulletin.createdDate.toLocaleDateString()"
                  >
                  </v-list-item-action-text>
                  <v-dialog :key="index" v-model="bulletin.display">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" dark v-bind="attrs" v-on="on"
                        >View more</v-btn
                      >
                    </template>
                    <bulletin-info :bulletin="bulletin"></bulletin-info>
                    <v-btn
                      class="mt-1"
                      @click="bulletin.display = false"
                      color="primary"
                      >close</v-btn
                    >
                  </v-dialog>
                  <v-btn
                    class="mt-2"
                    v-show="user"
                    :to="{ name: 'editbulletin', params: { id: bulletin.id } }"
                    >Edit</v-btn
                  >
                </v-list-item-action>
              </v-list-item>
              <v-divider :key="index"> </v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BulletinInfo from "./bulletininfo.vue";

export default {
  data: () => ({
    dataReady: false,
  }),
  components: {
    BulletinInfo,
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
      user: "getUser",
      userClaims: "getUserClaim",
    }),
    checkClaim() {
      if (
        this.userClaims.hasOwnProperty("admin") ||
        this.userClaims.hasOwnProperty("teacher")
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.$store.dispatch("setBulletins");
  },
  async mounted() {
    await this.$store.dispatch("setCustomClaim").then(() => {
      this.dataReady = true;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_shared.scss";

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


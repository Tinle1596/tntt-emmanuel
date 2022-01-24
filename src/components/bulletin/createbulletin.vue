<template>
  <div class="bulletin">
    <validation-observer ref="observer" v-slot="{ invalid }">
      <bulletin :bulletin="bulletin"></bulletin>
      <v-btn color="primary" @click="createBulletin(bulletin)" :disabled="invalid">Create</v-btn>
    </validation-observer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required } from "vee-validate/dist/rules";
import { ValidationObserver } from "vee-validate";
import Bulletin from "./bulletin.vue";


export default {
  data: () => ({
    bulletin: {
      title: null,
      type: null,
      eventDate: null,
      tags: [],
      text: null,      
    },
    dialog: false,
    titleRules: [(v) => !!v || "Title required"],
    bodyRules: [(v) => !!v || "Please add information in body"],
  }),
  components: {
    ValidationObserver,
    Bulletin,
  },
  methods: {
    ...mapActions({
      createBulletin: "createBulletin"
    }),
    // onCreate() {
    //   this.createBulletin(this.bulletin);
    // }
  },
  computed: {
    ...mapGetters({
      //bulletin: "getCreateBulletin",
      bulletinType: "getBulletinType",
      tags: "getBulletinTags",
    }),    
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
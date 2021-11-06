<template>
  <div class="edit-bulletin">
    <v-container>
      <v-card rounded dense>
        <v-card-title>Update Bulletin</v-card-title>
        <v-divider></v-divider>
        <v-container>
          <validation-observer ref="observer" v-slot="{ invalid }">
          <v-form>
            <validation-provider v-slot="{errors}"
            name="Title"
            rules="required">
            <v-text-field
              v-model="currentBulletin.title"
              dense
              outlined
              required
              :error-messages="errors"
              label="Title"
            ></v-text-field>
            </validation-provider>
            <v-select
              v-model="currentBulletin.type"
              :items="bulletinType"
              outlined
              label="Type"              
              dense
            ></v-select>
            <div v-if="currentBulletin.type == 'event'">              
              <v-row class="pa-3 justify-space-between">
                  <v-text-field
                    readonly
                    v-model="currentBulletin.eventDate"
                    label="Event Date"
                    dense
                    outlined
                  >
                  </v-text-field>
                  <v-btn color="accent" dark @click="dialog = true">
                    Select Date
                  </v-btn>
              </v-row>
            </div>
            <validation-provider v-slot="{errors}" name="Body" rules="required" >
            <v-textarea
              v-model="currentBulletin.text"
              name="Body"
              outlined
              filled
              dense
              required              
              :error-messages="errors"              
              label="Body"
            ></v-textarea>
            </validation-provider>
            <v-select chips v-model="currentBulletin.tags" :items="tags" multiple label="tags" outlined small-chips>
              <template #selection="{ item }">
                <div id="chips-container">
                  <v-chip :class="item">{{item}}</v-chip>
                </div>
              </template>
            </v-select>
            <v-btn color="primary" @click="onUpdate()" :disabled="invalid">Update</v-btn>
          </v-form>
          </validation-observer>
        </v-container>
      </v-card>
    </v-container>
    <v-dialog v-model="dialog" persistent>
      <v-card class="pa-1">        
        <v-date-picker v-model="currentBulletin.eventDate"></v-date-picker>
        <v-btn @click="dialog = false">Close</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { required } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';

extend('required', {
  ...required,
  message: '{_field_} can not be empty'
})

export default {
  data: () => ({
    bulletin: {},
    dialog: false,    
    titleRules: [
      (v) => !!v || 'Title required'
    ],
    bodyRules: [
      (v) => !!v || 'Please add information in body'
    ]
  }),
  components:{
    ValidationObserver,
    ValidationProvider
  },
  computed: {
    ...mapGetters({
      currentBulletin: 'getBulletin',
      bulletinType: 'getBulletinType',
      tags: 'getBulletinTags'
    }),
  },
  methods: {
    ...mapActions({
      updateBulletin: 'updateBulletin'
    }),
    onUpdate(){      
      this.updateBulletin(this.currentBulletin)
    }
  },
  created() {
    this.$store.dispatch("getBulletinById", this.$route.params.id);
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
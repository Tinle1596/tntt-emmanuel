<template>
  <div class="edit-bulletin">
    <v-container>
      {{ currentBulletin }}
      <v-card rounded dense>
        <v-card-title>Update Bulletin</v-card-title>
        <v-divider></v-divider>
        <v-container>
          <v-form>
            <v-text-field
              v-model="currentBulletin.title"
              dense
              outlined
              label="Title"
            ></v-text-field>
            <v-select
              v-model="currentBulletin.type"
              :items="bulletinType"
              outlined
              label="Type"
              dense
            ></v-select>
            <div v-if="currentBulletin.type == 'event'">
              <v-card> </v-card>
              <v-row class="pa-3 justify-space-between">
                <div>
                  <v-text-field
                    readonly
                    v-model="currentBulletin.eventDate"
                    label="Event Date"
                    dense
                    outlined
                  >
                  </v-text-field>
                </div>
                <div>
                  <v-btn color="accent" dark @click="dialog = true">
                    Select Date
                  </v-btn>
                </div>
              </v-row>
            </div>
            <v-textarea
              v-model="currentBulletin.text"
              outlined
              filled
              dense
              label="Body"
            ></v-textarea>
            <v-select chips v-model="currentBulletin.tags" :items="tags" multiple label="tags" outlined small-chips>
              <template #selection="{ item }">
                <v-chip color="accent">{{item}}</v-chip>
              </template>
            </v-select>
            <v-btn color="primary" @click="updateBulletin(currentBulletin)">Update</v-btn>
          </v-form>
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
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    bulletin: {},
    dialog: false,
  }),
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
    
  },
  created() {
    this.$store.dispatch("getBulletinById", this.$route.params.id);
  },
};
</script>

<style>
</style>
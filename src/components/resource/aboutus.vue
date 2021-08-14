<template>
  <div class="aboutus">
    <v-card class="pa-1">
      <v-card-title class="text-center justify-center">
        <h1>{{ info.aboutUsTitle }}</h1>
      </v-card-title>
      <v-divider></v-divider>
      <v-tabs v-model="tab" show-arrows left>
        <v-tab v-for="(i, index) in info.aboutUsInfo" :key="index">
          {{ i.subtitle }}
        </v-tab>
      </v-tabs>      
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(i, index) in info.aboutUsInfo" :key="index">
          <v-list>
            <v-list-item v-for="(j, index) in i.arr" :key="index" dense>
              <v-list-item-content class="text-left">
                <li>
                  {{ j }}
                </li>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    tab: null,
  }),
  computed: {
    ...mapGetters({
      //Gets information in specified language
      info: "getTranslation",
    }),
  },
};
</script>

<style>
</style>
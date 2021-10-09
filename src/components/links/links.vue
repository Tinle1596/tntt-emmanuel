<template>
  <div class="register">
    <v-row align="center" class="justify-center">
      <v-btn
        class="d-flex ma-1"
        tile
        href="https://smpconnect.ccbchurch.com/goto/forms/86/responses/new"
        target="_blank"
        color="accent"
      >
        <v-icon> mdi-pencil </v-icon>
        
        {{ translation.homeRegister }}
      </v-btn>
      <v-btn
        class="d-flex ma-1"
        tile
        href="https://www.instagram.com/doanemmanuel/"
        target="_blank"
        color="primary"
      >
        <v-icon> mdi-instagram </v-icon>
        {{ translation.homeInstagram }}
      </v-btn>
      <v-btn
        class="d-flex ma-1"
        tile
        href="https://veym.net/"
        target="_blank"
        color="secondary"
      >
        <v-icon> mdi-instagram </v-icon>
        {{ translation.homeOfficialSite }}
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapGetters({
      translation: "getTranslation",
    }),
  },
};
</script>

<style>
</style>
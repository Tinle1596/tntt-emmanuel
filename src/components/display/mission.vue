<template>
  <div class="missionstatement">
    <v-card>
      <v-card-title> Mission </v-card-title>
      <v-card-text>
        {{ translation }}
      </v-card-text>
      <v-card-actions>
          <v-switch v-model="isTranslated">
          </v-switch>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    isTranslated: true,
    purpose: {
      english: "",
      vietnamese: "vietnamese translation",
    },
  }),
  computed: {
    translation() {
      if (this.isTranslated) {
        return this.purpose.vietnamese;
      } else {
        return this.purpose.english;
      }
    },
  },
};
</script>

<style>
</style>
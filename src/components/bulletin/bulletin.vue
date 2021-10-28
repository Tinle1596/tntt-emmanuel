<template>
  <v-card min-height="70vh">
    <v-toolbar dark color="secondary">
      <v-toolbar-title>
        {{ bulletin.title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-chip small outlined label class="mt-3" text-color="white">{{
          bulletin.postedDate.toLocaleDateString()
        }}</v-chip>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <v-card-text>
        <p class="text-left font-weight-bold black--text">
          {{ bulletin.text }}
        </p>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    bulletin: Object,
  },
  methods: {
    onClickClose(event) {
      this.$emit("clicked", "this value");
    },
  },
  computed: {
    //['event', 'notification', 'post'],
    getBulletinType() {
      switch (this.bulletin.type) {
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
};
</script>

<style>
</style>
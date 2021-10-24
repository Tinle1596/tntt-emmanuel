<template>
  <div class="bulletin">
    <v-card class="mx-auto" min-height="20vh">
      <div>
        <v-row>
          <v-col cols="8">
            <v-card-title>
              <h5>"{{ bulletin.title }}"</h5>
            </v-card-title>
          </v-col>
          <v-col cols="4">
            <v-chip label :color="getBulletinType">{{ bulletin.type }}</v-chip>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>      
    </v-card>
    <!-- <v-btn :to="{ name: 'editbulletin', params: {bulletin: currentBulletin, id: $route.params.id} }"
      >Edit</v-btn
    > -->
  </div>
</template>

<script>
export default {
  props: {
    bulletin: Object,
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
</style
<template>
  <div class="leader-card">
    <v-card class="ma-1" rounded>
      <div class="d-flex flex-no-wrap justify-space-left">
        <v-avatar class="ma-3" rounded size="100">
          <v-img :src="exampleAvatar"></v-img>
        </v-avatar>
        <div>
          <v-card-title>{{ type }} {{ name }}</v-card-title>
          <v-card-subtitle class="justify-left">{{email}}</v-card-subtitle>
          <v-card-actions class="justify-left">
              <v-chip class="ma-1" :color="getNganhColor" label small active>{{ group }}</v-chip> 
              <v-chip class="ma-1" v-if="isLead" label small>Nganh Truong</v-chip>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    name: String,
    email: String,
    group: String,
    isLead: Boolean,
  },

  data: () => ({
    exampleAvatar: "https://i.imgur.com/y7oYbiP.jpg",
    reveal: false // TODO: add reveal panel in case of more information is needed
  }),
  components: {},
  methods: {},
  computed: {
    getNganhColor() {
      switch (this.group) {
        case "Hiep Si":
          return "brown";
        case "Nghia Si":
          return "yellow";
        case "Thieu Nhi":
          return "blue";
        case "Au Nhi":
          return "green";
        default:
          return "black";
      }
    },
    created() {},
  },
};
</script>

<style>
</style>
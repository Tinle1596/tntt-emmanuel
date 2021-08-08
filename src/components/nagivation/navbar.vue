<template>
  <div id="nav">
    <v-app-bar fixed dense hide-on-scroll>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-app-bar-title>Doan Emmanuel</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="link">
          <v-list-item v-for="link in links" :key="link.icon" :to="link.route">
            <v-list-item-avatar>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-card elevation="0" class="d-flex justify-space-between">
            <div class="pa-2 align-self-center">Tiếng Việt</div>
            <v-switch class="pa-2" @click="toggleTranslation()"></v-switch>
          </v-card>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    drawer: false,
    link: 1,
    links: [
      {
        icon: "mdi-home",
        text: "Home",
        route: "/"
      },
      {
        icon: "mdi-information",
        text: "About",
        route: "/about"
      }
    ]
  }),
  methods: {
    ...mapActions({
      toggleTranslation: "toggleTranslation"
    })
  }
};
</script>

<style>
</style>
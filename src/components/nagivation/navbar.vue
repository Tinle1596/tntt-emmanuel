<template>
  <div id="nav">
    <v-app-bar fixed dense hide-on-scroll color="secondary">
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="white--text"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="white--text">Doan Emmanuel</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      app
      temporary      
    >
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            :to="link.route"
            color="accent"            
          >
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
        <v-btn class="ma-1" color="accent" v-if="!user" :to="login"
          >Login</v-btn
        >
        <v-btn class="ma-1" color="grey" v-else :to="logout">Log out</v-btn>
        <div class="pa-1">
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
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    dataReady: false,
    drawer: false,
    claim: null,
    login: "/login",
    logout: "/logout",
  }),
  methods: {
    ...mapActions({
      toggleTranslation: "toggleTranslation",
    }),
    isUserLoggedIn() {
      this.user !== null ? true : false;
    },
    checkClaim(link) {
      
    },
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      links: "getUserLinks"
    }),
  },  
};
</script>

<style>
</style>
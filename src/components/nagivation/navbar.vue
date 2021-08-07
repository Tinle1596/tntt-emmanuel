<template>
  <div id="nav">
    <v-app-bar fixed dense hide-on-scroll>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-app-bar-title>Doan Emmanuel</v-app-bar-title>      
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-card elevation="0" class="d-flex justify-space-between">
            <div class="pa-2 align-self-center">Tieng Viet</div>
            <v-switch class="pa-2" @click="toggleTranslation()"></v-switch>
          </v-card>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods:{
    ...mapActions({
      toggleTranslation: 'toggleTranslation'
    })
  }  
};
</script>

<style>
</style>
<template>
  <div>
    <v-app-bar
      absolute
      color="indigo darken-2"
      dense
      hide-on-scroll
      scroll-target="#scrolling-techniques"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-app-bar-title>Doan Emmanuel</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
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
    </v-navigation-drawer>
    <v-sheet id="scrolling-techniques" class="overflow-y-auto" max-height="600">
      <v-container style="height: 1000px"></v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style>
</style>
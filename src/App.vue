<template>
  <div id="app">
    <v-app id="app">   
      <navbar></navbar>
      <v-main>
          <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from './components/nagivation/navbar.vue'


export default {
  name: "Home",
  components: {
    navbar
  },
  data: () => ({
    drawer: false,
    group: null,
  })  
};
</script>

<style lang="scss">
@import "./scss/variables.scss";

v-app {
  font-family: $body-font-family !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#nav {
  padding: 30px;
}

</style>

<template>
  <div class="home">
    <v-container class="pa-2">
      <v-banner id="quote" elevation="0" rounded single-line>
        "Cầu Nguyện, Rước Lễ, Hy Sinh, Làm Việc Tông Đồ"
      </v-banner>
      <gallery></gallery>
      <mission-statement></mission-statement>
      <v-container class="d-flex justify-center">
        <social-media class="pa-1"></social-media>
        <register class="pa-1"></register>
      </v-container>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Gallery from "../components/display/gallery.vue";
import MissionStatement from "../components/display/goalstatement.vue";
import SocialMedia from "../components/links/socialmedia.vue";
import Register from '../components/links/register.vue'

export default {
  name: "Home",
  components: { Gallery, MissionStatement, SocialMedia, Register },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap");

#quote {
  font-family: "Dancing Script", cursive;
}
</style>

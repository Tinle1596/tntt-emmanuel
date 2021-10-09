<template>
  <div class="home">
    <v-container class="pa-2">
      <v-banner id="quote" elevation="0" rounded>
        <div>          
          <h2 class="font-weight-bold">"Cầu Nguyện, Rước Lễ, Hy Sinh, Làm Việc Tông Đồ"</h2>
        </div>
      </v-banner>
      <gallery></gallery>
      <v-card class="ma-2">
        <mission-statement></mission-statement>
      </v-card>
      <v-container class="d-flex justify-center">
        <links></links>
      </v-container>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Gallery from "../components/display/gallery.vue";
import MissionStatement from "../components/display/goalstatement.vue";
import Links from "../components/links/links.vue";

export default {
  name: "Home",
  components: { Gallery, MissionStatement, Links },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

#quote {
  font-family: "Dancing Script", cursive;
}
</style>

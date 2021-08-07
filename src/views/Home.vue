<template>
  <div class="home">
    <v-container class="pa-0">
      <v-banner id="quote" elevation="0" rounded single-line>
        "Cầu Nguyện, Rước Lễ, Hy Sinh, Làm Việc Tông Đồ"
      </v-banner>
      <gallery></gallery>
      <mission-statement></mission-statement>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Gallery from "../components/display/gallery.vue";
import MissionStatement from "../components/display/mission.vue";

export default {
  name: "Home",
  components: { Gallery, MissionStatement },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap");

#quote {
  font-family: "Dancing Script", cursive;
}
</style>

<template>
  <div class="home">
    <v-container>
      <v-banner id="quote" elevation="1" rounded single-line>
        "this is where a nice quote would go"
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

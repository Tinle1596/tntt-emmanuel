<template>
  <div class="bulletin">
    <v-container>
      <bulletins></bulletins>
    </v-container>
  </div>
</template>

<script>
import Bulletins from "../../components/bulletin/bulletins.vue";
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({}),
  components: {
    Bulletins,
  },
  methods: {},
};
</script>

<style>
</style>
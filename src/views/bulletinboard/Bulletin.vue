<template>
  <div class="bulletin">
    {{currentBulletin}}
    <h3>{{ $route.params.id }}</h3>
    <v-btn :to="{ name: 'editbulletin', params: { id: $route.params.id } }"
      >Edit</v-btn
    >
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data: () => ({}),
  components: {

  },
  computed: {
    ...mapGetters({
      currentBulletin: 'getBulletin'
    })
  },

  created() {
    
  }
};
</script>

<style>
</style>
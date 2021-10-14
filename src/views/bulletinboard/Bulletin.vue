<template>
  <div class="bulletin">
    single bulletin view
    <h3>{{ $route.params.id }}</h3>
    <v-btn :to="{ name: 'editbulletin', params: { id: $route.params.id } }"
      >Edit</v-btn
    >
  </div>
</template>

<script>
export default {
  data: () => ({}),
  components: {

  },

  created() {
    
  }
};
</script>

<style>
</style>
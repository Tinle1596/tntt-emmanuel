<template>
  <v-carousel v-model="model" hide-delimiters height="auto">
      <v-carousel-item v-for="(image, i) in images" :key="i" :src="image.src">
      </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    images: [
      {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
    ],
  }),
};
</script>

<style>
</style>
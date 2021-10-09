<template>
  <v-container>
    <v-carousel v-model="model" hide-delimiters width="100vh" height="40vh">
      <v-carousel-item v-for="(image, i) in images" :key="i" :src="image.src">
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    images: [
      {
        src: require("@/assets/sampletntt/TNTT_Sample_1.jpg"),
      },
      {
        src: require("@/assets/sampletntt/TNTT_Sample_2.jpg"),
      },
      {
        src: require("@/assets/sampletntt/TNTT_Sample_3.jpg"),
      },
      {
        src: require("@/assets/sampletntt/TNTT_Sample_4.jpg"),
      },
    ],
  }),
};
</script>

<style>
</style>
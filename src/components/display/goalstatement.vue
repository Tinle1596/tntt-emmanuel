<template>
  <div class="missionstatement">
    <v-card flat dense color="">
      <v-card-subtitle class="black--text">
        <h3>Goal</h3>
      </v-card-subtitle>
      <v-card-text class="black--text">
        {{ translation.homeGoalStatement }}
      </v-card-text>      
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({

  }),
  computed: {
    ...mapGetters({
      translation: 'getTranslation'
    })
  },
  methods: {    
  }
};
</script>

<style>
</style>
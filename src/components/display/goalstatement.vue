<template>
  <div class="missionstatement">
    <v-card>
      <v-card-subtitle>
        Goal
      </v-card-subtitle>
      <v-card-text>
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
    ...mapActions({
      
    })
  }
};
</script>

<style>
</style>
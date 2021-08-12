<template>
  <div class="missionstatement">
    <v-card>
      <v-card-subtitle>
        Goal
      </v-card-subtitle>
      <v-card-text>
        {{ goalStatement }}
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
      goalStatement: 'getGoalStatement'
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
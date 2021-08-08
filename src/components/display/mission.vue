<template>
  <div class="missionstatement">
    <v-card>
      <v-card-subtitle>
        Goal
      </v-card-subtitle>
      <v-card-text>
        {{ purposeStatement }}
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
      purposeStatement: 'getPurposeStatement'
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
<template>
  <div class="bulletins">
      <v-container>
          <div v-for="(bulletin, index) in bulletins" :key="index">
              {{ bulletin }}
          </div>          
      </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data:() => ({

    }),
    components: {
      // UnderConstruction 
    },
    methods: {

    },
    computed: {
        ...mapGetters({
            bulletins: 'getBulletins'
        })
    },
    created() {
        this.$store.dispatch('setBulletins')
    }
}
</script>

<style>

</style>
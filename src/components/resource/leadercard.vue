<template>
  <div class="leader-card">
      <v-card>        
          <v-card-title primary-title>                            
              {{type}} - {{name}}
          </v-card-title>    
      </v-card>
  </div>
</template>

<script>

export default {
    props: {
        type: String,
        name: String,
        email: String,
        group: String,
        isLead: Boolean
    },

    data: () => ({
    }),
    components: {

    },
    
    created() {

    }
}
</script>

<style>

</style>
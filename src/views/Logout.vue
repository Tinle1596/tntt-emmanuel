<template>
  <div class="logout">
    <div class="login">
      <v-container>
        <v-card dense>
            <v-card-subtitle>Are you sure you want to log out?</v-card-subtitle>          
            <v-card-actions class="justify-center">
              <v-btn color="red" @click="logOut()">Logout</v-btn>
            </v-card-actions>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"

export default {
  data: () => ({

  }),
  methods: {
    ...mapActions({
        logOut: 'logUserOut'
    })
  },
};
</script>

<style>
</style>
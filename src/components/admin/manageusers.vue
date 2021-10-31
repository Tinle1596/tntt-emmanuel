<template>
  <div class="manage-users">
    <v-container>
      <h2>Add user as admin</h2>
      <v-text-field v-model="email"></v-text-field>
      <v-btn @click="addAdminRole(email)">submit</v-btn>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
  data: () => ({
    email: "",
  }),
  methods: {
      ...mapActions({
          addAdminRole: 'addAdminRoleToUser'
      })
  }
};
</script>

<style>
</style>
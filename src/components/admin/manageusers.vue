<template>
  <div class="manage-users">
    <v-container>
      <h2>Add user to a role</h2>
      <v-text-field v-model="email"></v-text-field>
      <v-btn @click="addAdminRole(email)">add admin</v-btn>
      <v-btn @click="addTeacherRole(email)">add teacher</v-btn>
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
          addAdminRole: 'addAdminRoleToUser',
          addTeacherRole: 'addTeacherRoleToUser'
      })
  }
};
</script>

<style>
</style>
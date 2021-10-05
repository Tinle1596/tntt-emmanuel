<template>
  <div class="login">
    <v-container>
      <v-card dense>        
        <v-form v-model="valid" @login.prevent>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  outlined
                  dense
                  label="email"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="password"
                  type="password"
                  outlined
                  dense
                  label="password"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn color="light-green" @click="onLogin()">Login</v-btn>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    password: "",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "Email must be valid",
    ],
  }),
  methods: {
    onLogin() {
      try{
       this.$store.dispatch('logUserIn', {email: this.email, password: this.password});
      } catch (e) {
        alert(e.message)
      }
    }    
  }  
};
</script>

<style>
</style>
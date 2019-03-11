<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex sx12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <v-card-title>
                <h1>Sign Up</h1>
              </v-card-title>
              <v-form v-model="formValid" ref="signUpForm" @submit.prevent="OnSignup">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Name"
                      :rules="[rules.empty]"
                      id="name"
                      
                      type="text"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Email"
                      id="email"
                      v-model="email"
                      type="email"
                      :rules="[rules.empty, validateEmail]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      autocomplete="off"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      :rules="[rules.empty]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      label="Confirm password"
                      id="cnpassword"
                      autocomplete="off"
                      v-model="cnpassword"
                      :rules="[rules.empty]"
                      type="password"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" :disabled="loading" :loading="loading">Sign up</v-btn>
                    <v-btn :disabled="loading" @click="clearFields">Clear</v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      name: "",
      formValid: true,
      password: "",
      cnpassword: "",
      usernames: [],
      rules: {
        empty: v => !!v || "Required"
      }
    };
  },
 
  computed: {
    
    comparepass() {
      return this.password !== this.cnpassword ? "Password Do not match" : true;
    },
    validateEmail() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(String(this.email).toLowerCase()) == false
        ? "Invalid Email"
        : true;
    },
    error() {
      return this.$store.getters["user/error"];
    },
    loading() {
      return this.$store.getters["user/loading"];
    }
  },
  methods: {
    clearFields() {
      this.$refs.signUpForm.reset();
    },
    OnSignup() {
      
      
      let validate = this.$refs.signUpForm.validate();
      if (!validate) return;
      this.$store.dispatch("user/SignUserup", {
        email: this.email,
        name: this.name,
        password: this.password
      });
      if (!this.loading) this.$router.push("/dashboard");
    },
    onDismissed() {
      this.$store.dispatch("user/clearError");
    }
  },
   created(){
      firebase.auth().onAuthStateChanged((user)=>{
       
        this.$store.dispatch("user/SetuserStatus",{status:user? true :false})
        
      })
    }
};
</script>

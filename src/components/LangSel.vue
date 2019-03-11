<template>
<v-layout justify-center row>
    <v-flex sm10 md4  >
    <v-card style="padding:15px">
<h2 style="text-align:center;padding:10px;">Select Your Language</h2>
<v-layout row>
    
<v-spacer></v-spacer><v-btn @click="nextPage">English</v-btn><v-spacer></v-spacer><v-btn disabled="">Hindi</v-btn><v-spacer></v-spacer>
</v-layout>
    </v-card>
    </v-flex>
    </v-layout>
</template>

<script>
export default {
    computed:{
        UserSignedIn(){
            return this.$store.getters["user/getIsSignedIn"]
        }
    },
    methods:{
        nextPage(){
            if (this.UserSignedIn){
                this.$router.push("/Dashboard")
            }
            else{
                this.$router.push("/signup")
            }
        }
    }
}
</script>

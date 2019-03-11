<template>
<v-layout row justify-center>
    <v-flex col xs10>
    <v-card style="padding:40px"  >
        <v-card-title>
          <h1>  Product Listing Details</h1>
        </v-card-title>
        
            <div style="font-size:40px" > {{Item.name}} </div>
            <p style="font-size:25px"> {{Item.disc}} </p>
            <div style="font-size:35px"> price : {{Item.price}} per {{Item.unit}} </div>
            <div style="font-size:35px" >Phone Number : {{Item.number}}
            </div>
        
    </v-card>
    </v-flex>
    </v-layout>
</template>
<script>
export default {
    computed:{
        Item(){
          return  this.$store.getters["mandi/getDetails"]
        }
    },
    created(){
        this.$store.dispatch("mandi/getDetails",this.$route.params.id)
    }
}
</script>

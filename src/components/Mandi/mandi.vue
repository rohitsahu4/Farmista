<template>
    <v-container>
    <template>
  <div>
    <v-tabs
 
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab
        ripple
      >
       Buy
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
          <v-data-table
    :headers="headers"
    :items="item"
    item-key="name"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <tr @click="goto(props.item.id)">
      <td>{{ props.item.name }}</td>
      <td class="text-xs- ">{{ props.item.disc }}</td>
      <td class="text-xs-right">{{ props.item.price + "rs per " + props.item.unit }}</td>
      <td class="text-xs-right">{{ props.item.name }}</td></tr>
    </template>
    <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
  </v-data-table>      

          </v-card-text>
        </v-card>
      </v-tab-item>
       <v-tab
        ripple
      >
       Sell
      </v-tab>
      <v-tab-item>
          <v-layout row justify-center>
          <v-card  class="red" style="text-align:center;padding:20px; margin:25px" sm10 md6 lg4   v-if="!isUserLoggedIn">
<h3 style="font-weight:200;padding:20px;color:white;" >You Need To login first </h3>

<v-layout row>

<v-spacer></v-spacer><v-btn to="/login">Login</v-btn> <v-spacer></v-spacer> <v-btn to="/signup">Sign Up</v-btn> <v-spacer></v-spacer>
</v-layout>
          </v-card>
          </v-layout>
<v-layout v-if="isUserLoggedIn" row justify-center>
  <v-flex sm12 md6 >
    <div class="center">
          <v-card style="padding:50px ;margin:50px" >
            <v-card-title> <h1> Add A Product Listing </h1></v-card-title>
            <form class="center">
           
          
          <v-text-field
            label="Name of the Product"
            v-model="newItem.name"
            outline
          ></v-text-field>
     
      
          <v-text-field
            label="Discription"
            outline
            v-model="newItem.disc"
          ></v-text-field>
      
      
          <v-text-field
            label="unit"
            outline
            v-model="newItem.unit"

          ></v-text-field>
      
      
          <v-text-field
            label="price"
            outline
            v-model="newItem.price"
          ></v-text-field>
       


          <v-text-field 
          class="center"
            label="Your Phone Number"
            outline
            v-model="newItem.number"
          ></v-text-field>
        <v-spacer></v-spacer><v-btn @click="submit" > Submit </v-btn><v-spacer></v-spacer>
           
            </form>
          </v-card>
    </div>
          </v-flex>
          </v-layout>
      </v-tab-item>
    </v-tabs>

  
  </div>
</template>    
        
    </v-container>
</template>
<script>
import {firebase} from "@/scripts/firebase"
export default {
    data(){
        return {
          newItem:{
            name:"",
            disc:"",
            unit:"",
            price:"",
            number:""
          },
          List:[],
            search:"",
            headers: [
          {
            text: 'Item Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Short Discription', value: 'shrt_disc' },
          { text: 'Price Per Unit', value: 'ppu' },
          { text: 'Seller', value: 'seller' },
        ]}
    },
    computed:{
        isUserLoggedIn(){
            return this.$store.getters["user/getIsSignedIn"]
        },
        loading(){
          return this.$store.getters["mandi/getLoading"]
        }
        ,item(){
          return  this.$store.getters["mandi/getlistOfItems"]

        }
    },
   created(){
     this.$store.dispatch("mandi/getlistOfItems")
      firebase.auth().onAuthStateChanged((user)=>{
       
        this.$store.dispatch("user/SetuserStatus",{status:user? true :false})
        
      })
    }
    ,methods:{
      goto(id){
        this.$router.push("/mandi/"+id)
      }
      ,
      submit(){
        console.log(this.item)
        this.$store.dispatch("mandi/addItem",this.newItem)
      }
    }
    
}
</script>

<template>
 <div class="container-fluid chat_container" id="app">
   
     <div class="row" v-if="authenticated">
       <Rooms />
       <Video :username="username"/>
       <Logs />
     </div>
     
     <div class="row" v-else>
       <div class="username">
           <form class="form-inline" @submit.prevent="submitUsername(username)">
             <div class="form-group mb-2">
                 <v-text-field type="text" label="Enter Name" class="form-control" outline v-model="username" ></v-text-field>
             </div>
             <button type="submit" class="btn btn-primary mb-2 Botton">Submit</button>
         </form>
       </div>
     </div>
 </div>
</template>
<script>
import Rooms from './Rooms'
import Video from './Video'
import Logs from './Logs'
import AddRoom from './AddRoom'
import {firebase} from "../../scripts/firebase"
export default {
 name: 'App',
 data() {
   return {
     username: "",
     authenticated: false
   }
 },
 components: {
   Rooms,
   Video,
   Logs,
   AddRoom
 },
//  created(){
//    firebase.auth().onAuthStateChanged(user=>{
//      console.log(user.email)
//      this.submitUsername(user.email)
//    })
//  },
 methods: {
   submitUsername(username) {
      if(!username) {
        return alert('please provide a username');
      }

      this.authenticated = true;
   }
 }
 }
</script>

<style>
 .box {
   border: 1px solid gray;
 }

 .username {
   margin: 12px auto 7px auto;
   color: wheat;
 }

   .Botton {
   color: #fff;
   background-color: #4d555f;
   border-color: #303840;
   padding: 8px;
   font-weight: bolder;
 }
</style>
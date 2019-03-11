<template>
    <v-container>
        <v-layout>
            <v-card>
                <v-card-title class="display-3"> {{artical.title}} </v-card-title>
                <v-divider style="margin:25px 0"/>
                <v-flex sm12>
                    <iframe width="1000" height="550" :src="artical.youtube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </v-flex>
                <v-card-text class="display-5"> 

                    {{artical.data}}
                </v-card-text>

                   <img :src="artical.img"  style="border-radius:8px;margin:50px;"/>
            </v-card>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    computed:{
        artical(){
            return this.$store.getters["articals/getArtical"]
        }
    },
   created(){
       this.$store.dispatch("articals/getArtical",this.$route.params.id)
   }
}
</script>

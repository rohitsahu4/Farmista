<template>
    <v-container>

        <v-layout v-for="artical in articalList" :key="artical.title" row>
            <v-flex style="margin:10px" sm12 >
                <v-card :to="'/artical/'+artical.id" hover class="accent " dark>
                    <v-card-title class="display-1"> {{artical.title}} </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        
    </v-container>

</template>
<script>
export default {
    computed:{
        articalList(){
            return this.$store.getters["articals/getList"]
        }
    },
     created(){
        this.$store.dispatch("articals/getList",this.$route.params.cat)
    }
}
</script>

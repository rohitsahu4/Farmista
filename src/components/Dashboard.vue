<template>
  <v-container>
  
    <v-card style="padding:10px;">
  
      <v-layout wrap row>
  
        <v-flex sm12 md5>
  
          <v-card>
  
            <v-img src="https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/10/15/Photos/Processed/farmers-k0oB--621x414@LiveMint.JPG" height="300px" width="400px">
  
              <v-container fill-height fluid pa-2>
  
                <v-layout fill-height>
  
                  <v-flex xs12 align-start flexbox>
  
                    <span class="headline gray--text">Categories</span>
  
                  </v-flex>
  
                </v-layout>
  
              </v-container>
  
            </v-img>
  
  
  
  
  
          </v-card>
  
        </v-flex>
  
        <v-flex sm12  md7>
  <v-layout   fill-height row wrap>
  
            <v-flex sm4>
  
              <v-card to="cat/fertilizers" hover class="cat-card secondary white--text  font-weight-thin">fertilizers</v-card>
  
            </v-flex>
  
  
            <v-flex sm4>
  
              <v-card hover to="cat/scheme" class="cat-card secondary  font-weight-thin white--text">Govt. Schemes</v-card>
  
            </v-flex>
  
  
  
            <v-flex sm4>
  
              <v-card to="/mandi" hover class="cat-card accent  font-weight-thin white--text">E Mandi</v-card>
  
            </v-flex>
  
  
  
            <v-flex sm4>
  
              <v-card hover class="cat-card info font-weight-thin  white--text">Market Prices</v-card>
  
            </v-flex>
  
            <v-flex sm4>
  
              <v-card hover class="cat-card primary white--text  font-weight-thin">Crops Statistics</v-card>
  
            </v-flex>
  
  
  
          
  
            <v-flex grow sm4>
  
              <v-card hover class="cat-card primary white--text  font-weight-thin">Learn</v-card>
  
            </v-flex>
  
          </v-layout>
  
        </v-flex>
  
      </v-layout>
  
    </v-card>


    
  </v-container>
</template>
<script>
  export default {
  
  
  
  }
</script>

<style scoped>
  .cat-card {
  
    height: calc( 100% - 10px);
  
    width: calc( 100% - 10px);
  
    border-radius: 8px;
  
    font-size: 40px;
  
  }
</style>

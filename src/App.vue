<script>
  import axios from 'axios';
  import {store} from './store.js'
  import AppHead from './components/AppHead.vue'
  import AppPagination from './components/AppPagination.vue'

  export default{
    components:{
      AppHead,
      AppPagination,
    },

    data(){
      return{
        store,
      }
    },

    created(){
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0').then(res => {
        
        this.store.cards = res.data.data;
        console.log(this.store);
      }).catch(err => {
        console.log(err)
      })
    }
  }


</script>

<template>
  <AppHead></AppHead>

  <div class="container">
    <AppPagination></AppPagination>
  </div>


</template>

<style lang="scss">

  @use './styles/general.scss' as *;

  .container{
    height: 100vh;
    // test
    max-width: 1680px;
    margin: 125px auto 0;
    padding: 70px;
    background-color: white;
  }

</style>

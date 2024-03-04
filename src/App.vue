<script>
  import axios from 'axios';
  import {store} from './store.js'
  import AppHead from './components/AppHead.vue'
  import CardContainer from './components/CardContainer.vue'
  import CardFilter from './components/CardFilter.vue'


  export default{
    components:{
      AppHead,
      CardContainer,
      CardFilter,
    },

    data(){
      return{
          store,
      }
    },    

    created(){
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0').then(res => {
        this.store.cards = res.data.data;
        this.store.meta = res.data.meta;
        console.log(this.store)
      }).catch(err => {
        console.log(err)
      })
    },
  }


</script>

<template>
  <AppHead></AppHead>
  <CardFilter></CardFilter>
  

  <CardContainer></CardContainer>


</template>

<style lang="scss">
  @use './styles/general.scss' as *;

  
</style>

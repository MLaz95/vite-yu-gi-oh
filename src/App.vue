<script>
  import axios from 'axios';
  import {store} from './store.js'
  import AppHead from './components/AppHead.vue'
  import CardContainer from './components/CardContainer.vue'
  import CardFilter from './components/CardFilter.vue'
  import AppLoading from './components/Loading.vue'


  export default{
    components:{
      AppHead,
      CardContainer,
      CardFilter,
      AppLoading,
    },

    data(){
      return{
          store,
          // boolean to check when the loading screen needs to fade
          isLoading: true,
          archetypeList: '',
          currentOffset: 0
      }
    },    

    created(){
      // gets card data and meta data about the database
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0').then(res => {
        this.store.cards = res.data.data;
        this.store.meta = res.data.meta;
        console.log(this.store)
      }).catch(err => {
        console.log(err)
      }),

      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then(res => {
        this.archetypeList = res.data;
        console.log(this.archetypeList)
      })
    },

    mounted(){
      // loading screen vanishes after 3 sec
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },

    methods: {
      callCards(){
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=${this.currentOffset}&archetype=${this.store.filterTarget}`).then(res => {
          this.store.cards = res.data.data;
          this.store.meta = res.data.meta;
        }).catch(err => {
          axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=${this.currentOffset}`).then(res => {
            this.store.cards = res.data.data;
            this.store.meta = res.data.meta;
          })
        })
      },

      filterCardList(){
        this.currentOffset = 0;
        this.callCards();
      },

      prevPage(){
        if(this.currentOffset >= 40){
          this.currentOffset = this.currentOffset - 40;
          this.callCards();
        }else{
          this.currentOffset = 0;
        }
      },

      nextPage(){
        if(this.store.meta.pages_remaining > 0){
          this.currentOffset += 40;
          this.callCards();
        }
        
      },
    }
  }


</script>

<template>
  <!-- prop passes isLoading variable to loading screen component -->
  <AppLoading :isLoading="isLoading"></AppLoading>
  
  <!-- rest of the page is only displayed after loading is done -->
  <main v-if="!isLoading">
    <AppHead></AppHead>
    <CardFilter
      :archetypeList="archetypeList"
      @filter="filterCardList()"
      @prev="prevPage()"
      @next="nextPage()"
    ></CardFilter>
    <CardContainer></CardContainer>
  </main>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;

  
</style>

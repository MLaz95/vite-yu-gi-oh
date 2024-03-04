<script>
    import {store} from '../store.js'
    import AppPagination from './AppPagination.vue'
    import CardItem from './CardItem.vue'



    export default{
        name: 'CardContainer',

        components:{
            AppPagination,
            CardItem,
        },
        
        data(){
            return{
                store,
            }
        },
    }
</script>

<template>
    <div class="container">
        <AppPagination></AppPagination>
        <CardItem
            v-for="card in store.cards"
        ></CardItem>
    </div>
</template>

<style lang="scss">
    @use '../styles/variables.scss' as *;

    .container{
        height: 100vh;
        // test
        display: flex;
        flex-flow: row wrap;
        gap: $cardGap;
        max-width: 1680px;
        margin: 125px auto 0;
        padding: 70px;
        background-color: white;
    }

</style>
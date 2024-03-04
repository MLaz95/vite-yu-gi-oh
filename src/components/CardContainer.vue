<script>
    import {store} from '../store.js'
    import CardItem from './CardItem.vue'
    import AppPagination from './AppPagination.vue'

    export default{
        name: 'CardContainer',

        components:{
            CardItem,
            AppPagination,
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
        

        <div class="card-container">
            <AppPagination></AppPagination>

            <CardItem
                v-for="(cardObject, index) in store.cards"
                :card="store.cards[index]"
            ></CardItem>

        </div>
        
    </div>
</template>

<style lang="scss">
    @use '../styles/variables.scss' as *;

    .card-container{
        display: flex;
        flex-flow: row wrap;
        align-items: stretch;
        gap: $cardGap;

        padding: 70px;
        background-color: white;
    }

</style>
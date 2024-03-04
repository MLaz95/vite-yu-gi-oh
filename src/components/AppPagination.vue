<script>
    import {store} from '../store.js'
    export default{
        name: 'AppPagination',

        data(){
            return{
                store,
            }
        }
    }

</script>

<template>
    <div id="page-bar">
        <div>
            Found {{store.cards.length}} cards
        </div>
        <div>
            Page 1 - {{ store.meta.total_pages }}
        </div>
    </div>
</template>

<style lang="scss">
    @use '../styles/variables.scss' as *;

    #page-bar{
        width: 100%;
        padding: 30px;
        font-size: 18px;
        font-weight: bold;
        color: white;
        background-color: $secondary-color;

        display: flex;
        justify-content: space-between;
    }
</style>
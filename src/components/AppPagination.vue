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
        Found {{store.cards.length}} cards
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
    }
</style>
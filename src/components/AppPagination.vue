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
    @use '../styles/palette.scss' as *;

    #page-bar{
        padding: 30px;
        font-size: 18px;
        font-weight: bold;
        color: white;
        background-color: $secondary-color;
    }
</style>
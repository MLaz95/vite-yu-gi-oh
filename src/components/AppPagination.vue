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
            <!-- displays how many cards are currently in the page -->
            Found {{store.meta.total_rows}} cards
        </div>
        <div>
            <!-- displays how many pages there are in the database with current page-size -->
            Page 1 of {{ store.meta.total_pages }}
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
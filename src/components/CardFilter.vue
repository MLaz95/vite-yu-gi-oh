<script>
    import {store} from '../store.js'

    export default{
        name: 'CardFilter',

        props: {
            archetypeList: Array,
        },

        data(){
            return{
                store,
            }
        },   
    }
</script>

<template>
    <div class="container filter-container">
        
        <select name="archetypes" id="card-filter" @change="$emit('filter')" v-model="store.filterTarget">
            <option value="">All</option>
            <option
                v-for="currentArchetype in archetypeList"
                :value="currentArchetype.archetype_name"
            >{{ currentArchetype.archetype_name }}</option>
        </select>

        <div>
            <button @click="$emit('prev')">Prev</button>
            <button @click="$emit('next')">Next</button>
        </div>

    </div>
    
</template>

<style lang="scss">
    @use '../styles/variables.scss' as *;

    .filter-container{
        padding: 30px;
        display: flex;
        align-items: center;
        gap: 1rem;

        button{
            width: 50px;
            height: 50px;
            margin: 0 0.5rem;
            border-radius: 50%;
            border: none;

            cursor: pointer;
            font-size: 1rem;
            color: white;
            background-color: $secondary-color;
            transition: transform 0.3s;

            &:hover{
                transform: scale(1.1);
            }
        }
    }

    #card-filter{
        width: 240px;
        font-size: 1.5rem;
        padding: 1rem;
        border: 0;
        border-radius: 10px;
    }
    
</style>
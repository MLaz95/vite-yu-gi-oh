<script>
    export default{
        name: 'CardFilter',

        props: {
            archetypeList: Array,
        }
    }
</script>

<template>
    <div class="container filter-container">
        
        <select name="archetypes" id="card-filter">
            <option v-for="currentArchetype in archetypeList" :value="currentArchetype.archetype_name">{{ currentArchetype.archetype_name }}</option>
        </select>

    </div>
    
</template>

<style lang="scss">
    .filter-container{
        padding: 30px;
    }

    #card-filter{
        width: 240px;
        font-size: 1.5rem;
        padding: 1rem;
        border: 0;
        border-radius: 10px;
    }
    
</style>
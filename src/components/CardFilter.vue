<script>
    export default{
        name: 'CardFilter',
    }
</script>

<template>
    <div class="container filter-container">
        
        <select name="archetypes" id="card-filter">
            <option value="alien">Alien</option>
            <option value="infernoble arms">Infernoble Arms</option>
            <option value="noble knight">Noble Knight</option>
        </select>

    </div>
    
</template>

<style lang="scss">
    .filter-container{
        padding: 60px 30px;
    }

    #card-filter{
        width: 240px;
        font-size: 1.5rem;
        padding: 1rem;
        border: 0;
        border-radius: 10px;
    }
    
</style>
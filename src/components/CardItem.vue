<script>
    export default{
        name: 'CardItem',
    }
</script>

<template>
    <div class="card"></div>
</template>

<style lang="scss">
    @use '../styles/variables.scss' as *;

    .card{
        width: calc(100% / 5 - $cardGap * 4 / 5);
        background-color: pink;
    }

</style>
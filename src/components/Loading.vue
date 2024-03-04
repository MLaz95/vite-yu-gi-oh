<script>
    export default{
        name: 'AppLoading',
        props: ["isLoading"]
    }
</script>

<template>
    <div id="loader" :class="{ fadeout: !isLoading }">
        <img src="../assets/yugioh-logo.png" alt="">
    </div>
</template>

<style lang="scss">
    @use '../styles/variables.scss' as *;

    #loader{
        width: 100vw;
        height: 100vh;
        position: fixed;

        background-color: $primary-color;
        img{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &.fadeout{
            animation: fadeout 2s forwards;
        }
    }

    @keyframes fadeout {
        to{
            opacity: 0;
            visibility: hidden;
        }
        
    }

    

</style>
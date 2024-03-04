<script>
    export default{
        name: 'AppHead',
    }

</script>

<template>
    <header>
        <div class="logo-wrapper">
            <img src="../assets/yugioh-logo.png" alt="">
        </div>
        <h1>Yu-gi-oh API</h1>
    </header>
</template>

<style lang="scss">
    header{
        display: flex;
        align-items: center;
        gap: 2rem;

        padding: 15px 40px;
        background-color: white;

        .logo-wrapper{
            width: 75px;
            height: 75px;

            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        h1{
            font-size: 3.5rem;
        }
    }
</style>
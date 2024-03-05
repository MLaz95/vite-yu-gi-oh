<script>
    export default{
        name: 'CardItem',

        props:{
            card: Object,
        },
    }
</script>

<template>
    <div class="card">
        <!-- prop is an entire card object, each element picks the info they need -->
        <img :src="card.card_images[0].image_url_small" alt="">
        <div class="card-info">
            <h2>{{ card.name }}</h2>
            <h3>{{ card.race }}</h3>
        </div>
        
    </div>
</template>

<style lang="scss">
    @use '../styles/variables.scss' as *;

    .card{
        width: calc(100% / 5 - $cardGap * 4 / 5);

        text-align: center;
        background-color: $primary-color;

        img{
            width: 100%;
        }
    }

    .card-info{
        padding: 1rem;

        h2{
            text-transform: uppercase;
            color: white;
        }

        h3{
            font-weight: normal;
            font-size: 1.5rem;
            padding: 1rem;
        }
    }

</style>
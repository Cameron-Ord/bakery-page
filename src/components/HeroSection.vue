<template>
    <article class="hero_article">
        <div class="hero_image_div">
            <img class="svg_tag" src="/svgs/bread-baguette-outline-svgrepo-com.svg" alt="">
        </div>
        <div class="hero_text_header">
            <h1 class="text_header_name">Welcome to Freshest Bakery</h1>
            <p class="text_sizing">Indulge in the art of baking with our delectable creations made with love and passion.</p>
        </div>
        <div class="hero_section_cto">
            <h1 class="view_menu_tag">About us</h1>
            <h1 class="view_menu_tag">View menu</h1>
        </div>
    </article>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

$text: #fff;
.hero_article{
    padding-top: 25px;
    padding-bottom: 25px;
    display: grid;
    justify-items: start;
    align-items: center;
    width: 90%;
    row-gap: 35px;
    >.hero_image_div{
        display: flex;

        >.svg_tag{
            width: 75px;
        }
    }
    >.hero_section_cto{
        display: flex;
        flex-direction: column;
        align-items: start;
        row-gap: 10px;
        >.view_menu_tag{
            color: $text
        }
    }
    >.hero_text_header{
        display: flex;
        flex-direction: column;
        text-align: start;
        align-items: start;
        
        row-gap: 25px;
        >.text_header_name{
            color: $text;
        }
        >.text_sizing{
            color: $text;
            font-size: 1.2rem;
            font-weight: 500;
            letter-spacing: 0.5px;
            width: 80%;
        }
    }
}
</style>
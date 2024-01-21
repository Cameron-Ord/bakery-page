<template>
    <article class="hero_article">
        <div class="hero_text_header">
            <h1 class="text_header_name">Freshest Bakery</h1>
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




.hero_article{

    display: grid;
    justify-items: start;
    align-items: center;
    background-color: var(--transparent_violet);  
    width: 90%;
    row-gap: 35px;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 5px;
    >.hero_image_div{
        display: flex;

        >.svg_tag{
            width: 75px;
        }
    }
    >.hero_section_cto{
        display: flex;
        flex-wrap: wrap;
        column-gap: 15px;
        row-gap: 15px;
        align-items: start;
        row-gap: 10px;
        >.view_menu_tag{
            border: solid var(--quartz) 1px;
            padding: 5.4px;
            color: var(--quartz);
            border-radius: 5px;
        }
    }
    >.hero_text_header{
        display: flex;
        flex-direction: column;
        text-align: start;
        align-items: start;
  
        row-gap: 25px;
        >.text_header_name{
            color: var(--quartz);
            font-size: clamp(1.65rem, 2vw, 1.75rem);
        }
        >.text_sizing{
            color: var(--white);
            font-size: clamp(1.25rem, 2vw, 1.35rem);
            font-weight: 500;
            letter-spacing: 0.5px;        
        }
    }
}
</style>

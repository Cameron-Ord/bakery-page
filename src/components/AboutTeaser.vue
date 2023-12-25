<template>
    <article class="teaser_article">
        <span class="teaser_heading">
            <h1>Behind the dough</h1>
        </span>
        <span class="teaser_text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </span>
        <span class="teaser_list">
            <h3>Our Team</h3>
            <h3>Our History</h3>
            <h3>Our Philosophy</h3>
            <h3>Ingredients</h3>
            <h3>Locations</h3>
        </span>
    </article>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
$accent: #FFBF00;
$text: black;
$bg_rbga: rgba(16, 15, 12, 0.5);

.teaser_article{
  
    display: grid;
    align-items: center;
    justify-self: center;
    justify-items: center;
    row-gap: 25px;

    >.teaser_heading{
        display: flex;
        width: 90%;
        flex-wrap: wrap;
        justify-content: flex-start;
        >h1{
            color: $text;
            text-align: start;
        }
    }
    >.teaser_text{
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        >p{
            color: $text;
            max-width: 500px;
            text-align: start;
        }
    }

    >.teaser_list{
        width: 90%;
        align-items: center;
        row-gap: 15px;
        column-gap: 17px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        >h3{
            color: $text;
            border: solid $text 1px;
            padding: 4px;
            border-radius: 7px;
        }
    }
}
</style>
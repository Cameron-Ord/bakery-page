<script setup lang="ts">

</script>
<style lang="scss" scoped>
.sub_hero_article{
    display: grid;
    justify-items: start;
    align-items: start;
    text-align: start;
    max-width: 425px;
    width: 90%;
    row-gap: 35px;

    >.items_wrapper{
        display: flex;
        flex-wrap: wrap;
        column-gap: 15px;
        row-gap: 15px;
    }
}
</style>

<template>
    <article class="sub_hero_article">
        <div class="items_wrapper">
            <h1 class="menu_item">View Breads</h1>
            <h1 class="menu_item">View Pastries</h1>
            <h1 class="menu_item">View Specials</h1>
        </div>
    </article>
</template>
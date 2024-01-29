<script setup lang="ts">
const {assign_selection} = defineProps(['assign_selection']);

const selection = (event: any) =>{
    const text = event.target.innerText;
    assign_selection(text);
}

</script>
<style lang="scss" scoped>
.crtls_article{
    display:grid;
    justify-items: center;
    padding-top: 10px;
    padding-bottom: 10px;

    >.menu_crtl_span{
        display: flex;
        width: 90%;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        column-gap: 25px;
        row-gap: 10px;
    }
}

</style>
<template>
    <article class="crtls_article">
        <span class="menu_crtl_span">
            <h1 class="menu_crtl_tag" @click="selection($event)">Breads</h1>
            <h1 class="menu_crtl_tag" @click="selection($event)">Pastries</h1>
            <h1 class="menu_crtl_tag" @click="selection($event)">Specials</h1>
        </span>
    </article>
</template>
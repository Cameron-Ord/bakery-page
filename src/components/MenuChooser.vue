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
    padding-top: 50px;
    padding-bottom: 50px;

    >.menu_crtl_span{
        display: flex;
        width: 80%;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        column-gap: 10px;
        row-gap: 10px;
    }
}

@media only screen and (min-width: 770px) {
    .crtls_article{
        >.menu_crtl_span{
        
        width: 90%;
    }
    }
}

@media only screen and (min-width: 1024px) {
    
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

<template>
    <article class="menu_article">
        <h2>{{ breads[index]['Title'] }}</h2>
        <p>{{ breads[index]['Desc'] }}</p>
        <span class="control_span">
            <img @click="index_dwn" src="/svgs/larrow.svg" alt="">
            <img @click="index_up" src="/svgs/rarrow.svg" alt="">
        </span>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const index = ref(0);
const breads = [
    {
        "Title": "Sourdough",
        "Desc": "Savor the tangy perfection of our artisanal Sourdough Delight. Crafted through natural fermentation, bread offers a crispy crust and chewy texture. Versatile and flavorful, it's perfect with butter or paired with artisanal cheeses.",
        "Img": "/images/pexels-marta-dzedyshko-7693924.jpg"
    },
    {
        "Title": "White bread",
        "Desc": "Indulge in simplicity with our White Bread. Soft, fluffy, and versatile. Perfect for toasting or crafting your favorite sandwiches. Embrace the classic goodness with every bite.",
        "Img": "/images/whitebread.jpg"
    },
    {
        "Title": "Whole grain bread",
        "Desc": "Savor the wholesome goodness of our Nutty Whole Grain Bread. Packed with fiber and nutrients, it's a hearty choice for a nutritious start or a satisfying sandwich foundation.",
        "Img": "/images/pexels-marta-dzedyshko-7693939.jpg"
    },
    {
        "Title": "Rye bread",
        "Desc": "Indulge in the rich amalgamation of wholesome grains found in our Rye Bread. Its nutty, tangy profile adds to its versatility, making it an ideal canvas for various spreads or a distinctive choice for your sandwich creation.",
        "Img": "/images/pexels-nadin-sh-11214698.jpg"
    }
]

const index_up = (event: any) =>{
    if(event.type === "click"){
        let index_val = index.value;
        index_val++;
        if(index_val >= breads.length){
            index_val = 0;
        }
        index.value = index_val
    }
}

const index_dwn = (event: any) =>{
    if(event.type === "click"){
        let index_val = index.value;
        index_val--;
        if(index_val < 0){
            index_val = breads.length - 1;
        }
        index.value = index_val
    }
}

</script>

<style lang="scss" scoped>
.menu_article {
    display: grid;
    justify-items: start;
    justify-self: center;
    align-items: center;
    width: 90%;
    text-align: start;
    row-gap: 35px;

    >.control_span{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-evenly;
        justify-self: center;
        >img{
            width: 30px;
        }
    }
}
</style>

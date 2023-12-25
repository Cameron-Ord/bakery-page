<template>
    <article class="menu_article">
        <span class="menu_item">
            <div class="item_text">
                <h2>{{breads[index]['Title']}}</h2>
                <p>{{ breads[index]['Desc'] }}</p>
            </div>
        </span>
        <span class="controls">
            <img @click="index_dwn($event)" src="/svgs/larrow.svg" alt="a left arrow">
            <img @click="index_up($event)" src="/svgs/rarrow.svg" alt="a right arrow">
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
$text: #fff;
$accent: #CDA061;
$bg_rbga: rgba(16, 15, 12, 0.5);

.menu_article {
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 25px;

    >.controls{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 70%;
        >img{
            width: 50px;
        }
    }


    >.menu_item {
        padding: 10px;
        border-radius: 10px;
        width: 80%;
        background-color: $bg_rbga;
        display: flex;
        row-gap: 20px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        >.item_text {
            display: flex;
            align-items: start;
            text-align: start;
            flex-direction: column;
            row-gap: 10px;

            >h2{
                font-size: clamp(1.40rem, 2vw, 1.50rem);
                color: $accent;
            }

            >p {
                font-size: clamp(1.10rem, 2vw, 1.20rem);
                letter-spacing: 0.5px;
                color: $text;
                font-weight: 400;
                
            }
        }

    }
}</style>
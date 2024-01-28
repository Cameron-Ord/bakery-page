<template>
  <article class="menu_article" v-for="(item, i) in breads" :key="i">
    <span class="container_span">
      <h2 class="breads_title item_h2_tag">{{ item['Title'] }}</h2>
      <p class="breads_desc item_p_tag">{{ item['Desc'] }}</p>
    </span>
  </article>
</template>

<script setup lang="ts">
import { onUpdated, ref, nextTick } from 'vue';
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



onUpdated(() => {

  let bread_title: HTMLElement | null = document.querySelector('.breads_title');
  let bread_desc: HTMLElement | null = document.querySelector('.breads_desc');
  nextTick(() => {
    if (bread_title !== null) {
      bread_title.style.opacity = '1';
    }
    setTimeout(() => {
      if (bread_desc !== null) {
        bread_desc.style.opacity = '1';
      }
    }, 150)
  })
})
</script>

<style lang="scss" scoped>
.menu_article {
  display: grid;
  justify-items: start;
  justify-self: center;
  align-items: center;
  text-align: start;
  row-gap: 35px;

  >.container_span{
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    justify-content: start;
    align-items: start;
    width: 90%;
    >h2 {
      transition: 0.3s ease-in-out;
    }

    >p {
      
      transition: 0.3s ease-in-out;
   }
  }

}
</style>

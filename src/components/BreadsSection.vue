<script setup lang="ts">
import { nextTick, onMounted } from 'vue';

const breads = [
  {
    "Title": "Sourdough",
    "Desc": "Savor the tangy perfection of our artisanal Sourdough Delight. Crafted through natural fermentation, bread offers a crispy crust and chewy texture. Versatile and flavorful, it's perfect with butter or paired with artisanal cheeses.",
    "Img": "/images/30_1120x746.jpg"
  },
  {
    "Title": "White bread",
    "Desc": "Indulge in simplicity with our White Bread. Soft, fluffy, and versatile. Perfect for toasting or crafting your favorite sandwiches. Embrace the classic goodness with every bite.",
    "Img": "/images/32_1000x666.jpg"
  },
  {
    "Title": "Whole grain bread",
    "Desc": "Savor the wholesome goodness of our Nutty Whole Grain Bread. Packed with fiber and nutrients, it's a hearty choice for a nutritious start or a satisfying sandwich foundation.",
    "Img": "/images/33_940x626.jpg"
  },
  {
    "Title": "Rye bread",
    "Desc": "Indulge in the rich amalgamation of wholesome grains found in our Rye Bread. Its nutty, tangy profile adds to its versatility, making it an ideal canvas for various spreads or a distinctive choice for your sandwich creation.",
    "Img": "/images/29_936x624.jpg"
  }
]

const await_next_tick = async () =>{
  await nextTick();
}

onMounted(()=>{
  await_next_tick();
  let img_nodelist:NodeList | null = document.querySelectorAll('.bread_image');
  let span_nodelist: NodeList | null = document.querySelectorAll('.bread_item');

  if(span_nodelist){
    for(let s = 0; s < span_nodelist.length; ++s){
      let span_node = span_nodelist[s] as HTMLElement;
      if(span_node instanceof HTMLElement && window.innerWidth >= 1024){
        span_node.style.maxWidth = "75%"
      }
    }
  }

  if(img_nodelist){
    for(let i = 0; i < img_nodelist.length; ++i){
      let img_node = img_nodelist[i] as HTMLImageElement;
      if(img_node instanceof HTMLImageElement){
        img_node.style.opacity = '0';
        img_node.onload = () => {
          if(img_node.complete){
            img_node.style.transition = '0.3s ease-in-out'
            img_node.style.opacity = '1';
          }
        }
      }
    }
  }
})

</script>
<style lang="scss" scoped>

.breads_article{
    display: grid;
    justify-items: center;
    row-gap: 50px;
}

.bread_item{
    display: grid;
    align-items: center;
    row-gap: 25px;
    justify-items: center;
    text-align: center;
    width: 80%;
    
    >.bread_title{

    }
    >.bread_image{

    }
    >.bread_desc{
      
    }
}
.bread_image{
    width: 90%;
    height: auto;
 
}

@media only screen and (min-width: 770px){
  .breads_article{
    row-gap: 0px;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  }

  .bread_item{
    row-gap: 0px;
    grid-template-rows: 75px 1fr 1.05fr;
  }
}
@media only screen and (min-width: 1024px){
  .breads_article{
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
  .bread_item{
    grid-template-rows: 75px 1fr 1.25fr;
  }
}
</style>
<template>
  <article class="breads_article">
    <span v-for="(item, i) in breads" :key="i" class="bread_item">
        <h2 class="bread_title">{{ item['Title'] }}</h2>
        <img :src="item['Img']" alt="" class="bread_image">
        <p class="bread_desc">{{ item['Desc'] }}</p>
    </span>
  </article>
</template>

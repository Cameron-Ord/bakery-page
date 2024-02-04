<script setup lang="ts">
import { nextTick, onMounted } from 'vue';

const specials = [
  {
    "Title": "Maple Pecan Praline Twist",
    "Desc": "Embrace the flavors of fall with our Maple Pecan Praline Twist. This limited-time delight features a twisted, flaky pastry generously layered with a velvety maple glaze and studded with crunchy pecans. Every bite is a harmonious blend of warm autumn spices and the indulgent sweetness of praline, making it the perfect seasonal treat.",
    "Img": "/images/25_912x608.jpg"
  },
  {
    "Title": "Citrus Blossom Danish",
    "Desc": "Experience a burst of sunshine with our Citrus Blossom Danish. This refreshing pastry combines layers of buttery dough with a zesty citrus-infused filling, creating a delightful dance of flavors. Topped with a light citrus glaze, this Danish is a bright and invigorating choice for those craving a taste of sunshine in every bite.",
    "Img": "/images/8_1365x910.jpg"
  },
  {
    "Title": "Dark Chocolate Raspberry Swirl Croissant",
    "Desc": "Elevate your chocolate experience with our Dark Chocolate Raspberry Swirl Croissant. Indulge in the decadence of dark chocolate folded into layers of flaky croissant pastry, complemented by a luscious raspberry filling. The perfect balance of rich cocoa and tart raspberry creates a sumptuous treat for chocolate enthusiasts.",
    "Img": "/images/5_967x645.jpg"
  },
  {
    "Title": "Matcha Almond Bliss Éclair",
    "Desc": "Delight in the serene flavors of our Matcha Almond Bliss Éclair. This exquisite pastry features a light choux shell filled with a velvety matcha-infused cream and topped with toasted almond slices. The earthy notes of matcha harmonize with the nutty crunch of almonds, offering a sophisticated and blissful taste experience.",
    "Img": "/images/14_903x602.jpg"
  }
]
const await_next_tick = async () =>{
  await nextTick();
}

onMounted(()=>{
  await_next_tick();
  let img_nodelist:NodeList | null = document.querySelectorAll('.special_image');
  let span_nodelist: NodeList | null = document.querySelectorAll('.special_item');

  if(span_nodelist){
    for(let s = 0; s < span_nodelist.length; ++s){
      let span_node: Node = span_nodelist[s];
      if(span_node instanceof HTMLElement && window.innerWidth >= 1024){
        span_node.style.maxWidth = "75%"
      }
    }
  }

  if(img_nodelist){
    for(let i = 0; i < img_nodelist.length; ++i){
      let img_node: Node = img_nodelist[i];
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

.specials_article{
    display: grid;
    justify-items: center;
    row-gap: 50px;
}

.special_item{
    display: grid;
    align-items: center;
    row-gap: 25px;
    text-align: center;
    justify-items: center;   
    width: 80%;
     >.special_title{

    }
    >.special_image{

    }
    >.special_desc{

    }
}

.special_image{
    width: 90%;
    height: auto;
}

@media only screen and (min-width: 770px){
  .specials_article{
    row-gap: 0px;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  }
  .special_item{
    row-gap: 0px;
    grid-template-rows: 75px 1fr 1.25fr;
  }
}
@media only screen and (min-width: 1024px){
  .special_item{
    grid-template-rows: 75px 1fr 1.5fr;
  }
  .specials_article{
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
}

</style>
<template>
  <article class="specials_article">
    <span v-for="(item, i) in specials" :key="i" class="special_item">
        <h2 class="special_title">{{ item['Title'] }}</h2>
        <img :src="item['Img']" alt="" class="special_image">
        <p class="special_desc">{{ item['Desc'] }}</p>
    </span>
  </article>
</template>

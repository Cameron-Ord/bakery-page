<template>
  <article class="menu_article" v-for="(item, i) in breads" :key="i">
    <span class="container_span">
      <h2 class="specials_title item_h2_tag">{{ item['Title'] }}</h2>
      <p class="specials_desc item_p_tag">{{ item['Desc'] }}</p>
    </span>
  </article>
</template>

<script setup lang="ts">
import { ref, onUpdated, nextTick } from 'vue';
const index = ref(0);
const breads = [
  {
    "Title": "Maple Pecan Praline Twist",
    "Desc": "Embrace the flavors of fall with our Maple Pecan Praline Twist. This limited-time delight features a twisted, flaky pastry generously layered with a velvety maple glaze and studded with crunchy pecans. Every bite is a harmonious blend of warm autumn spices and the indulgent sweetness of praline, making it the perfect seasonal treat.",
    "Img": ""
  },
  {
    "Title": "Citrus Blossom Danish",
    "Desc": "Experience a burst of sunshine with our Citrus Blossom Danish. This refreshing pastry combines layers of buttery dough with a zesty citrus-infused filling, creating a delightful dance of flavors. Topped with a light citrus glaze, this Danish is a bright and invigorating choice for those craving a taste of sunshine in every bite.",
    "Img": ""
  },
  {
    "Title": "Dark Chocolate Raspberry Swirl Croissant",
    "Desc": "Elevate your chocolate experience with our Dark Chocolate Raspberry Swirl Croissant. Indulge in the decadence of dark chocolate folded into layers of flaky croissant pastry, complemented by a luscious raspberry filling. The perfect balance of rich cocoa and tart raspberry creates a sumptuous treat for chocolate enthusiasts.",
    "Img": ""
  },
  {
    "Title": "Matcha Almond Bliss Éclair",
    "Desc": "Delight in the serene flavors of our Matcha Almond Bliss Éclair. This exquisite pastry features a light choux shell filled with a velvety matcha-infused cream and topped with toasted almond slices. The earthy notes of matcha harmonize with the nutty crunch of almonds, offering a sophisticated and blissful taste experience.",
    "Img": ""
  }
]
onUpdated(() => {
  let bread_title: HTMLElement | null = document.querySelector('.specials_title');
  let bread_desc: HTMLElement | null = document.querySelector('.specials_desc');

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

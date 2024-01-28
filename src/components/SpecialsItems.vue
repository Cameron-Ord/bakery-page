<template>
  <article class="menu_article">
    <h2 class="specials_title item_h2_tag">{{ breads[index]['Title'] }}</h2>
    <p class="specials_desc item_p_tag">{{ breads[index]['Desc'] }}</p>
    <span class="control_span">
      <img @click="index_dwn($event)" src="/svgs/larrow.svg" alt="">
      <img @click="index_up($event)" src="/svgs/rarrow.svg" alt="">
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
const index_up = (event: any) => {

  let bread_title: HTMLElement | null = document.querySelector('.specials_title');
  let bread_desc: HTMLElement | null = document.querySelector('.specials_desc');

  if (bread_title !== null && bread_desc !== null) {
    remove_visibility(bread_title, bread_desc)
    on_click_effect(event.target);
  } else {
    return
  }

  setTimeout(() => {
    if (event.type === "click") {
      let index_val = index.value;
      index_val++;
      if (index_val >= breads.length) {
        index_val = 0;
      }
      index.value = index_val
    }

  }, 300);
}

const on_click_effect = (event: any) => {
  event.style['transition'] = '0.3s ease-in-out'
  event.style['width'] = '44px';
  setTimeout(() => {
    event.style['width'] = '';
  }, 300)
}


const index_dwn = (event: any) => {
  let bread_title: HTMLElement | null = document.querySelector('.specials_title');
  let bread_desc: HTMLElement | null = document.querySelector('.specials_desc');

  if (bread_title !== null && bread_desc !== null) {
    remove_visibility(bread_title, bread_desc)
    on_click_effect(event.target);
  } else {
    return
  }

  setTimeout(() => {
    if (event.type === "click") {
      let index_val = index.value;
      index_val--;
      if (index_val < 0) {
        index_val = breads.length - 1;
      }
      index.value = index_val
    }
  }, 300);
}

const remove_visibility = (title: HTMLElement, desc: HTMLElement) => {
  title.style.opacity = '0';
  desc.style.opacity = '0';
}

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
  width: 90%;
  text-align: start;
  row-gap: 35px;


  >.specials_title {
    transition: 0.3s ease-in-out;
  }

  >.specials_desc {
    transition: 0.3s ease-in-out;
  }

  >.control_span {
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    justify-content: space-between;
    justify-self: center;

    >img {
      width: 40px;
    }
  }
}
</style>

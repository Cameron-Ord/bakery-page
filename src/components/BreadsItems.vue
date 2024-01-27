<template>
  <article class="menu_article">
    <h2 class="breads_title item_h2_tag">{{ breads[index]['Title'] }}</h2>
    <p class="breads_desc item_p_tag">{{ breads[index]['Desc'] }}</p>
    <span class="control_span">
      <img @click="index_dwn" src="/svgs/larrow.svg" alt="">
      <img @click="index_up" src="/svgs/rarrow.svg" alt="">
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

const index_up = (event: any) => {
  let bread_title: HTMLElement | null = document.querySelector('.breads_title');
  let bread_desc: HTMLElement | null = document.querySelector('.breads_desc');

  if (bread_title !== null && bread_desc !== null) {
    remove_visibility(bread_title, bread_desc)
    on_click_effect(event.target);
  } else {
    console.log('elements do not exist');
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
  let bread_title: HTMLElement | null = document.querySelector('.breads_title');
  let bread_desc: HTMLElement | null = document.querySelector('.breads_desc');
  if (bread_title !== null && bread_desc !== null) {
    remove_visibility(bread_title, bread_desc)
    on_click_effect(event.target);
  } else {
    console.log('elements do not exist');
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
  width: 90%;
  text-align: start;
  row-gap: 35px;

  >h2 {

    transition: 0.3s ease-in-out;
  }

  >p {

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

<template>
  <article class="menu_article">
    <h2 class="pastries_title item_h2_tag">{{ breads[index]['Title'] }}</h2>
    <p class="pastries_desc item_p_tag">{{ breads[index]['Desc'] }}</p>
    <span class="control_span">
      <img @click="index_dwn($event)" src="/svgs/larrow.svg" alt="">
      <img @click="index_up($event)" src="/svgs/rarrow.svg" alt="">
    </span>
  </article>
</template>

<script setup lang="ts">
import { nextTick, onUpdated, ref } from 'vue';
const index = ref(0);
const breads = [
  {
    "Title": "Croissant",
    "Desc": "Flaky layers of buttery goodness define our classic croissants. Handcrafted to perfection, these French pastries boast a golden-brown exterior that gives way to a light, airy interior. Whether enjoyed plain, filled with chocolate, or layered with almond paste, our croissants are a testament to the art of laminated dough.",
    "Img": ""
  },
  {
    "Title": "Eclair",
    "Desc": "Indulge in the elegance of our éclairs, where delicate choux pastry meets a rich, velvety filling. Each éclair is a work of art, adorned with a glossy layer of icing that adds a touch of sweetness to every bite. From traditional vanilla to inventive flavors like pistachio or passion fruit, these elongated pastries offer a symphony of textures and tastes.",
    "Img": ""
  },
  {
    "Title": "Danish Pastry",
    "Desc": "Our Danish pastries are a celebration of flaky, buttery layers enveloping delectable fillings. Choose from a variety of fruit compotes, custards, or nuts nestled within the tender folds of the pastry. With a delicate glaze or dusting of powdered sugar, these pastries are a delightful combination of simplicity and sophistication.",
    "Img": ""
  },
  {
    "Title": "Palmier",
    "Desc": "Crisp, caramelized layers of puff pastry create the enchanting spiral of our palmiers. Also known as elephant ears, these sweet, palm-shaped treats offer a satisfying crunch with every bite. The simplicity of sugar and butter allows the subtleties of the pastry's texture to shine, making them a timeless favorite.",
    "Img": ""
  },
  {
    "Title": "Cannoli",
    "Desc": "Transport your taste buds to Italy with our cannoli, a Sicilian delight that combines a crispy shell with a luscious ricotta-based filling. Each cannoli is carefully piped and often adorned with chopped pistachios, chocolate chips, or candied fruit. These handheld treasures encapsulate the perfect balance of sweetness and richness.",
    "Img": ""
  }
]

const index_up = (event: any) => {

  let bread_title: HTMLElement | null = document.querySelector('.pastries_title');
  let bread_desc: HTMLElement | null = document.querySelector('.pastries_desc');

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
  let bread_title: HTMLElement | null = document.querySelector('.pastries_title');
  let bread_desc: HTMLElement | null = document.querySelector('.pastries_desc');

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
  let bread_title: HTMLElement | null = document.querySelector('.pastries_title');
  let bread_desc: HTMLElement | null = document.querySelector('.pastries_desc');

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


  >.pastries_title {
    transition: 0.3s ease-in-out;
  }

  >.pastries_desc {
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

<template>
  <div class="ingredients_desc">
    <h3 class="about_h3_tag">Our Ingredients</h3>
    <p class="about_init_p_tag">At Freshest Bakery, we believe in the art of baking with passion and purpose. Every
      delightful
      creation that emerges from our ovens is a testament to our commitment to using only the finest, freshest
      ingredients. We take pride in sourcing premium components that not only elevate the taste of our treats but also
      reflect our dedication to quality.</p>
    <h4 class="about_h4_tag">{{ sub_dir_content[index]['title'] }}</h4>
    <p class="about_p_tag">{{ sub_dir_content[index]['content'] }}</p>
    <span class="ingredients_ctrl_span">
      <img src="/svgs/larrow.svg" @click="index_down($event)" alt="">
      <img src="/svgs/rarrow.svg" @click="index_up($event)" alt="">
    </span>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, onUpdated, ref } from 'vue';
const sub_dir_content = [
  { "title": "Locally Sourced Goodness", "content": "We are deeply rooted in our community, and that's why we source many of our ingredients locally. From farm-fresh eggs to handpicked seasonal fruits, our commitment to supporting local farmers ensures that each bite is infused with the authentic flavors of our region." },
  { "title": "Pure and Wholesome", "content": "Our commitment to quality extends to the purity of our ingredients. We carefully select unbleached flours, pure sugars, and premium dairy products to create a foundation of wholesome goodness. We believe that using the best ingredients not only enhances the taste of our baked goods but also contributes to a healthier indulgence." },
  { "title": "Artisanal Excellence", "content": "Craftsmanship is at the heart of our bakery, and it begins with the ingredients we choose. Our skilled bakers work with precision and passion, transforming each carefully chosen component into a masterpiece of flavor. Whether it's the richness of Belgian chocolate or the delicate notes of Madagascar vanilla, our artisanal approach ensures an unparalleled taste experience." },
  { "title": "Thoughtfully Curated Selection", "content": "From gluten-free options to vegan delights, we understand that our customers have diverse preferences. That's why we thoughtfully curate our ingredient list to accommodate various dietary needs without compromising on taste. Everyone deserves a moment of joy, and we aim to provide it through our thoughtfully crafted, inclusive selections. At Freshest Bakery, we believe that great ingredients make great treats. Join us in savoring the difference that quality and care can make in every bite. Your journey into the world of exceptional flavors begins here." }
]
const index: any = ref(0)



const index_up = (event: any) => {
  let ingred_title: HTMLElement | null = document.querySelector('.about_h4_tag');
  let ingred_desc: NodeList | null = document.querySelectorAll('.about_p_tag');

  if (ingred_title !== null && ingred_desc !== null) {
    remove_visibility(ingred_title, ingred_desc);
    on_click_effect(event.target);
    go_to_target(ingred_title);
  } else {
    return
  }

  setTimeout(() => {
    if (event.type === "click") {
      let index_val = index.value;
      index_val++;
      if (index_val >= sub_dir_content.length) {
        index_val = 0;
      }
      index.value = index_val;
    }
  }, 300);

}
const remove_visibility = (title: HTMLElement, desc: NodeList) => {
  title.style.transition = '0.3s ease-in-out';
  title.style.opacity = '0';
  for (let n = 0; n < desc.length; ++n) {
    let node: Node = desc[n];
    if (node instanceof HTMLElement) {
      node.style.transition = '0.3s ease-in-out';
      node.style.opacity = '0';
    }
  }
}

const go_to_target = (title: HTMLElement) => {
  let element_rect = undefined;
  let element_y = undefined;
  const offset = 50;
  element_rect = title.getBoundingClientRect();
  element_y = (window.scrollY + element_rect.top) - offset;
  window.scrollTo({
    top: element_y,
    behavior: 'smooth',
  })
}

const index_down = (event: any) => {
  let ingred_title: HTMLElement | null = document.querySelector('.about_h4_tag');
  let ingred_desc: NodeList | null = document.querySelectorAll('.about_p_tag');
  if (ingred_title !== null && ingred_desc !== null) {
    remove_visibility(ingred_title, ingred_desc);
    on_click_effect(event.target);
    go_to_target(ingred_title);
  } else {
    return
  }
  setTimeout(() => {
    if (event.type === "click") {
      let index_val = index.value;
      index_val--;
      if (index_val < 0) {
        index_val = sub_dir_content.length - 1;
      }
      index.value = index_val;
    }
  }, 300)
}

const on_click_effect = (event: any) => {
  event.style['transition'] = '0.3s ease-in-out';
  event.style['width'] = '44px';
  setTimeout(() => {
    event.style['width'] = '';
  }, 300);
}

onUpdated(() => {
  let ingred_title: HTMLElement | null = document.querySelector('.about_h4_tag');
  let ingred_desc: NodeList | null = document.querySelectorAll('.about_p_tag');
  nextTick(() => {
    if (ingred_title !== null) {
      ingred_title.style.transition = '0.3s ease-in-out'
      ingred_title.style.opacity = '1';
    }
    setTimeout(() => {
      if (ingred_desc !== null) {
        for (let i = 0; i < ingred_desc.length; ++i) {
          let node: Node = ingred_desc[i]
          if (node instanceof HTMLElement) {
            node.style.transition = '0.3s ease-in-out';
            node.style.opacity = '1';
          }
        }
      }
    }, 150)
  })

})

onBeforeUnmount(() => {
  let header_div: HTMLElement | null = document.querySelector('.ingredients_desc');
  if (header_div !== null) {
    header_div.style.opacity = '0';
  }
})

onMounted(() => {
  let header_div: HTMLElement | null = document.querySelector('.ingredients_desc');
  nextTick(() => {
    setTimeout(() => {
      if (header_div !== null) {
        header_div.style.opacity = '1';
      }
    }, 10);
  })
}
)
</script>

<style lang="scss" scoped>
.ingredients_desc {
  opacity: 0;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-wrap: wrap;
  text-align: start;
  justify-content: start;
  row-gap: 25px;

  >.ingredients_ctrl_span {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 75%;

    >img {
      width: 40px;
    }

  }

  >p {
    padding-top: 5px;
    padding-bottom: 5px;

  }

  >h3 {
    padding-top: 5px;
    padding-bottom: 5px;

  }
}
</style>

<template>
  <div class="history_header">
    
    <!--MOBILE-->
    
    <div class="about_divider">
      <h3 class="about_h3_tag">Our History</h3>
      <p class="about_init_p_tag">Welcome to the sweet tale of Freshest Bakery. Born out of a shared love for baking and a
        commitment to creating moments of joy, our journey began in 1997. What started as a cozy kitchen experiment soon
        evolved into a thriving haven for indulgence and community.</p>
    </div>
    <div class="about_divider">
      <h4 class="about_h4_tag">{{ sub_dir_content[index]['title'] }}</h4>
      <p class="about_p_tag">{{ sub_dir_content[index]['content'] }}</p>
      <span class="history_crtl_span">
        <img src="/svgs/larrow.svg" alt="" @click="index_down($event)">
        <img src="/svgs/rarrow.svg" alt="" @click="index_up($event)">
      </span>
    </div>

    <!--DESKTOP-->
    
    <div class="about_divider_desktop">
      <div class="init_seperator">
        <h3 class="about_h3_tag">Our History</h3>
        <p class="about_init_p_tag">Welcome to the sweet tale of Freshest Bakery. Born out of a shared love for baking and a
        commitment to creating moments of joy, our journey began in 1997. What started as a cozy kitchen experiment soon
        evolved into a thriving haven for indulgence and community.</p>
      </div>
      <div class="seperator" v-for="(item, i) in sub_dir_content" :key="i">
        <h4 class="about_h4_tag">{{ item['title'] }}</h4>
        <p class="about_p_tag">{{ item['content'] }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, onMounted, onUpdated } from 'vue';
const index: any = ref(0);
const sub_dir_content = [
  { "title": "The Early Days", "content": "In the heart of Edmonton, our founders, John and Cameron, embarked on a mission to bring artisanal delights to the neighborhood. Armed with family recipes and a passion for perfection, they kneaded, mixed, and baked their way into the hearts of locals." },
  { "title": "From Kitchen to Cornerstone", "content": "As word of mouth spread and the aroma of freshly baked treats wafted through the air, our humble bakery grew. In 1999, we opened our first storefront, becoming a cornerstone of the community. Our commitment to quality and warm hospitality made us a go-to destination for those seeking a slice of happiness." },
  { "title": "Innovation and Tradition", "content": "Through the years, Freshest Bakery has continued to evolve, blending innovation with cherished traditions. Our menu showcases a harmonious fusion of timeless favorites and exciting new creations, all crafted with the same dedication to excellence that has defined us from the beginning." },
  { "title": "A Sweet Future", "content": "As we look to the future, our commitment remains unwavering—to craft moments of delight and connection through the art of baking. We invite you to be part of our story, to savor the flavors of tradition, and to create new memories with every delectable bite. Thank you for being part of our history, present, and future at Freshest Bakery." },
]
const index_up = (event: any) => {
  let hst_title: HTMLElement | null = document.querySelector('.about_h4_tag');
  let hst_desc: NodeList | null = document.querySelectorAll('.about_p_tag');

  if (hst_title !== null && hst_desc !== null) {
    remove_visibility(hst_title, hst_desc);
    on_click_effect(event.target);
    go_to_target(hst_title);
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
      index.value = index_val
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

const on_click_effect = (event: any) => {
  event.style.transition = '0.3s ease-in-out';
  event.style.width = '44px';
  setTimeout(() => {
    event.style.width = '';
  }, 300);

}

const go_to_target = (title: HTMLElement) => {
  if (window.innerWidth < 770) {
    let element_rect: DOMRect | undefined = undefined;
    let element_y: number | undefined = undefined;
    const offset: number = 50;
    element_rect = title.getBoundingClientRect();
    element_y = (window.scrollY + element_rect.top) - offset;

    window.scrollTo({
      top: element_y,
      behavior: 'smooth',
    })
  }
}

const index_down = (event: any) => {
  let hst_title: HTMLElement | null = document.querySelector('.about_h4_tag');
  let hst_desc: NodeList | null = document.querySelectorAll('.about_p_tag');
  if (hst_title !== null && hst_desc !== null) {
    remove_visibility(hst_title, hst_desc);
    on_click_effect(event.target);
    go_to_target(hst_title);
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

onUpdated(() => {
  let hst_title: HTMLElement | null = document.querySelector('.about_h4_tag');
  let hst_desc: NodeList | null = document.querySelectorAll('.about_p_tag');
  nextTick(() => {
    if (hst_title !== null) {
      hst_title.style.transition = '0.3s ease-in-out';
      hst_title.style.opacity = '1';
    }
    setTimeout(() => {
      if (hst_desc !== null) {
        for (let i = 0; i < hst_desc.length; ++i) {
          let node: Node = hst_desc[i];
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
  let header_div: HTMLElement | null = document.querySelector('.history_header');
  if (header_div !== null) {
    header_div.style.opacity = '0';
  }
})

onMounted(() => {
  let header_div: HTMLElement | null = document.querySelector('.history_header');
  nextTick(() => {
    setTimeout(() => {
      if (header_div !== null) {
        header_div.style.opacity = '1';
      }
    }, 10)
  })
}
)
</script>

<style lang="scss" scoped>
.history_header {
  opacity: 0;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-wrap: wrap;
  text-align: start;
  row-gap: 25px;
  >.about_divider_desktop{
    display: none;
  }
  >.about_divider {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 25px;
    justify-content: flex-start;
    >h3 {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    >p {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    >.history_crtl_span {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 75%;

      >img {
        width: 40px;
      }
    }
  }
}

@media only screen and (min-width: 770px) {
  .history_header {
    >.about_divider {
      >.history_crtl_span {
        >img {}
      }

      >h3 {}

      >p {}
    }
  }
}

@media only screen and (min-width: 1024px) {
  .history_header {
    
    >.about_divider_desktop{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
      row-gap: 50px;
      >.init_seperator{
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        width: 80%;
      }

      >.seperator{
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        width: 80%;
      }
    }
    >.about_divider {
        display: none;
    }
  }
}
</style>

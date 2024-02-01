<script setup lang="ts">
import {onBeforeMount} from 'vue'
const { display_about_selection } = defineProps(['display_about_selection'])
const sub_dir_content: Array<{ title: string, content: string }> = [
  { "title": "The Early Days", "content": "In the heart of Edmonton, our founders, John and Cameron, embarked on a mission to bring artisanal delights to the neighborhood. Armed with family recipes and a passion for perfection, they kneaded, mixed, and baked their way into the hearts of locals." },
  { "title": "From Kitchen to Cornerstone", "content": "As word of mouth spread and the aroma of freshly baked treats wafted through the air, our humble bakery grew. In 1999, we opened our first storefront, becoming a cornerstone of the community. Our commitment to quality and warm hospitality made us a go-to destination for those seeking a slice of happiness." },
  { "title": "Innovation and Tradition", "content": "Through the years, Freshest Bakery has continued to evolve, blending innovation with cherished traditions. Our menu showcases a harmonious fusion of timeless favorites and exciting new creations, all crafted with the same dedication to excellence that has defined us from the beginning." },
  { "title": "A Sweet Future", "content": "As we look to the future, our commitment remains unwavering—to craft moments of delight and connection through the art of baking. We invite you to be part of our story, to savor the flavors of tradition, and to create new memories with every delectable bite. Thank you for being part of our history, present, and future at Freshest Bakery." },
]


const get_element_y = (target_element: HTMLElement) => {
  const e_rect: DOMRect = target_element.getBoundingClientRect();
  const e_pos: number = (window.scrollY + e_rect.top) - 25;
  return e_pos;
}


const define_element = (target_element: EventTarget | null) => {
  if(target_element instanceof HTMLElement){
    if(window.innerWidth < 1024){
      const parent:HTMLElement | null = target_element.parentElement;
      let siblings: Array<Element | null> = [];
      if(parent !== null){
        siblings = Array.from(parent.children);
        for(let i = 0; i < siblings.length; ++i){
          const element: Element | null = siblings[i];
          if(element !== null && element.hasAttribute('image_attr')){
            return element;
          }
        }
      }
    } else {
      const element: Element | null = document.querySelector('.about_teaser');
      if(element !== null){
        return element;
      }
    }
    return undefined;
  } 
  return undefined;
}

const send_choice_data = (target_element: EventTarget | null) =>{
  
  let element_y: number | undefined;
  const html_element: Element | undefined = define_element(target_element);
  if(html_element instanceof HTMLElement){
    element_y = get_element_y(html_element);
  }
  if(element_y !== undefined){
    display_about_selection(sub_dir_content, element_y);
  } else {
    display_about_selection(sub_dir_content, undefined);
  }
}

onBeforeMount(()=>{

})

</script>
<style lang="scss" scoped>

.about_history{
  display: grid;
  justify-items: center;

}


.text_span{
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: start;
  row-gap: 10px;
  >.about_image{
    width: 90%;
    height: 300px;
    object-fit: cover; 
  }

}



@media only screen and (min-width: 770px) {
  .about_image{

  }
}

@media only screen and (min-width: 1024px) {
  .about_image{
    height: 350px;
  }

}
</style>
<template>
  <article class="about_history">
    <span class="text_span">
      <img src="/images/about1.jpg" alt="" image_attr class="about_image">
      <h2 class="history_header">Our History</h2>
      <h3 @click="send_choice_data($event.target)">View</h3>
    </span>
  </article>
</template>
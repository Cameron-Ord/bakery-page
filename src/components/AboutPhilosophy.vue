<script setup lang="ts">
import {nextTick, onUnmounted, onBeforeMount, onMounted, ref, onUpdated, watch, watchEffect, onActivated} from 'vue'
const { display_about_selection } = defineProps(['display_about_selection'])

const sub_dir_content = [
  { "title": "Passion for Craft", "content": "At Freshest Bakery, our philosophy is grounded in a deep passion for the craft of baking. We believe that exceptional ingredients, careful precision, and a touch of creativity are the key ingredients for crafting extraordinary treats. Each creation is a labor of love, a symphony of flavors that celebrates the artistry and joy inherent in the world of baking." },
  { "title": "Commitment to Quality", "content": "Quality is the cornerstone of our philosophy. From the moment we select our ingredients to the final presentation of our baked goods, we adhere to the highest standards. We believe that every bite should be a moment of pure pleasure, a testament to our commitment to delivering excellence in every aspect of our craft." },
  { "title": "Creativity Unleashed", "content": "Baking is an art form, and our philosophy embraces the freedom of creativity. Our talented bakers are encouraged to experiment, innovate, and push the boundaries of traditional flavors. This spirit of exploration ensures that our menu is always infused with fresh ideas and delightful surprises, offering our customers an ever-evolving experience." },
  { "title": "Harmony of Tradition and Innovation", "content": "At Freshest Bakery, we believe in striking a harmonious balance between tradition and innovation. Our philosophy embraces the time-honored techniques that have defined the art of baking for generations, while also welcoming the spirit of innovation that keeps our offerings exciting and relevant. We cherish the classics that have stood the test of time and combine them with a fresh perspective, ensuring that every visit to our bakery is a journey through both the familiar and the wonderfully unexpected." },
]
const mounted = ref(false);

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

onBeforeMount(() => {

})



onUnmounted(() => {

})

onMounted(() => {
})

onActivated(()=>{

})

onUpdated(() => {

})

</script>
<style lang="scss" scoped>

.about_philo{
  display: grid;
  justify-items: center;

}

.about_philo.mounted{

}

.text_span{
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
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
  <article class="about_philo" :class="{'mounted': mounted}">
    <span class="text_span">
      <img src="/images/about3.jpg" alt="" image_attr class="about_image">
      <h2>Our Philosophy</h2>
      <h3 @click="send_choice_data($event.target)">View</h3>
    </span>
  </article>
</template>
<script setup lang="ts">
import {ref, onBeforeMount} from 'vue'
const index: any = ref(0);
const sub_dir_content = [
  { "title": "The Early Days", "content": "In the heart of Edmonton, our founders, John and Cameron, embarked on a mission to bring artisanal delights to the neighborhood. Armed with family recipes and a passion for perfection, they kneaded, mixed, and baked their way into the hearts of locals." },
  { "title": "From Kitchen to Cornerstone", "content": "As word of mouth spread and the aroma of freshly baked treats wafted through the air, our humble bakery grew. In 1999, we opened our first storefront, becoming a cornerstone of the community. Our commitment to quality and warm hospitality made us a go-to destination for those seeking a slice of happiness." },
  { "title": "Innovation and Tradition", "content": "Through the years, Freshest Bakery has continued to evolve, blending innovation with cherished traditions. Our menu showcases a harmonious fusion of timeless favorites and exciting new creations, all crafted with the same dedication to excellence that has defined us from the beginning." },
  { "title": "A Sweet Future", "content": "As we look to the future, our commitment remains unwavering—to craft moments of delight and connection through the art of baking. We invite you to be part of our story, to savor the flavors of tradition, and to create new memories with every delectable bite. Thank you for being part of our history, present, and future at Freshest Bakery." },
]

const button_array: any = ref([])
const selection: any = ref(sub_dir_content[index.value]['title'])

const pop_array = () => {
  button_array.value.pop();
  if(button_array.value.length > 0){
    pop_array();
  }
}
const create_button_array = () => {
  pop_array();
  for(let i = 0; i < sub_dir_content.length; ++i){
    const title = sub_dir_content[i]['title']
    if(selection.value !== title){
      button_array.value.push(sub_dir_content[i])
    }
  }
}
const get_item_index = (event: any) => {
  const title = event.target.innerText;
  let item_index: number | undefined;
  for(let i = 0; i < sub_dir_content.length; ++i){
    if(sub_dir_content[i]['title'] === title){
      item_index = (i);
      break;
    }
  }
  if(item_index !== undefined){
    index.value = item_index;
    selection.value = sub_dir_content[index.value]['title'];
    create_button_array();
  }
}

onBeforeMount(() => {
  create_button_array();
})

</script>
<style lang="scss" scoped>

.about_history{
  display: grid;
  justify-items: center;
  row-gap: 25px;
}

.image_span{
  display: flex;
  align-items: start;
  justify-content: start;
  width: 80%;
}

.text_span{
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  row-gap: 15px;

  >.content_div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    row-gap: 10px;
  }

  >.history_controls_div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    row-gap: 10px;
    >.controls_tag{

    }
  }
}

.about_image{
  width: 80%;
  height: auto;
}
</style>
<template>
  <article class="about_history">
    <span class="image_span">
      <img src="/images/about1.jpg" alt="" class="about_image">
    </span>
    <span class="text_span">
      <div class="content_div">
        <h2 class="history_header">Our History</h2>
        <h3 class="hst_title">{{ sub_dir_content[index]['title'] }}</h3>
        <p class="hst_desc">{{ sub_dir_content[index]['content'] }}</p>
      </div>
      <div class="history_controls_div">
        <h4 class="controls_tag" v-for="(item, i) in button_array" :key="i" @click="get_item_index($event)">{{ item['title'] }}</h4>
      </div>
    </span>
  </article>
</template>
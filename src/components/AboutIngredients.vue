<script setup lang="ts">
import {ref, onBeforeMount, watch} from 'vue'
const index: any = ref(0);
const sub_dir_content = [
  { "title": "Locally Sourced Goodness", "content": "We are deeply rooted in our community, and that's why we source many of our ingredients locally. From farm-fresh eggs to handpicked seasonal fruits, our commitment to supporting local farmers ensures that each bite is infused with the authentic flavors of our region." },
  { "title": "Pure and Wholesome", "content": "Our commitment to quality extends to the purity of our ingredients. We carefully select unbleached flours, pure sugars, and premium dairy products to create a foundation of wholesome goodness. We believe that using the best ingredients not only enhances the taste of our baked goods but also contributes to a healthier indulgence." },
  { "title": "Artisanal Excellence", "content": "Craftsmanship is at the heart of our bakery, and it begins with the ingredients we choose. Our skilled bakers work with precision and passion, transforming each carefully chosen component into a masterpiece of flavor. Whether it's the richness of Belgian chocolate or the delicate notes of Madagascar vanilla, our artisanal approach ensures an unparalleled taste experience." },
  { "title": "Thoughtfully Curated Selection", "content": "From gluten-free options to vegan delights, we understand that our customers have diverse preferences. That's why we thoughtfully curate our ingredient list to accommodate various dietary needs without compromising on taste. Everyone deserves a moment of joy, and we aim to provide it through our thoughtfully crafted, inclusive selections. At Freshest Bakery, we believe that great ingredients make great treats. Join us in savoring the difference that quality and care can make in every bite. Your journey into the world of exceptional flavors begins here." }
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

.about_ingred{
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

  >.ingred_controls_div{
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
  <article class="about_ingred">
    <span class="image_span">
      <img src="/images/about2.jpg" alt="" class="about_image">
    </span>
    <span class="text_span">
      <div class="content_div">
        <h2>Our Ingredients</h2>
        <h3>{{ sub_dir_content[index]['title'] }}</h3>
        <p>{{ sub_dir_content[index]['content'] }}</p>
      </div>
      <div class="ingred_controls_div">
        <h4 class="controls_tag" v-for="(item, i) in button_array" :key="i" @click="get_item_index($event)">{{ item['title'] }}</h4>
      </div>
    </span>
  </article>
</template>
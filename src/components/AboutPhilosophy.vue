<script setup lang="ts">
import {ref, onBeforeMount} from 'vue'
const index: any = ref(0);
const sub_dir_content = [
  { "title": "Passion for Craft", "content": "At Freshest Bakery, our philosophy is grounded in a deep passion for the craft of baking. We believe that exceptional ingredients, careful precision, and a touch of creativity are the key ingredients for crafting extraordinary treats. Each creation is a labor of love, a symphony of flavors that celebrates the artistry and joy inherent in the world of baking." },
  { "title": "Commitment to Quality", "content": "Quality is the cornerstone of our philosophy. From the moment we select our ingredients to the final presentation of our baked goods, we adhere to the highest standards. We believe that every bite should be a moment of pure pleasure, a testament to our commitment to delivering excellence in every aspect of our craft." },
  { "title": "Creativity Unleashed", "content": "Baking is an art form, and our philosophy embraces the freedom of creativity. Our talented bakers are encouraged to experiment, innovate, and push the boundaries of traditional flavors. This spirit of exploration ensures that our menu is always infused with fresh ideas and delightful surprises, offering our customers an ever-evolving experience." },
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


.about_philo{
  display: grid;
  justify-items: center;
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
  align-items: center;
  align-items: start;
  justify-content: start;
  >.content_div{

  }

  >.philo_controls_div{
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
  <article class="about_philo">
    <span class="image_span">
      <img src="/images/about3.jpg" alt="" class="about_image">
    </span>
    <span class="text_span">
      <div class="content_div">
        <h2>Our Philosophy</h2>
        <h3>{{ sub_dir_content[index]['title'] }}</h3>
        <p>{{ sub_dir_content[index]['content'] }}</p>
      </div>
      <div class="philo_controls_div">
        <h4 class="philo_controls_div" v-for="(item, i) in button_array" :key="i" @click="get_item_index($event)">{{ item['title'] }}</h4>
      </div>
    </span>
  </article>
</template>
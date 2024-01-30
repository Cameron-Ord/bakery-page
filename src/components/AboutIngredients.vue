<script setup lang="ts">
import {onBeforeMount} from 'vue'
const { display_about_selection } = defineProps(['display_about_selection'])

const sub_dir_content = [
  { "title": "Locally Sourced Goodness", "content": "We are deeply rooted in our community, and that's why we source many of our ingredients locally. From farm-fresh eggs to handpicked seasonal fruits, our commitment to supporting local farmers ensures that each bite is infused with the authentic flavors of our region." },
  { "title": "Pure and Wholesome", "content": "Our commitment to quality extends to the purity of our ingredients. We carefully select unbleached flours, pure sugars, and premium dairy products to create a foundation of wholesome goodness. We believe that using the best ingredients not only enhances the taste of our baked goods but also contributes to a healthier indulgence." },
  { "title": "Artisanal Excellence", "content": "Craftsmanship is at the heart of our bakery, and it begins with the ingredients we choose. Our skilled bakers work with precision and passion, transforming each carefully chosen component into a masterpiece of flavor. Whether it's the richness of Belgian chocolate or the delicate notes of Madagascar vanilla, our artisanal approach ensures an unparalleled taste experience." },
  { "title": "Thoughtfully Curated Selection", "content": "From gluten-free options to vegan delights, we understand that our customers have diverse preferences. That's why we thoughtfully curate our ingredient list to accommodate various dietary needs without compromising on taste. Everyone deserves a moment of joy, and we aim to provide it through our thoughtfully crafted, inclusive selections. At Freshest Bakery, we believe that great ingredients make great treats. Join us in savoring the difference that quality and care can make in every bite. Your journey into the world of exceptional flavors begins here." }
]
const send_choice_data = () =>{
  display_about_selection(sub_dir_content)
}

onBeforeMount(() => {

})

</script>
<style lang="scss" scoped>
.about_ingred{
  display: grid;
  justify-items: center;
}



.text_span{
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  row-gap: 25px;
  >.content_div{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    row-gap: 10px;
  }
  >.about_image{
      width: 100%;
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
  .ingred_tag{
    letter-spacing: 0.5px;
  }
}

</style>
<template>
  <article class="about_ingred">
    <span class="text_span">
      <img src="/images/about2.jpg" alt="" class="about_image">
      <div class="content_div">
        <h2>Our Ingredients</h2>
        <h3 @click="send_choice_data">View</h3>
      </div>
    </span>
  </article>
</template>
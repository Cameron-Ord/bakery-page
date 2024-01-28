<script setup lang="ts">
const breads = [
  {
    "Title": "Sourdough",
    "Desc": "Savor the tangy perfection of our artisanal Sourdough Delight. Crafted through natural fermentation, bread offers a crispy crust and chewy texture. Versatile and flavorful, it's perfect with butter or paired with artisanal cheeses.",
    "Img": "/images/example4.jpg"
  },
  {
    "Title": "White bread",
    "Desc": "Indulge in simplicity with our White Bread. Soft, fluffy, and versatile. Perfect for toasting or crafting your favorite sandwiches. Embrace the classic goodness with every bite.",
    "Img": "/images/example4.jpg"
  },
  {
    "Title": "Whole grain bread",
    "Desc": "Savor the wholesome goodness of our Nutty Whole Grain Bread. Packed with fiber and nutrients, it's a hearty choice for a nutritious start or a satisfying sandwich foundation.",
    "Img": "/images/example4.jpg"
  },
  {
    "Title": "Rye bread",
    "Desc": "Indulge in the rich amalgamation of wholesome grains found in our Rye Bread. Its nutty, tangy profile adds to its versatility, making it an ideal canvas for various spreads or a distinctive choice for your sandwich creation.",
    "Img": "/images/example4.jpg"
  }
]

</script>
<style lang="scss" scoped>
.bread_image{
    width: 60%;
    height: 60%;
}
</style>
<template>
  <article>
    <span v-for="(item, i) in breads" :key="i">
        <h2>{{ item['Title'] }}</h2>
        <img :src="item['Img']" alt="" class="bread_image">
        <p>{{ item['Desc'] }}</p>
    </span>
  </article>
</template>
<script setup lang="ts">
const breads = [
  {
    "Title": "Sourdough",
    "Desc": "Savor the tangy perfection of our artisanal Sourdough Delight. Crafted through natural fermentation, bread offers a crispy crust and chewy texture. Versatile and flavorful, it's perfect with butter or paired with artisanal cheeses.",
    "Img": "/images/sourdough.jpg"
  },
  {
    "Title": "White bread",
    "Desc": "Indulge in simplicity with our White Bread. Soft, fluffy, and versatile. Perfect for toasting or crafting your favorite sandwiches. Embrace the classic goodness with every bite.",
    "Img": "/images/white.jpg"
  },
  {
    "Title": "Whole grain bread",
    "Desc": "Savor the wholesome goodness of our Nutty Whole Grain Bread. Packed with fiber and nutrients, it's a hearty choice for a nutritious start or a satisfying sandwich foundation.",
    "Img": "/images/wholewheat.jpg"
  },
  {
    "Title": "Rye bread",
    "Desc": "Indulge in the rich amalgamation of wholesome grains found in our Rye Bread. Its nutty, tangy profile adds to its versatility, making it an ideal canvas for various spreads or a distinctive choice for your sandwich creation.",
    "Img": "/images/sesame.jpg"
  }
]

</script>
<style lang="scss" scoped>

.breads_article{
    display: grid;
    justify-items: center;
    row-gap: 25px;
}

.bread_item{
    display: flex;
    align-items: center;
    row-gap: 10px;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    
    >.bread_title{

    }
    >.bread_image{

    }
    >.bread_desc{
      
    }
}
.bread_image{
    width: 100%;
    height: auto;
    object-fit: cover;
}

@media only screen and (min-width: 770px){
  .breads_article{
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  }
}
@media only screen and (min-width: 1024px){
  .breads_article{
    row-gap: 60px;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
  .bread_item{
    row-gap: 25px;
  }
}
</style>
<template>
  <article class="breads_article">
    <span v-for="(item, i) in breads" :key="i" class="bread_item">
        <h2 class="bread_title">{{ item['Title'] }}</h2>
        <img :src="item['Img']" alt="" class="bread_image">
        <p class="bread_desc">{{ item['Desc'] }}</p>
    </span>
  </article>
</template>
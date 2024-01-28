<script setup lang="ts">
const specials = [
  {
    "Title": "Maple Pecan Praline Twist",
    "Desc": "Embrace the flavors of fall with our Maple Pecan Praline Twist. This limited-time delight features a twisted, flaky pastry generously layered with a velvety maple glaze and studded with crunchy pecans. Every bite is a harmonious blend of warm autumn spices and the indulgent sweetness of praline, making it the perfect seasonal treat.",
    "Img": "/images/example4.jpg"
  },
  {
    "Title": "Citrus Blossom Danish",
    "Desc": "Experience a burst of sunshine with our Citrus Blossom Danish. This refreshing pastry combines layers of buttery dough with a zesty citrus-infused filling, creating a delightful dance of flavors. Topped with a light citrus glaze, this Danish is a bright and invigorating choice for those craving a taste of sunshine in every bite.",
    "Img": "/images/example4.jpg"
  },
  {
    "Title": "Dark Chocolate Raspberry Swirl Croissant",
    "Desc": "Elevate your chocolate experience with our Dark Chocolate Raspberry Swirl Croissant. Indulge in the decadence of dark chocolate folded into layers of flaky croissant pastry, complemented by a luscious raspberry filling. The perfect balance of rich cocoa and tart raspberry creates a sumptuous treat for chocolate enthusiasts.",
    "Img": "/images/example4.jpg"
  },
  {
    "Title": "Matcha Almond Bliss Éclair",
    "Desc": "Delight in the serene flavors of our Matcha Almond Bliss Éclair. This exquisite pastry features a light choux shell filled with a velvety matcha-infused cream and topped with toasted almond slices. The earthy notes of matcha harmonize with the nutty crunch of almonds, offering a sophisticated and blissful taste experience.",
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
    <span v-for="(item, i) in specials" :key="i">
        <h2>{{ item['Title'] }}</h2>
        <img :src="item['Img']" alt="" class="bread_image">
        <p>{{ item['Desc'] }}</p>
    </span>
  </article>
</template>
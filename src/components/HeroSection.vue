<script setup lang="ts"></script>
<style lang="scss" scoped>
.hero_article{
  display: grid;
  justify-items: center;
  row-gap: 50px;
}

.hero_intro_span{
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
  width: 80%;
  row-gap: 10px;
}
.hero_cta{
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 12.5px;
  row-gap: 10px;
  width: 80%;
}
</style>
<template>
  <article class="hero_article">
    <span class="hero_intro_span">
      <h1>Freshest Bakery</h1>
      <h2>View our menu</h2>
    </span>
    <span class="hero_cta">
      <h2>About us</h2>
      <h2>Contact us</h2>
      <h2>Locations</h2>
    </span>
  </article>
</template>
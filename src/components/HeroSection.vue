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

@media only screen and (min-width: 770px) {
  .hero_h1{
    font-size: clamp(2rem, 2vw, 3rem);
    
  }
  .hero_h2{
    font-size: clamp(1.6rem, 2vw, 2.6rem);
  }

  .hero_cta{
    column-gap: 40px;
  }
}

@media only screen and (min-width: 1024px) {
  
  .hero_h1{
    font-size: clamp(3rem, 2vw, 4rem);
    
  }
  .hero_h2{
    font-size: clamp(2rem, 2vw, 3rem);
  }

  .hero_cta{
    column-gap: 60px;
  }
}
</style>
<template>
  <article class="hero_article">
    <span class="hero_intro_span">
      <h1 class="hero_h1">Freshest Bakery</h1>
      <h2 class="hero_h2">View our menu</h2>
    </span>
    <span class="hero_cta">
      <h2 class="hero_h2">About us</h2>
      <h2 class="hero_h2">Contact us</h2>
      <h2 class="hero_h2">Locations</h2>
    </span>
  </article>
</template>
<template>
  <div class="philo_desc">
    <h3 class="about_h3_tag">Our Philosophy</h3>
    <p class="about_p_tag">At Freshest Bakery, our philosophy is simple yet profound: we believe in the alchemy of passion
      and precision in every creation. We are dedicated to the art of baking, where quality reigns supreme. From
      handpicked, premium ingredients to the artisanal touch of our bakers, we ensure that each treat is a masterpiece of
      flavor and texture.</p>
    <h4 class="about_h4_tag">Beyond Baking</h4>
    <p class="about_p_tag">Our philosophy extends beyond the confines of our ovens. We are committed to fostering a sense
      of community and sustainability. Freshest Bakery is not just a place to indulge your sweet tooth; it's a space where
      connections are formed, and memories are sweetly woven. Embracing sustainability, we strive to tread lightly on the
      Earth, incorporating eco-friendly practices into every aspect of our bakery.</p>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted } from 'vue';

onBeforeUnmount(() => {
  let header_div: HTMLElement | null = document.querySelector('.philo_desc');
  if (header_div !== null) {
    header_div.style.opacity = '0';
  }
})

onMounted(() => {
  let header_div: HTMLElement | null = document.querySelector('.philo_desc');
  nextTick(() => {
    setTimeout(() => {
      if (header_div !== null) {
        header_div.style.opacity = '1';
      }
    }, 10)
  })
}
)
</script>

<style lang="scss" scoped>
.philo_desc {
  opacity: 0;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-wrap: wrap;
  text-align: start;
  justify-content: start;
  row-gap: 10px;

  >h3 {
    padding-top: 5px;
    padding-bottom: 5px;

  }

  >p {
    padding-top: 5px;
    padding-bottom: 5px;

  }
}</style>

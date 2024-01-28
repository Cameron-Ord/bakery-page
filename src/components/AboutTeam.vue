<template>
  <div class="our_team_desc">
    <h3 class="about_h3_tag">Our Team</h3>
    <p class="about_p_tag">At Freshest Bakery, our team is the heartbeat of our kitchen, infusing every creation with
      dedication and expertise. Comprising passionate bakers, skilled pastry chefs, and warm-hearted service
      professionals, our diverse team brings a wealth of experience and a shared love for the art of baking. Together, we
      create a vibrant and collaborative environment where innovation and tradition converge to deliver the finest treats
      to our valued customers.</p>
    <h4 class="about_h4_tag">Passionate Craftsmanship</h4>
    <p class="about_p_tag">Our team is united by a common passion for craftsmanship and a commitment to excellence. From
      the meticulous hands that knead the dough to the creative minds behind our unique recipes, each member plays a
      crucial role in the symphony of flavors that defines Freshest Bakery. We take pride in our collective dedication
      to creating not just baked goods, but moments of joy and indulgence that leave a lasting impression. Get to know the
      faces behind the treats and join us in celebrating the talent, creativity, and camaraderie that make up the soul of
      Freshest Bakery.</p>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted } from 'vue';

onBeforeUnmount(() => {
  let header_div: HTMLElement | null = document.querySelector('.our_team_desc');
  if (header_div !== null) {
    header_div.style.opacity = '0';
  }
})

onMounted(() => {
  let header_div: HTMLElement | null = document.querySelector('.our_team_desc');
  nextTick(() => {
    setTimeout(() => {
      if (header_div !== null) {
        header_div.style.opacity = '1';
      }
    }, 10);
  })


  let team_image = document.querySelector('.team_image') as HTMLElement | null
  if (team_image !== null && team_image instanceof HTMLElement) {
    team_image.addEventListener('load', () => {
      show_image(team_image)
    });
  }
}
)

const show_image = (team_image: HTMLElement | null) => {
  if (team_image !== null) {
    team_image.style.opacity = '1';
  }
}





</script>

<style lang="scss" scoped>
.our_team_desc {
  opacity: 0;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-wrap: wrap;
  text-align: start;
  justify-content: start;
  row-gap: 10px;

  >p {
    padding-bottom: 5px;
    padding-top: 5px;

  }

  >h3 {
    padding-top: 5px;
    padding-bottom: 5px;

  }

  >img {
    max-height: 700px;
    min-height: 125px;
    height: auto;
    transition: 0.3s ease-in-out;
    opacity: 0;
    min-width: 75px;
    max-width: 500px;
    width: 90%;
    border-radius: 5px;
  }
}
</style>

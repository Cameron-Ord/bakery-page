<template>
  <article class="locations_desc">
    <span>
      <h3 class="about_h3_tag">Our Locations</h3>
      <p class="about_p_tag">1504 realstreet NW - Edmonton, AB</p>
      <p class="about_p_tag">1732 actualstreet NW - Calgary, AB</p>
      <p class="about_p_tag">1243 greatstreet SW - Red Deer, AB </p>
      <p class="about_p_tag">1033 astreet SE - Medicine Hat, AB</p>
    </span>
  </article>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted } from 'vue';

onBeforeUnmount(() => {
  let header_div: HTMLElement | null = document.querySelector('.locations_desc');
  if (header_div !== null) {
    header_div.style.opacity = '0';
  }
})

onMounted(() => {
  let header_div: HTMLElement | null = document.querySelector('.locations_desc');
  nextTick(() => {
    setTimeout(() => {
      if (header_div !== null) {
        header_div.style.opacity = '1';
      }
    }, 10);
  })
}
)
</script>

<style lang="scss" scoped>
.locations_desc {
  opacity: 0;
  transition: 0.3s ease-in-out;
  display: grid;
  align-items: center;
  text-align: start;
  row-gap: 35px;
  >span{
      display: flex;
      flex-direction: column;
      row-gap: 25px;
      justify-content: start;
      align-items: start;
      >h2 {
      }

      >h3{
        cursor: pointer;
      }
    }

}
</style>

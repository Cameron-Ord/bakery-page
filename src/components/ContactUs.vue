<template>
  <div class="contact_desc">
    <h3 class="about_h3_tag">Contact Us</h3>
    <p class="about_p_tag">380-543-5903</p>
    <p class="about_p_tag">realbakeryemail@outlook.com</p>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted } from 'vue';

onBeforeUnmount(() => {
  let header_div: HTMLElement | null = document.querySelector('.contact_desc');
  if (header_div !== null) {
    header_div.style.opacity = '0';
  }
})

onMounted(() => {
  let header_div: HTMLElement | null = document.querySelector('.contact_desc');
  nextTick(() => {
    setTimeout(() => {
      if (header_div !== null) {
        header_div.style.opacity = '1';
      }
    }, 10)

  });
}
)
</script>

<style lang="scss" scoped>
.contact_desc {
  opacity: 0;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: start;
  row-gap: 10px;

  >h3 {

    padding-top: 5px;
    padding-bottom: 5px;

  }

  >p {
    word-break: break-all;
    padding-top: 5px;
    padding-bottom: 5px;

  }
}
</style>

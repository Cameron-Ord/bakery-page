<template>
  <div class="contact_desc">
    <h2 class="about_h3_tag">Contact Us</h2>
    <article class="input_article">
      <input class="name_input" type="text" placeholder="your name">
      <textarea class="user_input"></textarea>
    </article>
    <h3>Submit</h3>
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
  align-items: start;
  justify-items: start;
  text-align: start;
  flex-direction: column;
  row-gap: 10px;
  width: 90%;

  >h2 {
    padding: 10px;
  }

  >h3{
    padding: 10px;
    cursor: pointer;
  }
  >.input_article {
    padding: 10px;
    display: flex;
    width: 90%;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    row-gap: 25px;

    >.name_input{
      width: 65%;
      height: 25px;
    }
    >.user_input{
      width: 75%;
      height: 100px;
    }
  }
}
</style>

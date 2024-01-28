<template>
  <article class="input_article">
    <span>
      <h2 class="about_h3_tag">Contact Us</h2>
      <input class="name_input" type="text" placeholder="your name">
      <textarea class="user_input"></textarea>
      <h3>Submit</h3>  
    </span>
  </article>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted } from 'vue';

onBeforeUnmount(() => {
  let header_div: HTMLElement | null = document.querySelector('.input_article');
  if (header_div !== null) {
    header_div.style.opacity = '0';
  }
})

onMounted(() => {
  let header_div: HTMLElement | null = document.querySelector('.input_article');
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
  .input_article {
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

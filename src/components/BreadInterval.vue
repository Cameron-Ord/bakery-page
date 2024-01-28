
<style lang="scss" scoped>
.interval_container {
  display: grid;
  align-items: center;
  justify-items: center;

  >.interval_item {
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;

    >img {
      max-width: 350px;
      height: 90%;
      object-fit: cover;
      transition: 0.3s ease-in-out;
      border-radius: 5px;
      width: 90%;
    }
  }
}

@media only screen and (min-width: 770px) {
  .interval_container {
    >.interval_item {
      >img {
        height: 80%;
        width: 80%;
        max-width: 400px;
      }
    }
  }
}
</style>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
const file_names: any = ref(["/images/example0.jpg", "/images/example1.jpg"]);
const index: any = ref(0);

const cycle_through = () => {
  let temporary_index: number = index.value;
  const array_len: number = file_names.value.length;
  temporary_index++;
  if (temporary_index >= array_len) {
    temporary_index = 0;
  }
  index.value = temporary_index;
}


onUpdated(() => {
  let image_tag: HTMLElement | null = document.querySelector('.intervalic_image_tag');
  setTimeout(() => {
    if (image_tag !== null) {
      image_tag.style.opacity = '1';
    }
  }, 300);
});

onMounted(() => {
  let image_tag: HTMLElement | null = document.querySelector('.intervalic_image_tag');

  setInterval(() => {
    if (image_tag !== null) {
      image_tag.style.opacity = '0';
    }
    setTimeout(() => {
      cycle_through();
    }, 300);
  }, 6000)
});

</script>

<template>
  <article class="interval_container">
    <div class="interval_item">
      <img class="intervalic_image_tag" :src="file_names[index]">
    </div>
  </article>
</template>




    



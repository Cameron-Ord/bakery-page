<template>
  <div class="about_wrapper">
    <article class="teaser_article">
      <h1 class="beyond_tag">Beyond the dough</h1>
      <teaser-text v-if="current_selection === 'none'"></teaser-text>
      <about-team v-if="current_selection === 'team'"></about-team>
      <about-history v-if="current_selection === 'history'"></about-history>
      <about-philosophy v-if="current_selection === 'philosophy'"></about-philosophy>
      <about-ingredients v-if="current_selection === 'ingredients'"></about-ingredients>
    </article>
    <about-controls :update_current_selection="update_current_selection"></about-controls>
  </div>
</template>
<script setup lang="ts">
import { nextTick, onUpdated, ref } from 'vue';
import AboutControls from './AboutControls.vue';
import TeaserText from './TeaserText.vue';
import AboutTeam from './AboutTeam.vue';
import AboutHistory from './AboutHistory.vue';
import AboutPhilosophy from './AboutPhilosophy.vue';
import AboutIngredients from './AboutIngredients.vue';
const current_selection = ref('none');

const update_current_selection = (retrieved_data: string) => {
  current_selection.value = retrieved_data;
}

onUpdated(() => {

  nextTick(() => {
    const beyond_tag: HTMLElement | null = document.querySelector('.beyond_tag');
    if (beyond_tag !== null && window.innerWidth < 1024) {
      move_to_element(beyond_tag);
    }
  })

})

const move_to_element = (h1_tag: HTMLElement) => {

  let element_rect = undefined;
  let element_y = undefined;
  element_rect = h1_tag.getBoundingClientRect();
  element_y = window.scrollY + element_rect.top
  window.scrollTo({
    top: element_y,
    behavior: 'smooth',
  });
}


</script>

<style lang="scss" scoped>
.about_wrapper {
  display: grid;
  align-items: center;
  row-gap: 50px;
}

.teaser_article {
  justify-self: center;
  width: 90%;
  justify-items: center;
  display: flex;
  flex-direction: column;
  gap: 25px;




}
</style>

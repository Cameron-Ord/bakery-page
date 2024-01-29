
<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import BreadsSection from '../components/BreadsSection.vue';
import AboutHistory from '../components/AboutHistory.vue';
import ContactSection from '../components/ContactSection.vue';
import LocationsSection from '../components/LocationsSection.vue';
import SpecialsSection from '../components/SpecialsSection.vue';
import PastriesSection from '../components/PastriesSection.vue';
import SubImages from '../components/SubImages.vue'
import MenuChooser from '../components/MenuChooser.vue'
import AboutPhilosophy from '../components/AboutPhilosophy.vue'
import AboutIngredients from '../components/AboutIngredients.vue'
import { ref } from 'vue';
const selection = ref('Breads');


const assign_selection = (text: string) =>{
  selection.value = "";
  selection.value += text;
}

</script>

<style lang="scss" scoped>
.page_main{
  display: grid;
  align-items: center;
  min-height: 100vh;
  row-gap: 50px;
  >.hero_section{
    display: grid;
    align-items: center;
    min-height: 40vh;
    background-image: url('/images/main_hero.jpg');
    background-size: cover;
    background-position: 50% center;
  }

  >.menu_section{
    display: grid;
    align-items: center;
    row-gap: 25px;
  }
  >.about_teaser{
    display: grid;
    align-items: center;
    row-gap: 50px;
  }
  >.sub_hero_images{
    display: grid;
    align-items: center;
  }
  >.contact_section{
    display: grid;
    align-items: center;
  }
  >.locations_section{
    display: grid;
    align-items: center;
  }
}
</style>

<template>
  <main class="page_main">
    <section class="hero_section">
      <hero-section></hero-section>
    </section>
    <section class="menu_section">
      <menu-chooser :assign_selection="assign_selection"></menu-chooser>
      <breads-section v-if="selection === 'Breads'"></breads-section>
      <pastries-section v-if="selection === 'Pastries'"></pastries-section>
      <specials-section v-if="selection === 'Specials'"></specials-section>
    </section>
    <section class="about_teaser">
      <about-history></about-history>
      <about-ingredients></about-ingredients>
      <about-philosophy></about-philosophy>
    </section>
    <section class="sub_hero_images">
      <sub-images></sub-images>
    </section>
    <section class="contact_section">
      <contact-section></contact-section>
    </section>
    <section class="locations_section">
      <locations-section></locations-section>
    </section>
  </main>
</template>
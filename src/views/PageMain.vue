
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
import AboutDisplay from '../components/AboutDisplay.vue'
import { ref, onMounted } from 'vue';
const selection = ref('Breads');
const is_displaying = ref(false);
let selection_data: Array<{ title: string, content: string }> | undefined;
let saved_e_pos: number | undefined;

const assign_selection = (text: string) =>{
  selection.value = "";
  selection.value += text;
}

const display_about_selection = (choice_data: Array<{ title: string, content: string }>, element_y: number | undefined) =>{
  if(choice_data.length > 0 && choice_data !== undefined) {
    is_displaying.value = true;
    selection_data = choice_data;
  }

  if(element_y !== undefined){
    saved_e_pos = element_y;
  }
}

const return_data = () =>{
  if(selection_data !== undefined && selection_data.length > 0){
    return selection_data;
  }
}

const reset_about_selection = () =>{
  selection_data = undefined;
  is_displaying.value = false;
  if(saved_e_pos !== undefined){
    window.scrollTo({
      top: saved_e_pos,
      behavior: 'instant',
    });
  }
}

onMounted(() => {
})

</script>

<style lang="scss" scoped>
.page_main{
  display: grid;
  align-items: center;
  min-height: 100vh;
  
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
    padding-bottom: 50px;

  }
  >.about_teaser{
    display: grid;
    align-items: center;
    row-gap: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  >.sub_hero_images{
    display: grid;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  >.contact_section{
    display: grid;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  >.locations_section{
    display: grid;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

@media only screen and (min-width: 770px){
  .about_teaser{
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  }
}

@media only screen and (min-width: 1024px){

  .page_main{
   
    >.menu_section{
      
    }
    >.contact_section{
      min-height: 50vh;
    }
    >.sub_hero_images{
      min-height: 50vh;
    }
    >.hero_section{
      min-height: 100vh;
    }
    >.about_teaser{
      min-height: 100vh;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    }
  }
}

.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from{
  opacity: 0;
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
      <transition>
        <about-history 
        v-if="!is_displaying" 
        :display_about_selection="display_about_selection"
        ></about-history>
      </transition>
      <transition>
        <about-ingredients 
        v-if="!is_displaying" 
        :display_about_selection="display_about_selection"
        ></about-ingredients>
      </transition>
      <transition>
        <about-philosophy 
        v-if="!is_displaying" 
        :display_about_selection="display_about_selection"
        ></about-philosophy>      
      </transition>
      <transition>
        <about-display 
        v-if="is_displaying" 
        :return_data="return_data" 
        :reset_about_selection="reset_about_selection"
        ></about-display>      
      </transition>
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
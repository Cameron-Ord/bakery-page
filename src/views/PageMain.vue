
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
import { ref, onMounted, nextTick } from 'vue';
const selection = ref('Breads');
const is_displaying = ref(false);
let selection_data: Array<{ title: string, content: string }> | undefined;
let saved_e_pos: number | undefined;

const before_enter = (el: Element) =>{
  if(el instanceof HTMLElement){
    el.style.opacity = '0';
  }
}

const enter = async (el: Element, done: any) =>{
  if(el instanceof HTMLElement){
    await nextTick();
    el.style.transition = 'opacity 0.5s';
    el.style.opacity = '1';
    done();
  }
}

const before_leave = (el: Element) => {
  if(el instanceof HTMLElement){
    console.log("Before leave")
    el.style.opacity = '1';
  }
}

const leave = async (el: Element, done: any) =>{
  if(el instanceof HTMLElement){
    await nextTick()
    el.style.transition = 'opacity 0.5s';
    el.style.opacity = '0';
    done();
  }

}
const assign_selection = (text: string) =>{
  selection.value = "";
  selection.value += text;
}

const display_about_selection = (choice_data: Array<{ title: string, content: string }>, element_y: number | undefined) =>{
  
  if(choice_data.length > 0 && choice_data !== undefined) {
    selection_data = choice_data;
    is_displaying.value = true;
  }
  
  if(element_y !== undefined){
    saved_e_pos = element_y ;
  }
}

const return_data = () =>{
  if(selection_data !== undefined && selection_data.length > 0){
    return selection_data;
  }
}

const reset_about_selection = async () =>{
  is_displaying.value = false;
  selection_data = undefined;
  if(saved_e_pos !== undefined){
    await nextTick();
    window.scrollTo({
      top: saved_e_pos,
      behavior: 'instant',
    });
  }
}

const handle_emit = () =>{

}


onMounted(() => {
})

</script>

<style lang="scss" scoped>
.transition_handler-enter-active, .transition_handler-leave-active {
  transition: opacity 0.5s;
}

.transition_handler-enter, .transition_handler-leave-to {
  opacity: 0;
}
.page_main{
  display: grid;
  align-items: center;
  min-height: 100vh;
  
  >.hero_section{
    display: grid;
    align-items: center;
    justify-items: center;
    min-height: 425px;
    background-image: url('/images/croissant_hero.jpg');
    background-size: cover;
    background-position: 50% 50%;
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

  .page_main{

    >.hero_section{
      justify-items: start;
      min-height: 500px;
    }
  }
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
      min-height: 70vh;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    }
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
      <transition>
        <breads-section v-if="selection === 'Breads'"></breads-section>
      </transition>
      <transition>
        <pastries-section v-if="selection === 'Pastries'"></pastries-section>
      </transition>
      <transition>
        <specials-section v-if="selection === 'Specials'"></specials-section>
      </transition>
    </section>
    <section class="about_teaser">
      <transition 
        name="transition_handler"
        :css="false"
        @before-enter="before_enter"
        @enter="enter"
        @before-leave="before_leave"
        @leave="leave"
      >
        
        <about-history 
        v-if="!is_displaying" 
        :display_about_selection="display_about_selection"
        key="history"
        ></about-history>
      
      </transition>
      
      <transition 
        name="transition_handler"
        :css="false"
        @before-enter="before_enter"
        @enter="enter"
        @before-leave="before_leave"
        @leave="leave"
      >

        <about-ingredients 
        v-if="!is_displaying" 
        :display_about_selection="display_about_selection"
        key="ingredients"
        ></about-ingredients>
     
      </transition>
      
      <transition
        name="transition_handler"
        :css="false"
        @before-enter="before_enter"
        @enter="enter"
        @before-leave="before_leave"
        @leave="leave"
      >

        <about-philosophy 
        v-if="!is_displaying" 
        :display_about_selection="display_about_selection"
        key="philosophy"
        ></about-philosophy>
      
      </transition>
      
      <transition 
        name="transition_handler"
        :css="false"
        @before-enter="before_enter"
        @enter="enter"
        @before-leave="before_leave"
        @leave="leave"
      >

        <about-display 
        v-if="is_displaying" 
        @clicked="handle_emit"
        :return_data="return_data" 
        :reset_about_selection="reset_about_selection"
        key="display"
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

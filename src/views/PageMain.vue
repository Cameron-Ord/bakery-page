
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
import { ref, onMounted, nextTick, onUpdated } from 'vue';
const selection = ref('Breads');
const is_displaying = ref(false);
let selection_data: Array<{ title: string, content: string }> | undefined;
let saved_e_pos: number | undefined;

const before_enter = (el: Element) =>{
  if(el instanceof HTMLElement){
    el.style.opacity = '0';
  }
}

const on_enter_text = async (el:Element, done: any) => {
  if(el instanceof HTMLElement){
    await nextTick();
    let children: NodeListOf<ChildNode> = el.childNodes;
    if(children){
      for(let c = 0; c < children.length; c++){
        let child: ChildNode = children[c];
        if(child instanceof HTMLElement){
          child.style.opacity = '0';
        }
      }
    }
    el.style.transition = 'opacity 0.5s';
    el.style.opacity = '1';
  }
  done();
}

const after_enter_text = async (el:Element) =>{
  if(el instanceof HTMLElement){
    await nextTick();
    let children: NodeListOf<ChildNode> = el.childNodes;
    if(children){
      let timeout_offset: number = 0;
      for(let c = 0; c < children.length; c++){
        let child: ChildNode = children[c];
        if(child instanceof HTMLElement){
          setTimeout(()=>{
            child.style.transition = '0.3s ease-in-out';
            child.style.opacity = '1';
          }, 25 + timeout_offset)
          timeout_offset += 50;
        }
      }
    }
  }
}

const enter = async (el: Element, done: any) =>{
  if(el instanceof HTMLElement){
    await nextTick();
    let children: NodeListOf<ChildNode> = el.childNodes;
    if(children){
      for(let c = 0; c < children.length; c++){
        let child: ChildNode = children[c];
        let child_children: NodeListOf<ChildNode> = child.childNodes;
        if(child_children){
          for(let cc = 0; cc < child_children.length; cc++){
            let c_child: ChildNode = child_children[cc];
            if(c_child instanceof HTMLImageElement){
              c_child.style.opacity = '0';
              c_child.onload = () =>{
                if(c_child.complete){
                  c_child.style.transition = '0.3s ease-in-out';
                  c_child.style.opacity = '1';
                }
              }
            }
          }
        }
      }
    }
    el.style.transition = 'opacity 0.5s';
    el.style.opacity = '1';
  }
  done();
}

const before_leave = (el: Element) => {
  if(el instanceof HTMLElement){
    el.style.opacity = '1';
  }
}

const leave = async (el: Element, done: any) =>{
  if(el instanceof HTMLElement){
    await nextTick()
    el.style.transition = 'opacity 0.5s';
    el.style.opacity = '0';
  }
  done();
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

const set_hero = () =>{
  let hero_element: HTMLElement | null = document.querySelector('.hero_section');
  const screen_size: number | undefined = window.innerWidth
  let image_url: string | undefined;
  if(screen_size && hero_element){
    hero_element.style.opacity = '0'
    if(screen_size < 770){
      image_url = '/images/7_1000x666.jpg';
    } else if (screen_size > 770 && screen_size < 1024){
      image_url = '/images/7_1200x800.jpg';
    } else {
      image_url = '/images/7_2000x1333.jpg';
    }
  }

  if(image_url){
    const img = new Image();
    img.src = image_url;
    img.onload = () =>{
      if(hero_element && img.complete){
        hero_element.style.backgroundImage = `url('${image_url}')`;
        await_next_tick()
        hero_element.style.transition = '0.3s ease-in-out'
        hero_element.style.opacity = '1'
      }
    }
  }
}


const set_about_images = () => {
  if(!is_displaying.value){
    let img_tag_nl: NodeList | null = document.querySelectorAll('.about_image');
    if(img_tag_nl){
      for(let n = 0; n < img_tag_nl.length; n++){
        let img_node: Node = img_tag_nl[n];
        if(img_node instanceof HTMLImageElement){
          img_node.style.opacity = '0';
          img_node.onload=()=>{
            if(img_node.complete){
              await_next_tick();
              img_node.style.transition = '0.3s ease-in-out'
              img_node.style.opacity = '1';
            }
          }
        }
      } 
    }
    
  }
}

const set_other_images = () => {
  let cs_img_nodelist: NodeList | null = document.querySelectorAll('.interval_image');
  if(cs_img_nodelist){
    for(let n = 0; n < cs_img_nodelist.length; n++){
      let img_node: Node = cs_img_nodelist[n];
      if(img_node instanceof HTMLImageElement){
        img_node.style.opacity = '0';
        img_node.onload = () =>{
          if(img_node.complete){
            await_next_tick();
            img_node.style.transition = '0.3s ease-in-out'
            img_node.style.opacity = '1';
          }
        }
      }
    }
  }
}

const await_next_tick = async () =>{
  await nextTick();
}


onMounted(() => {
  set_hero();
  set_about_images();
  set_other_images();
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
    justify-items: center;
    min-height: 425px;
    
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
        @enter="on_enter_text"
        @after-enter="after_enter_text"
        @before-leave="before_leave"
        @leave="leave"
      >

        <about-display 
        v-if="is_displaying" 
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

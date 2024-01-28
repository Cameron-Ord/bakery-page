<template>
  <main class="page_main">
    <section class="hero_section">
      <hero-section></hero-section>
    </section>
    <section class="about_teaser">
      <about-teaser></about-teaser>
    </section>
    <section class="intervalic_image_section">
      <bread-interval></bread-interval>
    </section>
    <div class="product_section_wrapper">
      <section class="menu_section_breads">
        <breads-header></breads-header>
        <breads-items></breads-items>
      </section>
      <section class="menu_section_pastries">
        <pastries-header></pastries-header>
        <pastries-items></pastries-items>
      </section>
      <section class="specials_section">
        <specials-header></specials-header>
        <specials-items></specials-items>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import BreadInterval from '../components/BreadInterval.vue';
import HeroSection from '../components/HeroSection.vue';
import BreadsHeader from '../components/BreadsHeader.vue';
import BreadsItems from '../components/BreadsItems.vue';
import SpecialsHeader from '../components/SpecialsHeader.vue'
import SpecialsItems from '../components/SpecialsItems.vue'
import PastriesHeader from '../components/PastriesHeader.vue'
import PastriesItems from '../components/PastriesItems.vue'
import AboutTeaser from '../components/AboutTeaser.vue';
</script>

<style lang="scss" scoped>
.page_main {
  display: grid;
  align-items: center;
  min-height: 100vh;
  row-gap: 50px;

  >.intervalic_image_section {
    display: grid;
    align-items: center;
  }

  >.product_section_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    >.menu_section_breads {
      padding-top: 25px;
      padding-bottom: 25px;
      display: grid;
      row-gap: 25px;
      max-width: 550px;
      align-items: center;
      justify-items: center;
    }

    >.specials_section {
      padding-top: 25px;
      padding-bottom: 25px;
      display: grid;
      align-items: center;
      justify-items: center;
      row-gap: 25px;
      max-width: 550px;
    }

    >.menu_section_pastries {
      padding-top: 25px;
      padding-bottom: 25px;
      display: grid;
      align-items: center;
      justify-items: center;
      row-gap: 25px;
      max-width: 550px;
    }
  }


  >.about_teaser {
    display: grid;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 25px;

  }

  >.hero_section {
    padding-top: 25px;
    padding-bottom: 25px;
    display: grid;
    align-items: center;
    justify-items: center;
    background-image: url('/images/mobile_hero.jpg');
    background-size: cover;
    background-position: 50% center;
    min-height: 40vh;

  }
}

@media only screen and (min-width: 770px) {
  .page_main {

    >.product_section_wrapper {
      row-gap: 25px;
      column-gap: 25px;
      display: grid;
      flex-wrap: nowrap;
      justify-items: center;
      grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));

      >.menu_section_breads {

        padding-left: 10px;
        padding-right: 10px;
        max-width: 500px;

      }

      >.specials_section {

        padding-left: 10px;
        padding-right: 10px;
        max-width: 500px;


      }

      >.menu_section_pastries {
        padding-left: 10px;
        padding-right: 10px;
        max-width: 500px;
      }
    }


    >.about_teaser {}

    >.hero_section {}
  }
}

@media only screen and (min-width: 1024px) {
  .page_main {

    >.product_section_wrapper {
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));

      >.menu_section_breads {
        max-width: 550px;
        min-width: 500px;
      }

      >.specials_section {
        min-width: 500px;
        max-width: 550px;
      }

      >.menu_section_pastries {
        min-width: 500px;
        max-width: 500px;
      }
    }


    >.about_teaser {}

    >.hero_section {}
  }
}
</style>

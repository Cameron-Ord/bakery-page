<template>
  <main class="page_main">
    <section class="hero_section">
      <section class="hero_sub_section">
        <hero-section></hero-section>
        <sub-hero></sub-hero>
      </section>
    </section>
    <section class="about_teaser">
      <about-teaser></about-teaser>
    </section>
    <section class="product_section_wrapper">
      <section class="menu_section_breads">
        <breads-header></breads-header>
        <section class="sub_section">
          <breads-items></breads-items>
        </section>
      </section>
      <section class="menu_section_pastries">
        <pastries-header></pastries-header>
        <section class="sub_section">
          <pastries-items></pastries-items>
        </section>
      </section>
      <section class="specials_section">
        <specials-header></specials-header>
        <section class="sub_section">
          <specials-items></specials-items>
        </section>
      </section>
    </section>
    <section class="contact-location-wrapper">
      <section class="contact_section">
        <contact-us></contact-us>
      </section>
      <section class="locations_section">
        <about-locations></about-locations>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import SubHero from '../components/SubHero.vue';
import AboutLocations from '../components/AboutLocations.vue';
import ContactUs from '../components/ContactUs.vue'
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
  >.product_section_wrapper {
    display: grid;
    align-items: center;
    justify-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    row-gap: 35px;
    
    >.menu_section_breads {
      display: flex;
      flex-wrap: wrap;
      row-gap: 25px;
      align-items: center;
      justify-content: center;

      >.sub_section {
        display: grid;
        row-gap: 25px;
        width: 90%;
      }
    }

    >.specials_section {
      display: grid;
      align-items: center;
      justify-items: center;
      row-gap: 25px;


      >.sub_section {
        display: grid;
        row-gap: 25px;
        width: 90%;

      }
    }

    >.menu_section_pastries {
      display: grid;
      align-items: center;
      justify-items: center;
      row-gap: 25px;


      >.sub_section {
        display: grid;
        row-gap: 25px;
        width: 90%;

      }
    }
  }


  >.about_teaser {
    display: grid;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  >.hero_section {
    display: grid;
    align-items: center;
    justify-items: center;
    background-image: url('/images/mobile_hero.jpg');
    background-size: cover;
    background-position: 50% center;
    min-height: 40vh;
    >.hero_sub_section{
      display: grid;
      align-items: center;
      width: 90%;
      row-gap: 35px;
      justify-items: start;
    }
  }
  >.contact-location-wrapper{
    display: grid;
    align-items: center;
    justify-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    >.contact_section{
      display: grid;
      align-items: center;
      justify-items: center;
      width: 90%;
    }

    >.locations_section{
      display: grid;
      align-items: center;
      justify-items: center;
      width: 90%;
    }
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

      >.menu_section_breads {
        row-gap: 35px;
        
        >.sub_section {
          
          display: grid;
          row-gap: 25px;
          grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
        }
      }

      >.specials_section {
        row-gap: 35px;
        >.sub_section {
          display: grid;
          row-gap: 25px;
          grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
        }

      }

      >.menu_section_pastries {
        row-gap: 35px;
        >.sub_section {
          display: grid;
          row-gap: 25px;
          grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
        }
      }
    }


    >.about_teaser {}

    >.hero_section {}

    >.contact-location-wrapper{
      display: grid;
      align-items: center;
      grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));

      >.contact_section{
        display: grid;
        align-items: center;
        justify-items: center;
      }

      >.locations_section{
        display: grid;
        align-items: center;
        justify-items: center;
      }
    }
  }
}

@media only screen and (min-width: 1024px) {
  .page_main {

    >.product_section_wrapper {

      row-gap: 60px;

      >.menu_section_breads {
        row-gap: 50px;

        >.sub_section {
          display: grid;
          row-gap: 50px;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        }
      }

      >.specials_section {
        row-gap: 50px;
     

        >.sub_section {
          display: grid;
          row-gap: 50px;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        }
      }

      >.menu_section_pastries {
        row-gap: 50px;
      

        >.sub_section {
          display: grid;
          row-gap: 50px;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        }
      }
    }


    >.about_teaser {}

    >.hero_section {

      min-height: 100vh;
      background-image: url('/images/desktop_hero.jpg');

    }
    >.contact-location-wrapper{
      display: grid;
      align-items: center;
      >.contact_section{
        display: grid;
        align-items: center;
        justify-items: center;
      }

      >.locations_section{
        display: grid;
        align-items: center;
        justify-items: center;
      }
    }
  }
}
</style>

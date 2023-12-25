<template>
    <main class="page_main">
        <section class="hero_section">
            <hero-section></hero-section>
        </section>
        <section class="about_teaser">
            <about-teaser></about-teaser>
        </section>
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
        <section class="about_section">
            <about-philosophy></about-philosophy>
            <about-team></about-team>
            <about-locations></about-locations>
            <about-ingredients></about-ingredients>
        </section>
        <section class="contact_section">
            <contact-us></contact-us>
        </section>
    </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import BreadsHeader from '@/components/BreadsHeader.vue';
import BreadsItems from '@/components/BreadsItems.vue';
import SpecialsHeader from '@/components/SpecialsHeader.vue'
import SpecialsItems from '@/components/SpecialsItems.vue'
import AboutPhilosophy from '@/components/AboutPhilosophy.vue'
import AboutTeam from '@/components/AboutTeam.vue'
import AboutLocations from '@/components/AboutLocations.vue'
import AboutIngredients from '@/components/AboutIngredients.vue'
import ContactUs from '@/components/ContactUs.vue'
import PastriesHeader from '@/components/PastriesHeader.vue'
import PastriesItems from '@/components/PastriesItems.vue'
import AboutTeaser from '@/components/AboutTeaser.vue';
</script>

<style lang="scss" scoped>
$bg: whitesmoke;
.page_main{
    display: grid;
    align-items: center;
    min-height: 100vh;

    >.about_teaser{
        display: grid;
        align-items: center;
        padding-top: 25px;
        padding-bottom: 25px;
        background-color: $bg;
    }
    >.hero_section{
        padding-top: 25px;
        padding-bottom: 25px;
        display: grid;
        align-items: start;
        justify-items: center;
        background-image: url('/images/mae-mu-m9pzwmxm2rk-unsplash.jpg');
        background-size:cover;
        background-position: 50% center;
        min-height: 450px;
       
    }
    >.menu_section_breads{
        padding-top: 25px;
        padding-bottom: 25px;
        display: grid;
        row-gap: 25px;
        align-items: center;
        justify-items: center;
        background-image: url('/images/pexels-skyler-ewing-10011794.jpg');
        background-size: cover;
        background-position: 25% center;

    }
}
</style>
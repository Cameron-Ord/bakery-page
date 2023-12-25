<template>
    <main class="page_main">
        <section class="hero_section">
            <hero-section></hero-section>
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
        background-image: url('/images/tamara-gak-SQLOsc0HGDI-unsplash.jpg');
        background-size:cover;
        background-position: 25%;
        height: 100%;
    }
}
</style>
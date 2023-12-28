<template>
    <article class="teaser_article">
        <h1>Behind the dough</h1>
        <teaser-text v-if="current_selection === 0"></teaser-text>
        <about-team v-if="current_selection === 1"></about-team>
        <about-contact v-if="current_selection === 2"></about-contact>
        <about-history v-if="current_selection === 3"></about-history>
        <about-locations v-if="current_selection === 4"></about-locations>
        <about-philosophy v-if="current_selection === 5"></about-philosophy>
        <about-ingredients v-if="current_selection === 6"></about-ingredients>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TeaserText from './TeaserText.vue';
import AboutTeam from './AboutTeam.vue';
import AboutContact from './AboutContact.vue';
import AboutHistory from './AboutHistory.vue';
import AboutLocations from './AboutLocations.vue';
import AboutPhilosophy from './AboutPhilosophy.vue';
import AboutIngredients from './AboutIngredients.vue';
const current_selection = ref(0)
</script>

<style lang="scss" scoped>
.teaser_article{
    justify-self: center;
    width: 90%;
    justify-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
}
</style>

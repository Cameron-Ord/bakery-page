<template>
    <div class="about_wrapper">
        <article class="teaser_article">
            <h1 class="beyond_tag">Beyond the dough</h1>
            <teaser-text v-if="current_selection === 'none'"></teaser-text>
            <about-team v-if="current_selection === 'team'"></about-team>
            <contact-us v-if="current_selection === 'contact'"></contact-us>
            <about-history v-if="current_selection === 'history'"></about-history>
            <about-locations v-if="current_selection === 'locations'"></about-locations>
            <about-philosophy v-if="current_selection === 'philosophy'"></about-philosophy>
            <about-ingredients v-if="current_selection === 'ingredients'"></about-ingredients>
        </article>
        <about-controls 
        :update_current_selection="update_current_selection"
        ></about-controls>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import AboutControls from './AboutControls.vue';
import TeaserText from './TeaserText.vue';
import AboutTeam from './AboutTeam.vue';
import ContactUs from './ContactUs.vue';
import AboutHistory from './AboutHistory.vue';
import AboutLocations from './AboutLocations.vue';
import AboutPhilosophy from './AboutPhilosophy.vue';
import AboutIngredients from './AboutIngredients.vue';
const current_selection = ref('none');
const update_current_selection = (retrieved_data: string) =>{
    
    current_selection.value = retrieved_data;
}


</script>

<style lang="scss" scoped>
.about_wrapper{
    display: grid;
    align-items: center;
    row-gap: 25px;
}
.teaser_article{
    justify-self: center;
    width: 90%;
    justify-items: center;
    display: flex;
    flex-direction: column;
    gap: 25px;
    



}
</style>

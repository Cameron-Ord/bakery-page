
<template>
    <article class="teaser_list">
        <h3 class="h3_event_tag" @click="update_selection($event)" v-if="show_back !== 'Our Team'">Our Team</h3>
        <h3 class="h3_event_tag" @click="update_selection($event)" v-if="show_back !== 'Our History'">Our History</h3>
        <h3 class="h3_event_tag" @click="update_selection($event)" v-if="show_back !== 'Our Philosophy'">Our Philosophy</h3>
        <h3 class="h3_event_tag" @click="update_selection($event)" v-if="show_back !== 'Our Ingredients'">Our Ingredients</h3>
        <h3 class="h3_event_tag" @click="update_selection($event)" v-if="show_back !== 'Our Locations'">Our Locations</h3>
        <h3 class="h3_event_tag" @click="update_selection($event)" v-if="show_back !== 'Contact Us'">Contact Us</h3>
        <h3 class="h3_event_tag" @click="update_selection($event)" v-if="show_back !== 'Back'">Back</h3>
    </article>
</template>

<script setup lang="ts">
import {onBeforeUpdate, onUpdated, ref} from 'vue'
const show_back = ref("Back")
const selection_str = ref('')
const { update_current_selection } = defineProps(['update_current_selection']);
const update_selection = (event: any) =>{
    const event_target_text: string = event.target.innerText;
    
    if(event_target_text !== ''){
        show_back.value = event_target_text;
        selection_str.value = determine_selection(event_target_text);
    }
    if(selection_str.value !== ''){
        console.log(event_target_text)
        update_current_selection(selection_str.value);
    } else {
        update_current_selection('none');
    }
}

onBeforeUpdate(()=>{

})

onUpdated(()=>{
    console.log("DOM updated")

})

const determine_selection = (text: string) =>{
    switch (text) {
        case "Our Team":
            return 'team';
        case "Our History":
            return 'history';
        case "Our Philosophy":
            return 'philosophy';
        case "Our Ingredients":
            return 'ingredients';
        case "Our Locations":
            return 'locations';
        case "Contact Us":
            return 'contact';
        default:
            return '';
    }
}
</script>

<style lang="scss" scoped>
.teaser_list{
    justify-self: center;
    width: 90%;
    justify-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
}
</style>

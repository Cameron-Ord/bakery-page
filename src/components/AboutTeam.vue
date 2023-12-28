<template>
    <div class="our_team_desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';

onBeforeUnmount(()=>{
    let header_div: HTMLElement | null = document.querySelector('.our_team_desc');
    if(header_div !== null){
        header_div.style.opacity = '0';
    }
})

onMounted(()=>{
    let header_div: HTMLElement | null = document.querySelector('.our_team_desc');
        setTimeout(()=>{
        if(header_div !== null){
            header_div.style.opacity = '1';
        }
        },100)
    }
)
</script>

<style scoped>
.our_team_desc{
    opacity: 0;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-wrap: wrap;
    text-align: start;
    justify-content: start;
}
</style>

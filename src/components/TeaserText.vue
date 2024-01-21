<template>
    <div class="teaser_header">
        
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';

onBeforeUnmount(()=>{
    let header_div: HTMLElement | null = document.querySelector('.teaser_header');
    if(header_div !== null){
        header_div.style.opacity = '0';
    }
})

onMounted(()=>{
    let header_div: HTMLElement | null = document.querySelector('.teaser_header');
        setTimeout(()=>{
        if(header_div !== null){
            header_div.style.opacity = '1';
        }
        },100)
    }
)
</script>

<style lang="scss" scoped>
.teaser_header{
    opacity: 0;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-wrap: wrap;
    text-align: start;
    justify-content: start;
    row-gap: 10px;

    >p{

        color: var(--violet);
    }

    >h3{
        color: var(--violet);
    }
}
</style>

<template>
    <div class="locations_desc">
        <h3>Our Locations</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
    </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted } from 'vue';

onBeforeUnmount(()=>{
    let header_div: HTMLElement | null = document.querySelector('.locations_desc');
    if(header_div !== null){
        header_div.style.opacity = '0';
    }
})

onMounted(()=>{
    let header_div: HTMLElement | null = document.querySelector('.locations_desc');
        nextTick(()=>{
                setTimeout(()=>{
                if(header_div !== null){
                    header_div.style.opacity = '1';
                }
            }, 10);       
        })
    }
)
</script>

<style lang="scss" scoped>
.locations_desc{
    opacity: 0;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-wrap: wrap;
    text-align: start;
    justify-content: start;
    row-gap: 10px;
    >p{
        padding-top: 5px;
        padding-bottom: 5px;
        color: var(--violet);
    }

    >h3{
        padding-top: 5px;
        padding-bottom: 5px;
        color: var(--violet);
    }

}
</style>

<template>
    <div class="teaser_header">
        <h3>About Us</h3>
        <p>
            Welcome to our bakery, where passion meets pastry, and every bite tells a story. Immerse yourself in the aroma of freshly baked delights, crafted with love and a dash of creativity. Our journey began with a dream to share the joy of exceptional baking, and today, we invite you to savor the sweet moments we've baked into every treat. Join us in celebrating the art of baking, where each recipe is a tale, and every bite is a chapter of indulgence.
        </p>
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

@media only screen and (min-width: 770px) {
    .teaser_header{

    >p{

        color: var(--violet);
    }

    >h3{
        color: var(--violet);
    }
}
}

@media only screen and (min-width: 1024px) {
    .teaser_header{
        max-width: 750px;
    >p{

        color: var(--violet);
    }

    >h3{
        color: var(--violet);
    }
}
}
</style>

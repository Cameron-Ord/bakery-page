<script setup lang="ts">
const {assign_selection} = defineProps(['assign_selection']);

const selection = (event: any) =>{
    const text = event.target.innerText;
    assign_selection(text);
}

</script>
<style lang="scss" scoped></style>
<template>
    <article>
        <span>
            <h1 @click="selection($event)">Breads</h1>
            <h1 @click="selection($event)">Pastries</h1>
            <h1 @click="selection($event)">Specials</h1>
        </span>
    </article>
</template>
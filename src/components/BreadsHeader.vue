<template>
    <div class="menu_header">
        <h1 class="product_header">Our bread</h1>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.menu_header{
    display: flex;
    text-align: start; 
    width: 90%;
 
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    >h1{
        
        font-size: clamp(1.65rem, 2vw, 1.85rem);
    }
}
</style>

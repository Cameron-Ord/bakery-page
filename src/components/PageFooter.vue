
<script setup lang="ts">

</script>

<style lang="scss" scoped>

.name_span{
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-direction: column;
    width: 80%;
}

.socials_span{
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 25px;
    row-gap: 10px;
    width: 80%;
}
.page_footer{
    display: grid;
    justify-items: center;
    align-items: center;
    min-height: 175px;
}
</style>

<template>
    <footer class="page_footer">
        <span class="name_span">
            <h2>Freshest Bakery</h2>
            <h3>321-real-number</h3>
        </span>
        <span class="socials_span">
            <img src="/svgs/fb.svg" alt="" class="svg_tag">
            <img src="/svgs/insta.svg" alt="" class="svg_tag">
            <img src="/svgs/notx.svg" alt="" class="svg_tag">
        </span>
    </footer>
</template>
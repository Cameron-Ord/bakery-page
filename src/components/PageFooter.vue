<template>
    <footer class="page_footer">
        <nav class="footer_navigation">
            <p>socials</p>
            <p>socials</p>
            <p>socials</p>
            <p>socials</p>
        </nav>
    </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.page_footer{
    display: grid;
    align-items: center;
    justify-items: center;
    min-height: 125px;
    >.footer_navigation{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
}
</style>
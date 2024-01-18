<template>
    <footer class="page_footer">
        <nav class="footer_navigation">
            <img src="/svgs/fb.svg" alt="facebook icon">
            <img src="/svgs/insta.svg" alt="instagram icon">
            <img src="/svgs/notx.svg" alt="twitter icon">
            <img src="/svgs/git.svg" alt="github icon">
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
    min-height: 200px;
    >.footer_navigation{
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        row-gap: 10px;
        column-gap: 10px;

        >img{
            padding: 5px;
            cursor: pointer;
            width: 10vw;
            max-width: 50px;
            min-width: 25px;
        }
    }
}
</style>

<script setup lang="ts"></script>
<style lang="scss" scoped>

.media_article{
    display: grid;
    justify-items: center;
}

.info_span{
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
    >h2{

    }
    >.media_container{
        display: flex;
        flex-wrap: wrap;
        align-items: start;
        column-gap: 15px;
        row-gap: 10px;
        justify-content: flex-start;
    }
}

.media_image_span{
    display: flex;
    align-items: start;
    justify-content: flex-start;
    width: 80%;
}
.interval_image{
    width: 80%;
    height: auto;
}
</style>
<template>
    <article class="media_article">
        <span class="info_span">
            <h2>Follow us on social media to stay up to date!</h2>
            <div class="media_container">
                <img src="/svgs/fb.svg" alt="" class="svg_tag">
                <img src="/svgs/insta.svg" alt="" class="svg_tag">
                <img src="/svgs/notx.svg" alt="" class="svg_tag">
            </div>
        </span>
        <span class="media_image_span">
            <img src="/images/example2.jpg" alt="" class="interval_image">
        </span>
    </article>
</template>
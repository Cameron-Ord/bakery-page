<script setup lang="ts">
import { onMounted } from 'vue';

const socials_image = "/images/17_912x912.jpg"

</script>
<style lang="scss" scoped>

.media_article{
    display: grid;
    justify-items: center;
    row-gap: 25px;
}

.info_span{
    width: 80%;
    row-gap: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    >h2{
        text-align: center;
    }
    >.media_container{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 15px;
        row-gap: 10px;
        justify-content: center;
    }
}

.media_image_span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
}
.interval_image{
    width: 80%;
    height: auto;
    max-width: 350px;
}

@media only screen and (min-width: 770px) {
    .media_article{
        grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    }
    .info_span{
        justify-content: center;
        align-items: center;

    }
    .interval_image{
        max-width: 350px;
    }
    .media_image_span{
        justify-content: center;
    }
}
@media only screen and (min-width: 1024px) {
    .media_article{
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    }
    .info_span{
        justify-content: center;
        align-items: center;
    } 

    .interval_image{
        max-width: 400px;
    }
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
            <img :src="socials_image" alt="" class="interval_image">
        </span>
    </article>
</template>
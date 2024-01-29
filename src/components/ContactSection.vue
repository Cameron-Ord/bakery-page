<script setup lang="ts"></script>
<style lang="scss" scoped>

.contact_article{
    display: grid;
    justify-items: center;
    row-gap: 25px;
}

.contact_span{
    display: flex;
    align-items: start;
    justify-content: flex-start;
    width: 80%;
    flex-direction: column;
    row-gap: 10px;

    >.input_tag{
        height: 25px;
        width: 90%;
        max-width: 400px;

    }
    >.text_area{
        height: 100px;
        width: 90%;
        max-width: 400px;
    }
}
.contact_img_span{
    display: flex;
    align-items: start;
    justify-content: flex-start;
    width: 80%;
}
.interval_image{
    width: 80%;
    height: auto;
}

@media only screen and (min-width: 770px) {
    .contact_article{
        grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    }
    .contact_span{
        justify-content: center;
        align-items: center;
    }
    .contact_img_span{
        justify-content: center;
    }
}
@media only screen and (min-width: 1024px) {
    
    .contact_article{
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    }
    .contact_span{
        justify-content: center;
        align-items: center;
    }
    .contact_img_span{
        justify-content: center;
    }

    .interval_image{
        max-width: 400px;
    }
}
</style>
<template>
  <article class="contact_article">
    <span class="contact_img_span">
        <img src="/images/example3.jpg" alt="contact image" class="interval_image">
    </span>
    <span class="contact_span">
        <h1>Contact Us</h1>
        <input class="input_tag" type="text" placeholder="your name..">
        <textarea class="text_area" name="message"></textarea>
    </span>
  </article>
</template>
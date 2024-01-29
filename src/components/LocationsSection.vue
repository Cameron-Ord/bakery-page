<script setup lang="ts"></script>
<style lang="scss" scoped>


.locations_article{
    display: grid;
    justify-items: center;

    >.locations_span{
        display: flex;
        row-gap: 20px;
        padding: 10px;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        >div{
            width: 100%;
            display: grid;
            align-items: center;
            justify-items: center;
            row-gap: 25px;
        }
        >h3{

        }
    }
}

@media only screen and (min-width: 770px) {
}
@media only screen and (min-width: 1024px) {
    
}

</style>
<template>
  <article class="locations_article">
    <span class="locations_span">
        <h3>Our Locations</h3>
        <div class="location_wrapper">
            <p>1504 realstreet NW - Edmonton, AB</p>
            <p>1732 actualstreet NW - Calgary, AB</p>
            <p>1243 greatstreet SW - Red Deer, AB </p>
            <p>1033 astreet SE - Medicine Hat, AB</p>
        </div>
    </span>
  </article>
</template>
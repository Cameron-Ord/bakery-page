<script setup lang="ts"></script>
<style lang="scss" scoped>


.locations_article{
    display: grid;
    justify-items: center;

    >.locations_span{
        display: flex;
        width: 80%;
        align-items: start;
        justify-content: flex-start;
        flex-direction: column;

        >p{
            
        }
        >h3{

        }
    }
}

</style>
<template>
  <article class="locations_article">
    <span class="locations_span">
      <h3>Our Locations</h3>
      <p>1504 realstreet NW - Edmonton, AB</p>
      <p>1732 actualstreet NW - Calgary, AB</p>
      <p>1243 greatstreet SW - Red Deer, AB </p>
      <p>1033 astreet SE - Medicine Hat, AB</p>
    </span>
  </article>
</template>
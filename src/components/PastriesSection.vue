<script setup lang="ts">
const pastries = [
  {
    "Title": "Croissant",
    "Desc": "Flaky layers of buttery goodness define our classic croissants. Handcrafted to perfection, these French pastries boast a golden-brown exterior that gives way to a light, airy interior. Whether enjoyed plain, filled with chocolate, or layered with almond paste, our croissants are a testament to the art of laminated dough.",
    "Img": "/images/croissant.jpg"
  },
  {
    "Title": "Eclair",
    "Desc": "Indulge in the elegance of our éclairs, where delicate choux pastry meets a rich, velvety filling. Each éclair is a work of art, adorned with a glossy layer of icing that adds a touch of sweetness to every bite. From traditional vanilla to inventive flavors like pistachio or passion fruit, these elongated pastries offer a symphony of textures and tastes.",
    "Img": "/images/eclair.jpg"
  },
  {
    "Title": "Danish Pastry",
    "Desc": "Our Danish pastries are a celebration of flaky, buttery layers enveloping delectable fillings. Choose from a variety of fruit compotes, custards, or nuts nestled within the tender folds of the pastry. With a delicate glaze or dusting of powdered sugar, these pastries are a delightful combination of simplicity and sophistication.",
    "Img": "/images/danish.jpg"
  },
  {
    "Title": "Palmier",
    "Desc": "Crisp, caramelized layers of puff pastry create the enchanting spiral of our palmiers. Also known as elephant ears, these sweet, palm-shaped treats offer a satisfying crunch with every bite. The simplicity of sugar and butter allows the subtleties of the pastry's texture to shine, making them a timeless favorite.",
    "Img": "/images/donut.jpg"
  },
]

</script>
<style lang="scss" scoped>

.pastries_article{
    display: grid;
    justify-items: center;
    row-gap: 50px;
}

.pastries_item{
    display: grid;
    align-items: center;
    row-gap: 25px;
    justify-items: center;
    width: 80%;
 

    >.pastries_title{

    }
    >.pastries_image{

    }
    >.pastries_desc{

    }
}

.pastries_image{
    width: 90%;
    height: auto;
}


@media only screen and (min-width: 770px){
  .pastries_article{
    row-gap: 0px;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  }
  .pastries_item{
    row-gap: 0px;
    grid-template-rows: 75px 1fr 1.5fr;
  }
}
@media only screen and (min-width: 1024px){
   .pastries_item{
      grid-template-rows: 75px 1fr 1fr;
    }
  .pastries_article{
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }
}

</style>
<template>
  <article class="pastries_article">
    <span v-for="(item, i) in pastries" :key="i" class="pastries_item">
        <h2 class="pastries_title">{{ item['Title'] }}</h2>
        <img :src="item['Img']" alt="" class="pastries_image">
        <p class="pastries_desc">{{ item['Desc'] }}</p>
    </span>
  </article>
</template>

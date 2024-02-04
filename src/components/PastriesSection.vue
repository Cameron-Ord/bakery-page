<script setup lang="ts">
import { nextTick, onMounted } from 'vue';
const pastries = [
  {
    "Title": "Croissant",
    "Desc": "Flaky layers of buttery goodness define our classic croissants. Handcrafted to perfection, these French pastries boast a golden-brown exterior that gives way to a light, airy interior. Whether enjoyed plain, filled with chocolate, or layered with almond paste, our croissants are a testament to the art of laminated dough.",
    "Img": "/images/6_912x608.jpg"
  },
  {
    "Title": "Eclair",
    "Desc": "Indulge in the elegance of our éclairs, where delicate choux pastry meets a rich, velvety filling. Each éclair is a work of art, adorned with a glossy layer of icing that adds a touch of sweetness to every bite. From traditional vanilla to inventive flavors like pistachio or passion fruit, these elongated pastries offer a symphony of textures and tastes.",
    "Img": "/images/13_853x569.jpg"
  },
  {
    "Title": "Danish Pastry",
    "Desc": "Our Danish pastries are a celebration of flaky, buttery layers enveloping delectable fillings. Choose from a variety of fruit compotes, custards, or nuts nestled within the tender folds of the pastry. With a delicate glaze or dusting of powdered sugar, these pastries are a delightful combination of simplicity and sophistication.",
    "Img": "/images/9_979x652.jpg"
  },
  {
    "Title": "Classic Glazed Donut",
    "Desc": "Indulge in the timeless delight of our Classic Glazed Donut. A perfect ring of golden-brown, fluffy dough, expertly fried to perfection. The sweet, glossy glaze adds a touch of sweetness, making it an irresistible treat for any occasion.",
    "Img": "/images/12_853x569.jpg"
  },
]
const await_next_tick = async () =>{
  await nextTick();
}

onMounted(()=>{
  await_next_tick();
  let img_nodelist:NodeList | null = document.querySelectorAll('.pastries_image');
  let span_nodelist: NodeList | null = document.querySelectorAll('.pastries_item');

  if(span_nodelist){
    for(let s = 0; s < span_nodelist.length; ++s){
      let span_node = span_nodelist[s] as HTMLElement;
      if(span_node instanceof HTMLElement && window.innerWidth >= 1024){
        span_node.style.maxWidth = "75%"
      }
    }
  }

  if(img_nodelist){
    for(let i = 0; i < img_nodelist.length; ++i){
      let img_node = img_nodelist[i] as HTMLImageElement;
      if(img_node instanceof HTMLImageElement){
        img_node.style.opacity = '0';
        img_node.onload = () => {
          if(img_node.complete){
            img_node.style.transition = '0.3s ease-in-out'
            img_node.style.opacity = '1';
          }
        }
      }

    }
  }
})
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
    text-align: center;
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
    grid-template-rows: 75px 1fr 1.25fr;
  }
}
@media only screen and (min-width: 1024px){
   .pastries_item{
      grid-template-rows: 75px 1fr 1.5fr;
    }
  .pastries_article{
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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

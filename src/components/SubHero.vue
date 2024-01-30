<script setup lang="ts">


  const scroll_func = (e_pos: number) => {
    window.scrollTo({
      top: e_pos,
      behavior: 'smooth',
    })
  }

  const goto_location = (evnt_target: EventTarget | null) =>{
    if(evnt_target instanceof HTMLElement){
      const target_text = evnt_target.innerText.toLowerCase();
      let section: HTMLElement | null
      switch (target_text) {
        case "about us":
          section = document.querySelector('.about_teaser')
          if(section){
            const e_rect: DOMRect = section.getBoundingClientRect();
            const e_pos: number = (window.scrollY + e_rect.top);
            scroll_func(e_pos);
          }
          break;

        case "contact us":
          section = document.querySelector('.contact_section');
          if(section){
            const e_rect: DOMRect = section.getBoundingClientRect();
            const e_pos: number = (window.scrollY + e_rect.top);
            scroll_func(e_pos);
          }
          break;

        case "locations":
            section = document.querySelector('.locations_section');
            if(section){
              const e_rect: DOMRect = section.getBoundingClientRect();
              const e_pos: number = (window.scrollY + e_rect.top);
              scroll_func(e_pos);
            }
          break;

        default:
          break;
      }
    }
  }

</script>
<style lang="scss" scoped>
.hero_article{
  display: grid;
  justify-items: center;
  row-gap: 50px;
}

.hero_intro_span{
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
  width: 80%;
  row-gap: 10px;
}
.hero_cta{
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 12.5px;
  row-gap: 10px;
  width: 80%;
}

@media only screen and (min-width: 770px) {
  .hero_h1{
    font-size: clamp(2rem, 2vw, 3rem);
    
  }
  .hero_h2{
    font-size: clamp(1.6rem, 2vw, 2.6rem);
  }

  .hero_h3{
    font-size: clamp(1.5rem, 2vw, 2rem);
  }

  .hero_cta{
    column-gap: 40px;
  }
}

@media only screen and (min-width: 1024px) {
  
  .hero_h1{
    font-size: clamp(3rem, 2vw, 4rem);
    
  }
  .hero_h2{
    font-size: clamp(2rem, 2vw, 3rem);
  }

  .hero_h3{
    font-size: clamp(1.5rem, 2vw, 2rem);
  }
  .hero_cta{
    column-gap: 60px;
  }
}

</style>
<template>
  <article class="hero_article">
    <span class="hero_intro_span">
      <h1 class="hero_h1">Freshest Bakery</h1>
      <h3 class="hero_h3">View our full menu</h3>
    </span>
    <span class="hero_cta">
      <h2 class="hero_h2" @click="goto_location($event.target)">About us</h2>
      <h2 class="hero_h2" @click="goto_location($event.target)">Contact us</h2>
      <h2 class="hero_h2" @click="goto_location($event.target)">Locations</h2>
    </span>
  </article>
</template>

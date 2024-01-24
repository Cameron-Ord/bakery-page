<template>
    <main class="page_main">
        <section class="hero_section">
            <hero-section></hero-section>
        </section>
        <section class="about_teaser">
            <about-teaser></about-teaser>
        </section>

        <div class="product_section_wrapper">
            <section class="menu_section_breads">
                <breads-header></breads-header>
                <breads-items></breads-items>
            </section>
            <section class="menu_section_pastries">
                <pastries-header></pastries-header>
                <pastries-items></pastries-items>
            </section>
            <section class="specials_section">
                <specials-header></specials-header>
                <specials-items></specials-items>
            </section>
        </div>
    </main>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import BreadsHeader from '../components/BreadsHeader.vue';
import BreadsItems from '../components/BreadsItems.vue';
import SpecialsHeader from '../components/SpecialsHeader.vue'
import SpecialsItems from '../components/SpecialsItems.vue'
import PastriesHeader from '../components/PastriesHeader.vue'
import PastriesItems from '../components/PastriesItems.vue'
import AboutTeaser from '../components/AboutTeaser.vue';
</script>

<style lang="scss" scoped>

.page_main{
    display: grid;
    align-items: center;
    min-height: 100vh;
    row-gap: 50px;

    >.product_section_wrapper{
        display: grid;

        align-items: center;
        
        >.menu_section_breads{
            padding-top: 25px;
            padding-bottom: 25px;
            display: grid;
            row-gap: 25px;
            align-items: center;
            justify-items: center;
        }
        >.specials_section{
            padding-top: 25px;
            padding-bottom: 25px;
            display: grid;
            align-items: center;
            justify-items: center;
            row-gap: 25px;
        }
        >.menu_section_pastries{
            padding-top: 25px;
            padding-bottom: 25px;
            display: grid;
            align-items: center;
            justify-items: center;
            row-gap: 25px;
        }
    }


    >.about_teaser{
        display: grid;
        align-items: center;
        padding-top: 25px;
        padding-bottom: 25px;
        
    }
    >.hero_section{
        padding-top: 25px;
        padding-bottom: 25px;
        display: grid;
        align-items: center;
        justify-items: center;
        background-image: url('/images/mobile_hero.jpg');
        background-size:cover;
        background-position: 50% center;
        min-height: 40vh;
        
    }
}

@media only screen and (min-width: 770px)  {
     .page_main{

        >.product_section_wrapper{
            
            >.menu_section_breads{
            }
            >.specials_section{
            }
            >.menu_section_pastries{
            }
        }


        >.about_teaser{
        }
        >.hero_section{       
        }
    }
}

@media only screen and (min-width: 1024px){
     .page_main{

        >.product_section_wrapper{
            
            >.menu_section_breads{
            }
            >.specials_section{
            }
            >.menu_section_pastries{
            }
        }


        >.about_teaser{
        }
        >.hero_section{       
        }
    }
}

</style>

<template>
    <div class="our_team_desc">
        <h3>Our Team</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
        </p>
        <img src="/images/team.jpg" alt="our team" class="team_image">
    </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted } from 'vue';

onBeforeUnmount(()=>{
    let header_div: HTMLElement | null = document.querySelector('.our_team_desc');
    if(header_div !== null){
        header_div.style.opacity = '0';
    }
})

onMounted(()=>{
    let header_div: HTMLElement | null = document.querySelector('.our_team_desc');
        nextTick(()=>{
            setTimeout(()=>{
                if(header_div !== null){
                    header_div.style.opacity = '1';
                }
            }, 10);
        })


        let team_image = document.querySelector('.team_image') as HTMLElement | null
        if(team_image !== null && team_image instanceof HTMLElement){
            team_image.addEventListener('load', ()=>{    
                 show_image(team_image)
            });   
        }
    }
)

const show_image = (team_image: HTMLElement | null) => {
    if(team_image !== null){
        team_image.style.opacity = '1';
    }
}



    

</script>

<style lang="scss" scoped>
.our_team_desc{
    opacity: 0;
    transition: 0.3s ease-in-out;
    display: flex;
    flex-wrap: wrap;
    text-align: start;
    justify-content: start;
    row-gap: 10px;
    >p{
        padding-bottom: 5px;
        padding-top: 5px;
        color: var(--violet);
    }
    >h3{
        padding-top: 5px;
        padding-bottom: 5px;
        color: var(--violet);
    }
    >img{
      
        transition: 0.3s ease-in-out;
        opacity: 0;
        min-width: 75px;
        max-width: 500px;
        width: 90%;
        border-radius: 10px;
    }
}
</style>

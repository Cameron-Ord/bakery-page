
<template>
    <article class="teaser_list">
        <h3 v-for="(tag, i) in event_tags" :key="i" @click="update_selection($event)" class="h3_event_tag">{{ tag }}</h3>
    </article>
</template>

<script setup lang="ts">
import {nextTick, onBeforeUpdate, onUpdated, ref} from 'vue'
const selection_str = ref('')
const { update_current_selection } = defineProps(['update_current_selection']);
const event_tags: any = ref(['Our Team', 'Our History', 'Our Philosophy', 'Our Ingredients', 'Our Locations', 'Contact Us'])
const removed_tags: Array<string> = []
const update_selection = (event: any) =>{
    const event_target_text: string = event.target.innerText;
    
    if(event_target_text !== ''){
        const elements: NodeList = document.querySelectorAll('.h3_event_tag');  
        for (let e = 0; e < elements.length; e++){
            const element: Node = elements[e]
           if(element instanceof HTMLElement){               
                element.style.transition = '0s ease-in-out'
                element.style.opacity = '0'  
            }
            
        }

        for(let i = 0; i < event_tags.value.length; i++){
            const tag_text = event_tags.value[i]
            if(tag_text === event_target_text){
                removed_tags.push(tag_text);
                event_tags.value.splice(i, 1)
            }
        }
        
        if(removed_tags.length > 1) {
            event_tags.value.push(removed_tags[0])
            removed_tags.shift()
        }
        
        selection_str.value = determine_selection(event_target_text);
    }
    if(selection_str.value !== ''){
        update_current_selection(selection_str.value);
    } else {
        update_current_selection('none');
    }
}

onBeforeUpdate(()=>{ 
})

onUpdated(()=>{
    
    nextTick(()=>{   
        const elements: NodeList = document.querySelectorAll('.h3_event_tag');  
        let timer_offset = 0
        for (let e = 0; e < elements.length; e++){
            const element: Node = elements[e]
            if(element instanceof HTMLElement){               
                setTimeout(()=>{
                    element.style.transition = '0.1s ease-in-out'
                    element.style.opacity = '1'
                },100 + timer_offset);
                
                timer_offset += 50
            }
        }
       
    })
    
})

const determine_selection = (text: string) =>{
    switch (text) {
        case "Our Team":
            return 'team';
        case "Our History":
            return 'history';
        case "Our Philosophy":
            return 'philosophy';
        case "Our Ingredients":
            return 'ingredients';
        case "Our Locations":
            return 'locations';
        case "Contact Us":
            return 'contact';
        default:
            return '';
    }
}
</script>

<style lang="scss" scoped>
.teaser_list{
    justify-self: center;
    width: 90%;
    justify-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    >.h3_event_tag{
        transition: 0.3s ease-in-out;
    }
}
</style>

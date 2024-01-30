<script setup lang="ts">
import { nextTick, onBeforeMount, onMounted } from 'vue';
const {return_data, reset_about_selection} = defineProps(['return_data', 'reset_about_selection'])
const emit = defineEmits(['clicked'])
let data: Array<{title: string, content:string}>;

const go_back = () => {
    emit('clicked');
    reset_about_selection();
}

onBeforeMount(() => {
    data = return_data();
})

const scroll_to_element = async (e_pos: number) =>{
    await nextTick();
    window.scrollTo({
        top: e_pos,
        behavior: 'instant',
    });
}

onMounted(() => {
    const title_nl: NodeList | null = document.querySelectorAll('.text_title');
    if(title_nl !== null){
        const first_element: Node = title_nl[0];
        if(first_element instanceof HTMLElement){
            const element_rect: DOMRect = first_element.getBoundingClientRect();
            const element_y: number = (window.scrollY + element_rect.top) - 50;
            scroll_to_element(element_y);
        }
    }
})

</script>
<style lang="scss" scoped>

.display_article{
    display: grid;
    align-items: center;
    justify-items: center;
    row-gap: 25px;

    >.about_info_item{
        display: flex;
        flex-direction: column;
        width: 80%;
        justify-content: flex-start;
        align-items: start;
        row-gap: 15px;
    }

    >.back_btn_div{
        display: flex;
        width: 80%;
        justify-content: center;
        align-items:center;
    }
}

</style>
<template>
    <article class="display_article" v-if="data !== undefined">
        <span class="about_info_item" v-for="(item, i) in data" :key="i">
            <h1 class="text_title">{{ item['title'] }}</h1>
            <p class="text_content">{{ item['content'] }}</p>
        </span>
        <div class="back_btn_div">
            <h1 class="back_btn" @click="go_back">Back</h1>
        </div>
    </article>
</template>

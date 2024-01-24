
<style lang="scss" scoped></style>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const file_names: any = ref(["example0.jpg", "example1.jpg"]);
const index: any = ref(0);

const cycle_through = () => {
    const array_len = file_names.value.length;
    if(index.value >= array_len){
        index.value = 0;
    } else {
        index.value++;
    }
}

onMounted(()=>{

    setInterval(()=>{
        cycle_through();
    }, 5000)
})

</script>

<template>
    <article class="interval_container">
        <div class="interval_item">
            <img :src="file_names[index]">
        </div>
    </article>
</template>




    



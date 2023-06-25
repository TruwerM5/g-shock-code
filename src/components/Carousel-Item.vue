<script setup>
const props = defineProps({
    src: {
        type: String,
        required: true
    }
});
function func(e) {
    console.log(e.target.tagName)
}
</script>

<template>
    <li class="carousel-item min-w-full">
        <img :src="src" 
        @click="func"
        alt="G-Shock" 
        class="object-contain object-center h-full mx-auto" >
    </li>
</template>
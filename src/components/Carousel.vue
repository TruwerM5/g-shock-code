<script setup>
import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import CarouselItem from './Carousel-Item.vue';
const props = defineProps({
    gallery: {
        type: Object,
        required: true
    }
});

const startX = ref(0);
const firstX = ref(0);
const moveX = ref(0);
const carousel = ref(0);
const isClicked = ref(false);
const posX = ref(0);
const maxPosition = ref(0);
const currentIndex = ref(0);
function touchStart(e) {
    
    // if(e.target.tagName == 'IMG' || e.target.tagName == 'SPAN') {
    //     return;
    // }
    isClicked.value = true;
    firstX.value = e.screenX || e.touches[0].screenX;
    startX.value = e.screenX || e.touches[0].screenX;
    maxPosition.value = carousel.value.scrollWidth - carousel.value.scrollWidth / 3;
}

function touchMove(e) {
    if(isClicked.value) {
        moveX.value = e.screenX || e.touches[0].screenX;

        if(startX.value < moveX.value) {
            posX.value+=2;

        } else if(startX.value > moveX.value){
            posX.value-=2;

        } else return;        
        
        startX.value = moveX.value;
    }
}

function moveCarousel(direction) {
    if(direction == 'prev' && currentIndex.value != 0) {
        currentIndex.value++;
    } else if(direction == 'next' && Math.abs(currentIndex.value) != props.gallery.length - 1) {
        currentIndex.value--;
    }
}

function touchEnd(e) {
    isClicked.value = false;
    let x;
    e.screenX >= 0 ? x = e.screenX : x = e.changedTouches[0].screenX;
    let delta = x - firstX.value;
    posX.value = 0;
    
    if(Math.abs(delta) > 0 && Math.abs(delta) < 40) {

        return
    };
    if(delta < 0) {
        moveCarousel('next');
    } else if(delta > 0) {
        moveCarousel('prev');
    }

}

window.addEventListener('mouseup', function(e){
    if(e.target.closest('.carousel')) {
        touchEnd(e);
    }
});

onBeforeRouteUpdate((to, from) => {
    currentIndex.value = 0;
})

</script>

<template>
    <div class="carousel flex flex-col gap-[20px] md:max-w-[400px] 2xl:max-w-[600px] mx-auto overflow-hidden"
            @mousedown="touchStart"
            @mousemove="touchMove"
            @touchstart="touchStart"
            @touchmove="touchMove"
            @touchend="touchEnd">
        <div class="carousel__inner select-none pointer-events-none overflow-hidden">
            <ul
            :class="['carousel__list relative z-40 flex items-stretch max-h-[300px] md:max-h-[450px]',
            !isClicked ? 'transition-all duration-300' : 'transition-transform']" 
            :style="{left: posX + 'px', transform: `translateX(${currentIndex * 100}%)`}" 
            ref="carousel">
                <CarouselItem v-for="item, i in gallery" 
                :key="i" 
                :src="item" class="object-contain" />
            </ul>
        </div>
        <div class="carousel__images-wrapper relative">
            <ul class="carousel__images flex relative overflow-hidden items-stretch max-h-[80px] md:max-h-[100px]">
                <li class="carousel__img cursor-pointer flex-1" 
                v-for="btn,i in gallery" 
                :key="i"
                @click="currentIndex = -i">
                    <img :src="btn" 
                    alt="G-Shock" class="object-cover h-full w-full mx-auto">
                </li>
            </ul>
            <span class="carousel__indicator absolute inset-0 block h-full transition-transform border-[3px] border-solid border-sky-400"
            :style="{width: carousel.clientWidth / gallery.length + 'px',
            transform: `translateX(${-currentIndex * 100}%)`}"></span>
        </div>
        
    </div>
</template>

<style lang="sass" scoped>
.carousel__btn
    position: absolute
    top: 50%
    transform: translateY(-50%)
    height: 100%
    width: 30px
    background-color: rgba(127,127,127, 0.5)
    z-index: 10
    &_prev
        left: 0
    &_next
        right: 0
</style>
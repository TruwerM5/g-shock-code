<script setup>
import { ref } from 'vue'
import { useCartStore } from '../assets/store.js';
import { useRoute } from 'vue-router';
const route = useRoute();
const cart = useCartStore();
const navbar = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },{
        id: 2,
        title: 'Catalog',
        path: '/catalog'
    },{
        id: 3,
        title: 'History',
        path: '/history'
    },{
        id: 4,
        title: 'Contact Us',
        path: '/contact'
    },
];

const navIsVisible = ref(false);

</script>

<template>
    <header class="header 2xl:container mx-auto h-[80px] fixed inset-0 px-[20px] py-[15px] z-50 bg-header text-base">
        <nav class="navbar flex items-center justify-between h-full">
            <div class="logo">
                <router-link :to="{path: route.hash}" class="logo__link">
                    <img src="/images/logo.png" alt="G-Shock" class="max-h-[80px]">
                </router-link>
            </div>
            <div :class="[ navIsVisible ? 'top-[80px]' : '-top-[3000px]', 
            'navbar__nav transition-all duration-500 fixed w-full h-full inset-x-0 bg-header -z-10 md:static md:z-0']">
                <ul class="m-auto items-center flex flex-col md:flex-row gap-[50px] md:justify-center">
                    <li v-for="item in navbar" :key="item.id" 
                    class="navbar__item">
                        <router-link :to="{path: item.path }" 
                        @click="navIsVisible = false"
                        class="relative block py-[15px] after:bg-primary">{{ item.title }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="cart-btn-wrapper relative ml-auto">
                <button @click="cart.toggleCart" class="text-grey">
                    <img src="/images/bag-icon.png" alt="Bag" class="w-[30px]">
                </button>
                <span v-if="cart.count != 0" class="cart-count">{{ cart.count }}</span>
                
            </div>
            
            <button @click="navIsVisible = !navIsVisible" class="navtoggler relative w-[28px] h-[24px] ml-[25px] md:hidden">
                <span v-for="span,i in 3" :key="i" 
                :class="['navtoggler__span absolute inset-x-0 block w-full h-[4px] bg-primary transition-all duration-500',{
                            'top-0': i == 0, 
                            'top-1/2 -translate-y-1/2': i == 1, 
                            'bottom-0': i == 2, 
                            'rotate-45 origin-center top-1/2': i == 0 && navIsVisible,
                            'opacity-0 left-[10px]': i == 1 && navIsVisible,
                            '-rotate-45 origin-center top-1/2': i == 2 && navIsVisible,
                        }]">
                </span>
            </button>
        </nav>
    </header>
</template>

<style lang="sass" scoped>
.router-link-active
    font-weight: 600
    &::after
        content: ''
        display: block
        position: absolute
        width: 21px
        height: 2px
        bottom: 0
        left: 50%
        transform: translateX(-50%)
        border-radius: 5px
        @media screen and (min-width: 768px)
            left: 0
            transform: translateX(0)
.cart-count
    position: absolute
    top: -10px
    right: -10px
    width: 17px
    height: 17px
    font-size: 12px
    font-weight: bold
    display: flex
    justify-content: center
    align-items: center
    border-radius: 50%
    background-color: #000
    color: #fff

</style>
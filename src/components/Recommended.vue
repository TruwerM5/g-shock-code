<script setup>
import { ref } from 'vue';
import Products from './Products.vue';
import { useAllProductsStore } from '../assets/allProducts';
const allProducts = useAllProductsStore();
const url = 'https://raw.githubusercontent.com/TruwerM5/g-shock-db/main/gallery.json';
const recommendedProds = ref([]);
async function getData() {
        await allProducts.fetchProducts(url);
        recommendedProds.value = allProducts.data;
        allProducts.loaded = false;
}
getData();
</script>

<template>
    <section class="recommended px-[20px] lg:px-[40px] xl:px-[80px]">
        <h2 class="heading text-center mb-[30px] md:mb-[45px] leading-[35px]">
            <slot name="Heading"></slot>
        </h2>
        <Products :url="url" :products="recommendedProds" :view="'grid'"/>
        <router-link to="/catalog" class="primary-btn primary-btn_black text-white mx-auto mt-[25px]">Show more</router-link>
    </section>
</template>

<style>
</style>
<script setup>
import { ref, watchEffect } from 'vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';
import getSingleProduct from '../assets/api/getSingleProduct.js';
import { useAllProductsStore } from '../assets/allProducts';
import Carousel from '../components/Carousel.vue';
import ProductBtn from '../components/ProductBtn.vue';
import Loading from '../components/Loading.vue';
const url = 'https://raw.githubusercontent.com/TruwerM5/g-shock-db/main/productsDetails.json';
const router = useRouter();
const route = useRoute();
const product = ref('');
const loading = ref(false);
const isError = ref(false);
const goBack = ref(true);
const allProducts = useAllProductsStore();
async function getData() {
    try {
        loading.value = true;
        product.value = await getSingleProduct(url, route.params.name);
        document.title =  'G-SHOCK | ' + product.value.name;
        loading.value = false;
        
    } catch(err) {
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            isError.value = true;
        }, 10000);
    }
    
    
}
getData();


onBeforeRouteUpdate(async () => { 
   await getData();
});


watchEffect(async () => {
   await getData();
});

</script>

<template>
    <router-link :to="{path: '/catalog'}" class="m-[10px_10px] block" title="Go to Catalog">
        <img src="/images/arrow-left.png" alt="Back" class="w-[30px] md:w-[60px]">
    </router-link>
    <Loading v-if="loading" />
    
    <section v-else-if="product != '' && !isError" class="single-product mt-[60px]">
        <div class="single-product__top flex flex-col 
        md:flex-row md:items-center gap-[30px] mb-[40px] 
        px-[20px] md:px-[30px] 2xl:max-w-[90%] mx-auto 2xl:gap-[100px]">
            <div class="w-full md:flex-1 ">
                <Carousel :gallery="product.images" />
            </div>
            <div class="single-product__info flex-1">
                <h4 class="single-product__name text-[36px] font-semibold font-['Helvetica']">{{ product.name }}</h4>
                <span class="single-product__alias block text-[26px] font-semibold">{{ product.alias ? product.alias : product.name }}</span>
                <span class="single-product__price block text-[38px] font-semibold">&pound;{{ product.price }}</span>
                <ProductBtn :product="product" >
                    <template #inBag>
                        <span class="text-base">The item in Bag</span>
                    </template>
                </ProductBtn>
                <span class="single-product__is-in-stock block text-base capitalize">in stock</span>
            </div>
        </div>
        <div v-if="product.description" class="bg-[#eee]">
            <div class="single-product__description mx-auto py-[30px] md:max-w-[70%] lg:max-w-[80%] text-justify px-[50px] md:px-0">
                <p v-for="paragraph in product.description" class="text text-black ight leading-[30px] text-md">{{ paragraph }}</p>
            </div>
        </div>
        <div class="single-product__features px-[50px] md:px-0 md:max-w-[70%] lg:max-w-[80%]  mx-auto py-[50px]">
            <h2 class="heading text-center leading-[40px] mb-[20px]">more information</h2>
            <table class="single-product__table table-fixed mx-auto 2xl:text-md">
            <thead class="text-left border-b-black border-b-solid border-b-[3px] md:text-lg">
                <tr>
                    <th class="">FEATURE</th>
                    <th>DESCRIPTION</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tr in product.specifications" :key="tr"
                class="border-b-black border-b-solid border-b-[1px]">
                    <td class="p-[20px_10px_20px_0] md:pr-[50px] font-bold">{{ tr.feature }}</td>
                    <td class="py-[20px] md:pr-[150px]">{{ tr.description }}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </section>
    <div v-else="isError" class="error h-full flex items-center justify-center">
        <h1 class="text-lg">There was an error loading the data, we're sorry</h1>
    </div>
    
</template>
<!-- ALL PRODUCTS -->
<script setup>
import { ref, watch, computed } from 'vue';
import { useAllProductsStore } from '../assets/allProducts';
import Products from '../components/Products.vue';
import Loading from '../components/Loading.vue';
const allProducts = useAllProductsStore();
const url = 'https://raw.githubusercontent.com/TruwerM5/g-shock-db/main/catalog.json';



const minPrice = ref(0);
const view = ref('grid');
let minPlaceholder = 0;

const maxPrice = ref(0);
let maxPlaceholder = 0;

const selected = ref('');
const isOverlayOpened = ref(false);
let products = ref([]);

const productsCount = computed(() => products.value.length);
async function getData() {
     if(!allProducts.loaded) {
        
        await allProducts.fetchProducts(url);
        allProducts.getMinAndMaxPrice();
        
        minPlaceholder = allProducts.getMinPrice;
        maxPlaceholder = allProducts.getMaxPrice;
        
    }
    for(let item of allProducts.data) {
        products.value.push(item);
    }
    
    selected.value = allProducts.select;
    minPrice.value = allProducts.minPrice;
    maxPrice.value = allProducts.maxPrice;
    
    
}

getData();



function filterByPriceRange() {
    let filteredFunc = allProducts.getByPriceRange;
    
    products.value = [];
    allProducts.minPrice = minPrice.value;
    allProducts.maxPrice = maxPrice.value;
    
    let filtered = filteredFunc(allProducts.minPrice, allProducts.maxPrice);

    for(let item of filtered) {
        products.value.push(item);
    }      
    sortBy(allProducts.select);

}
filterByPriceRange();


function reset() {

    products.value = [];

    for(let item of allProducts.data) {
        products.value.push(item);
    }

    selected.value = 'Price Asc';
    sortBy(selected.value);
    allProducts.getMinAndMaxPrice();
    minPrice.value = allProducts.minPrice;
    maxPrice.value = allProducts.maxPrice;
}

function sortByPriceAsc(arr) {
    return arr.sort((a, b) => a.price - b.price);
}

function sortByPriceDesc(arr) {
    return arr.sort((a, b) => b.price - a.price);
}

function sortBy(mode) { 
    if(mode == 'Price Asc') {
        products.value = sortByPriceAsc(products.value);
    } else if(mode == 'Price Desc') {
        products.value = sortByPriceDesc(products.value);
    }
}

sortBy(allProducts.select);

watch(selected, (state) => {
    sortBy(state);
    allProducts.select = state;
})

</script>

<template>
    <section v-if="allProducts.loaded && !allProducts.error" class="catalog px-[20px] lg:px-[40px] xl:px-[80px]">
        <h2 class="heading text-center mb-[30px] leading-[50px]">ALL WATCHES</h2>
        <div class="catalog__head flex justify-between mb-[30px]">
            <div class="filter flex gap-[10px] justify-center items-center uppercase font-semibold">
                <span>Filter & Sort</span>
                <button class="filter__btn" @click="isOverlayOpened=true">
                    <img src="/images/filter-icon.svg" alt="filter">
                </button>
            </div>
            <span class="text-md">{{ productsCount }} items</span>
            <div class="catalog__views flex md:hidden">
                <button @click="view = 'single'" :class="['catalog__view', {'active':view == 'single'}]">
                    <img src="/images/view-single-icon.png" alt="Single">
                </button>
                <button @click="view = 'grid'" :class="['catalog__view', {'active':view == 'grid'}]">
                    <img src="/images/view-grid-icon.png" alt="Grid">
                </button>
            </div>
        </div>
        <div class="min-h-[300px]">
            <Products :products="products" :view="view" />
            <div v-if="products.length == 0" class="nothing-found flex justify-center items-center flex-1">
                <span>Nothing found for the specified parameters</span>
            </div>
        </div>
        <div :class="['overlay', { 'active':isOverlayOpened }]" @click.self="isOverlayOpened=false">
            <div class="filters w-full md:max-w-[350px] text-md">
                <button class="filters__close-btn" @click="isOverlayOpened=false">
                    <img src="/images/close-icon-2.png" alt="Close">
                </button>
                <h3 class="text-center text-lg mb-[15px] font-orbitron font-medium">Filter & Sort</h3>
                <div class="filters__sorts flex justify-center items-center gap-[20px] mb-[30px]">
                    <span>Sort by</span>
                    <select name="sort" id="sort" v-model="selected" class="filters__select">
                        <option>Price Asc</option>
                        <option>Price Desc</option>
                    </select>
                </div>
                <div class="filters__price flex gap-[5px] items-center mb-[20px]">
                    <span class="mr-[10px]">Price</span>
                    <div class="filters__input-group">
                        <span class="filters__placeholder">
                            From
                        </span>
                        <input type="number" 
                        :placeholder="minPlaceholder" 
                        v-model="minPrice"
                        @keyup="filterByPriceRange"
                        class="filters__input"
                        maxlength="5">
                    </div>
                    <div class="filters__input-group">
                        <span class="filters__placeholder">
                            To
                        </span>
                        <input type="number" 
                        :placeholder="maxPlaceholder" 
                        v-model="maxPrice"
                        @keyup="filterByPriceRange"
                        class="filters__input"
                        maxlength="5">
                    </div>
                    <span class="text-[22px]">&pound;</span>
                </div>
                <span class="block mx-auto text-center mb-[40px]">{{ productsCount }}  items</span>
                <button @click="isOverlayOpened = false" 
                class="primary-btn primary-btn_black mx-auto mb-[25px]">Set</button>
                <button class="filters__reset-btn mx-auto primary-btn primary-btn_white" @click="reset">Reset</button>
            </div>
        </div>
    </section>
    <Loading v-else-if="!allProducts.loaded" />
    <div v-else-if="allProducts.error" class="error h-full flex items-center justify-center">
        <h1 class="text-lg">There was an error loading the data, we're sorry</h1>
    </div>
</template>
<style lang="sass" scoped>
.catalog
    &__view
        position: relative  
        &.active    
            &::after
                content: ''
                position: absolute
                display: block
                bottom: -5px
                left: 50%
                width: 80%
                transform: translateX(-50%)
                height: 1px
                background-color: #000
.overlay
    position: fixed
    width: 100%
    height: 100%
    top: 0
    left: 0
    background-color: rgba(0, 0, 0, 0.8)
    z-index: -10
    opacity: 0
    transition: opacity .4s, z-index .4s
    &.active
        opacity: 1
        z-index: 150
        .filters
            transform: translateX(0)
.filters
    position: absolute
    height: 100%
    left: 0
    top: 0
    transform: translateX(-200%)
    padding: 30px
    background-color: #fff
    transition: transform .5s
    transition-delay: .1s
    &__close-btn
        position: absolute
        top: 5px
        right: 5px   
    &__input-group
        position: relative
        width: 40%
    &__placeholder
        position: absolute
        top: 50%
        left: 5px
        transform: translateY(-50%)
        font-size: 13px
        color: #888
    &__input
        display: block
        height: 30px
        background-color: #EFEFEF
        padding-left: 40px
        max-width: 100%
    &__select
        height: 30px
        padding-inline: 5px
</style>
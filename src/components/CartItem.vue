<script setup>
import { useCartStore } from '../assets/store';
import  ProductBtn  from './ProductBtn.vue';
const cart = useCartStore();

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="cart-item text-md">
        <div class="flex items-start border-b-[1px] border-solid border-black gap-[15px]">
            <router-link :to="`/products/${product.name}`"  @click="cart.toggleCart">
                <img :src="product.images[0]" alt="G-Shock" class="w-[130px] h-[130px] object-cover object-center" :title="product.name">
            </router-link>
            <div class="cart-item__info self-center flex flex-col gap-[10px]">
                <router-link :to="`/products/${product.name}`" class="underline" @click="cart.toggleCart">
                    <span class="cart-item__name block">{{ product.name }}</span>
                </router-link>
                <span class="cart-item__price block" >&pound;{{ product.price }}</span>
                <div class="cart-item__quantity">
                    <ProductBtn :product="product" />
                </div>

            </div>
            <button class="cart-item__remove ml-auto" @click="cart.removeItem(product.id, true)">
                <img src="/images/close-icon.png" alt="Remove">
            </button>
        </div>
    </div>
</template>
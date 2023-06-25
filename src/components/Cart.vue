<script setup>
import { useCartStore } from '../assets/store';
import CartItem from './CartItem.vue';  
const cart = useCartStore();

</script>

<template>
    <div @click.self="cart.toggleCart"
    :class="['overlay fixed w-full h-full transition-opacity duration-500 ', {'active': cart.isCartOpened}]">
        <div :class="['cart w-full h-full md:max-w-[400px] p-[15px] delay-1000  overflow-scroll', {'active': cart.isCartOpened}]">
            <div class="cart__head flex justify-between items-center">
                <h4 class="cart__heading text-md 2xl:text-lg">Shopping Bag</h4>
                <button class="cart__close-btn" @click="cart.toggleCart">
                    <img src="/images/close-icon-2.png" alt="Close" class="w-[30px]">
                </button>
            </div>
            <div class="cart__body">
                <span v-if="cart.count === 0" class="cart__no-items text-md">You have no items in your shopping bag.</span>
                <div v-else>
                    <div class="cart__list flex flex-col gap-[15px] mt-[15px]">
                        <CartItem v-for="item in cart.products" :key="item.id" :product="item" />
                    </div>
                    
                    <span class="text-lg">Total: &pound;{{ cart.totalSum }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.overlay
    top: 0
    left: 100%
    background-color: rgba(0, 0, 0, 0.8)
    z-index: 150
    &.active
        left: 0
        
.cart
    position: absolute
    right: -100%
    background-color: #FFF
    height: 100%
    transition-property: all
    transition-duration: .2s
    transition-delay: 100ms
    &.active
        right: 0
    &::-webkit-scrollbar
        display: none
    &__head
        padding-bottom: 10px
        border-bottom: 1px solid #000
</style>
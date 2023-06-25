<script setup>
import { ref } from 'vue';
import { useCartStore } from '../assets/store.js';
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});
const cart = useCartStore();
const isProdInBag = ref('');
isProdInBag.value = cart.findProductInBag(props.product.id);

function addProductToCart(product, n) {
    cart.addItem(product, n);
    isProdInBag.value = cart.findProductInBag(props.product.id);
}



</script>

<template>
    <div class="product-btn__wrapper h-[90px] flex items-center justify-center md:justify-start">
        <Transition name="fade">
        <div v-if="cart.getQuantityById(product.id) > 0" class="product-in-bag">
            <slot name="inBag"></slot>
            
            <div class="flex items-center gap-[15px] justify-center">
                <button
                @click="cart.removeItem(product.id)" 
                class="product-in-bag__btn primary-btn primary-btn_black text-[35px] decrease">
                    
                </button>
                <span class="text-lg">{{ cart.getQuantityById(product.id) }}</span>
                <button :class="['product-in-bag__btn primary-btn primary-btn_black text-[35px] increase',
                {'invisible': cart.getQuantityById(product.id) > 9}]"
                @click="addProductToCart(product, 1)">
                    <!-- <img src="/images/plus.png" alt="increase"> -->
                </button>
            </div>
        </div>
        <button v-else class="primary-btn primary-btn_black primary-btn_large uppercase font-bold" @click="addProductToCart(product, 1)">
            Add to Bag
        </button>
    </Transition>
    </div>
    
    
</template>

<style lang="sass" scoped>
.product-btn__wrapper
    position: relative
.product-in-bag, .primary-btn_large
    position: absolute
.product-in-bag__btn
    position: relative
    height: 35px
    width: 35px
    padding: 8px
    &::after, &::before
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%,-50%)
        content: ''
        width: 17px
        height: 3px
        display: block
        background-color: #FFF
        transition: background-color .3s         
    &.increase
        &::before
            transform: translate(-50%,-50%) rotate(90deg)
    &:hover
        &::after, &::before
            background-color: #000
            
            
            
.fade-enter-active, .fade-leave-active
    transition: all .2s
    position: absolute

.fade-enter-from
    opacity: 0
    transform: translateY(30px)

.fade-leave-to
    opacity: 0
    transform: translateY(-30px)
    position: absolute

</style>
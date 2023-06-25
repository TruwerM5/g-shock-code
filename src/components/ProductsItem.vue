<script setup>

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

</script>

<template>
    <li class="product flex flex-col justify-between font-poppins font-semibold">
            <figure class="product__figure text-center py-[25px] flex flex-col justify-between h-full">
                <router-link :to="{ path: '/products/'+ product.name }" class="product__link mb-[20px] block overflow-hidden">
                    <img :src="product.src" alt="G-Shosk Watch" class="product__img object-cover max-h-[300px] mx-auto">
                </router-link>
                <figcaption class="product__caption">
                    <router-link :to="{ path: '/products/'+ product.name }" class="product__link block  md:text-md mb-[10px] hover:underline">
                        <span class="product__name">{{ product.name }}</span>
                    </router-link>
                    <span class="product__price block md:text-lg font-saira text-md">&pound;{{ product.price }}</span>
                </figcaption>
            </figure>
    </li>
</template>

<style lang="sass" scoped>
.product
    position: relative
    border: 3px solid #eee
    transition: border-color .4s
    &:hover
        border-color: #939393
        &::before
            border-bottom-color: #939393
    &::after,&::before
        content: ''
        position: absolute
        z-index: 2
        overflow: hidden
    &::after
        border-bottom: 28px solid #fff
        border-left: 28px solid transparent
        bottom: -4px
        right: -4px
    &::before
        border-bottom: 28px solid #eee
        border-left: 28px solid transparent
        bottom: -1px
        right: -1px
        transition: border-bottom-color .4s
    &__btn
        position: relative
        z-index: 1
        padding-block: 10px
        background-color: #000
        color: #fff
        border: 3px solid #000
        transition: background-color .4s, color .4s
        &:hover
            background-color: #fff
            color: #000
    &__img
        object-fit: cover
        transition: transform .4s
        &:hover
            transform: scale(1.3)
</style>
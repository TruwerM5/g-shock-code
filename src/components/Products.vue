<script setup>
import ProductsItem from './ProductsItem.vue';
const props = defineProps({
    products: {
        type: Object,
        required: true
    },
    view: {
        type: String
    }
});

</script>

<template>
    <div class="products">
        <ul :class="[ view == 'grid' ? 'grid-cols-2' : 'grid-cols-1']" 
        class="prooducts__list grid md:grid-cols-3 xl:grid-cols-4 grid-flow-dense gap-[20px] xl:gap-[40px]">
            <TransitionGroup name="products-tr">
                <ProductsItem v-for="product in products" :key="product.id" :product="product"/>
            </TransitionGroup>
        </ul>
    </div>
</template>

<style lang="sass" scoped>
.products-tr-move,
.products-tr-enter-active,
.products-tr-leave-active
    transition: all .5s ease
</style>

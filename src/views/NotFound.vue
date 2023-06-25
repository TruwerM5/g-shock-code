<script setup>
import Recommended from '../components/Recommended.vue';
</script>

<template>
    <section class="not-found my-0">
        <div class="not-found__hero  min-h-[550px] md:min-h-[800px] my-0 pb-[30px]">
            <div class="not-found__content flex flex-col gap-[25px]">
                <h1 class="text-2xl min-[400px]:text-lg sm:text-2xl 2xl:text-3xl uppercase font-orbitron font-bold leading-none">error 404</h1>
                <p class="not-found__text text-md min-[400px]:text-base sm:text-md  2xl:text-lg leading-none">Sorry, that page could not be found.</p>
                <router-link to="/catalog" class="primary-btn primary-btn_black 2xl:text-[18px] leading-none">Go shopping instead</router-link>
            </div>
        </div>  
        <Recommended>
            <template #Heading>Recommended for you</template>
        </Recommended>
    </section>
</template>

<style lang="sass" scoped>
.not-found
    &__hero
        display: flex
        align-items: flex-end
        justify-content: center
        background-image: url('/images/404-mobile.png')
        background-repeat: no-repeat
        background-position: center 20px
        background-size: 50%
        @media screen and (min-width: 400px)
            justify-content: flex-start
            align-items: center
            padding-left: 30px
            background-image: url('/images/404-bg-image.png')
            background-position: center right
            background-size: contain
</style>
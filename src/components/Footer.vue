<script setup>
const footerList = [
    {
        id: 1,
        title: 'Terms',
        link: '/terms'
    },{
        id: 2,
        title: 'Warranty',
        link: '/warranty'

    },{
        id: 3,
        title: 'Privacy Policy',
        link: '/privacy-policy'
    },{
        id: 4,
        title: 'Delivery & Returns',
        link: '/delivery-and-returns'
    }
]
</script>
<template>
    <footer class="footer relative bg-black text-white px-[20px] py-[50px] mt-[80px]">
        <nav class="footer__nav flex justify-between items-center">
            <div class="footer__logo">
                <img src="/images/logo-casio.svg" alt="Casio" class="mx-auto mb-[15px]">
                <p class="footer__text">&copy; 2023 Casio G-SHOCK UK</p>
            </div>
            <ul class="footer__list flex flex-col md:flex-row  gap-[15px] md:gap-[50px]">
                
                <li class="footer__item" v-for="{id, title, link} in footerList" :key="id">
                    <router-link :to="{path: link}" class="block py-[15px]">
                        {{ title }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<style lang="sass" scoped>
.router-link-active
    position: relative
    font-weight: 600
    &::after
        content: ''
        display: block
        position: absolute
        width: 21px
        height: 2px
        bottom: 0
        left: 0
        border-radius: 5px
        background-color: #FFF
</style>
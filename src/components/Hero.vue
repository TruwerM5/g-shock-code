<script setup>
const followList = [
    {
        id: 1,
        icon: './images/facebook.svg',
        alt: 'facebook'
    },{
        id: 2,
        icon: './images/pinterest.svg',
        alt: 'pinterest'
    },{
        id: 3,
        icon: './images/twitter.svg',
        alt: 'twitter'
    },{
        id: 4,
        icon: './images/instagram.svg',
        alt: 'instagram'
    },
]
</script>

<template>
    <div 
    class="relative hero min-h-[745px]  bg-right-bottom bg-contain bg-no-repeat bg-header 
    min-[400px]:bg-[right_0_bottom_-70px]
    min-[450px]:bg-[right_0_bottom_-100px]
    sm:min-h-fit sm:bg-[right_-150px_top_50%]
    lg:bg-[length:40%] lg:bg-right
    xl:min-h-[500px] xl:flex xl:items-center"
    style="background-image: url('./images/hero.png');">
        <div class="hero__content flex flex-col items-center py-[40px] px-[20px] text-center 
        sm:max-w-[65%] sm:items-start sm:text-left sm:pl-[80px] sm:relative
        lg:max-w-[40%]">
            <h1 class="hero__title font-orbitron font-medium text-2xl mb-[30px] uppercase leading-[50px]
               2xl:text-3xl 2xl:leading-[70px]">Absolute toughness</h1>
            <p class="hero__subtitle text-grey text-base mb-[40px] leading-[28px]">
                No matter what technology you prefer, the G-SHOCK always uses the very latest technology, and of course is always extremely tough!
            </p>
            <router-link to="/catalog" class="hero__btn primary-btn primary-btn_black mb-[30px]">Discover Now</router-link>
            <div class="follow w-[160px] flex flex-col
            lg:flex-col-reverse lg:h-full lg:absolute lg:left-[20px] lg:top-1/2 lg:-translate-y-1/2 lg:justify-end lg:w-[60px]">
                <span class="follow__title uppercase text-base mb-[20px] font-orbitron tracking-[2px] w-fit text-center mx-auto whitespace-pre
                lg:relative lg:left-[3px] lg:mb-0 lg:-bottom-[120px] lg:origin-top-left lg:-rotate-90
                lg:mx-0">follow us</span>
                <ul class="follow__list flex  justify-center gap-[15px]
                            sm:justify-start
                            lg:flex-col lg:w-fit">
                    <li class="follow__item" v-for="link in followList" :key="link.id">
                        <a href="#" class="follow__link w-[30px] h-[30px] flex 
                        items-center justify-center bg-white rounded-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)]">
                            <img :src="link.icon" :alt="link.alt">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>
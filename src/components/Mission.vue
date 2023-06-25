<template>
    <section class="mission flex flex-col md:flex-row md:items-center lg:min-h-[650px] bg-black">
        <div class="mission__img-wrapper flex-1 self-stretch">
            <img src="/images/mission-img.jpg" alt="G-Shock" class="mission__img h-full object-cover grayscale max-h-[250px] sm:max-h-full">
        </div>
        <div class="mission__content flex-1 self-center">
            <div class="px-[50px] py-[20px] max-w-[500px] mx-auto">
                <h2 class="heading text-center mb-[30px] text-white leading-[50px]">Our mission</h2>
                <p class="text text_light text-justify mb-[10px]">Over 30 years ago, a CASIO engineer won 
                    the battle against the laws of nature. He designed 
                    a watch that would resist centrifugal and impact forces, 
                    as well as high water pressure. Since then, the name 
                    G-SHOCK has become a byword for independence and pushing 
                    the limits.
                </p>
                <p class="text text_light text-justify mb-[30px]">
                    After causing a stir back in 1974 with its first digital 
                    wristwatches, CASIO has had a significant influence on the 
                    watch market since the 1980s with the development of the 
                    virtually indestructible G-SHOCK wristwatch. The first 
                    G-SHOCK, the DW5000, came onto the market in 1983. 
                    An unparalleled success story followed as the G-SHOCK 
                    models, with their corners and edges, became an 
                    international favourite among urban youth.
                </p>
                <router-link to="/history" class="primary-btn primary-btn_white mx-auto">Read More</router-link>
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>
.mission
    @media screen and (min-width: 768px)
        clip-path: polygon(95% 0, 100% 9%, 100% 100%, 54% 100%, 45% 89%, 0 89%, 0 0)

</style>
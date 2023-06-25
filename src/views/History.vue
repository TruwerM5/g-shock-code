<script setup>
const hisory = [
    {
        id: 1,
        img: './images/history-1.jpg',
        text: [
            `G-SHOCK was developed at a time when watches were still fragile instruments. It all began with a young CASIO engineer who dreamed of "designing a watch that would not break even when dropped".`,
            `After causing a stir back in 1974 with its first digital wristwatches, CASIO has had a significant influence on the watch market since the 1980s with the development of the virtually indestructible G-SHOCK wristwatch. The first G-SHOCK, the DW5000, came onto the market in 1983. An unparalleled success story followed as the G-SHOCK models, with their corners and edges, became an international favourite among urban youth.`,
            `The shock-proof G-SHOCK watches quickly became the epitome of robustness, innovation and multifunctionality. At last, enthusiasts could keep their wristwatches on while skateboarding or riding their BMX bikes. Falls and knocks are no problem for the G-SHOCK. Whether for everyday use, playing sport or under extreme outdoor conditions, G-SHOCK watches have been genuine all-rounders and reliable companions in every situation for almost 35 years. Today, G-SHOCK has earned the privilege of being worn by men who are not willing to accept limits.`
        ]
    }, {
        id: 2,
        img: './images/history-2.jpg',
        text: [
            `At the beginning of the 1980s, Kikuo Ibe was the leading watch designer for CASIO. In 1981 lbe founded a project team with just three members whose aim was to realise his vision of an indestructible watch. Their endeavours were focused on the creation of the Triple 10 concept. A vast range of materials was tried and tested as the shock resistance of the first prototypes was subjected to the most stringent requirements. But Ibe was still not completely satisfied, as even the hardest metals provided insufficient protection for the digital inner workings of the watches against knocks and other external influences. Despite months of hard work that pushed the team to its physical and mental limits, the goal remained a long way off...`,
            `At this time, Ibe was observing children playing in a park when he noticed something: "The internal workings of a bouncing rubber ball remain completely unaffected by impact," he thought. This observation led to his team developing a watch with a hollow design in which the interior module of the watch is stored in a manner akin to floating.`,
            `The long and difficult test phase took almost two years to complete. But after continuous optimisation work to the casing and various parts of the watch on more than 200 prototypes, the first shock-resistant G-SHOCK went on sale in 1983. Revolutionary ideas such as a "hollow" case design, all-round protection and cushioning of important parts were the cornerstones of the G-SHOCK’s toughness and were instrumental in realising the shock-resistant design that was to completely change the conventional view of watches and on which every G-SHOCK is based today.`
        ],
        class: 'flex-row-reverse'
    }, {
        id: 3,
        img: './images/history-3.jpg',
        text: [
            `A 10-year battery life, watertightness up to 10-bar water pressure and shock resistance from a drop height of up to 10 metres. These are the three original requirements of the Triple 10 concept. The stable shape and robust design resulted from the developers' desire to create an unbreakable watch. Since the market launch of the first G-SHOCK in 1983, the watches have been developed continuously without losing the unique basic design. And despite their exclusivity, the noble MT-G models exhibit the robustness typical of the G-SHOCK. The quartz movement of the stainless steel G-SHOCK is protected by the CASIO damping system, which has been perfected over almost 35 years and through which the G-SHOCK has gained its image as a virtually indestructible watch. The MR-G collection also has an impressive sophisticated finish: The watches have a casing and wristband made from high-grade titanium with a diamond-like carbon coating that renders them virtually scratch-proof.`
        ]
    }

]
</script>

<template>
    <section class="history">
        <h2 class="heading text-center mb-[30px] leading-[50px] ">G-SHOCK History</h2>
        <div class="md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto px-[15px] lg:px-0">
            <div class="history__top text-base  lg:text-md mb-[30px]">
                <p class="history__text">
                    Over 30 years ago, a CASIO engineer won the battle against the laws of nature. He designed a watch that would resist centrifugal and impact forces, as well as high water pressure. Since then, the name G-SHOCK has become a byword for independence and pushing the limits.
                </p>
                <p class="history__text">
                    Here you will learn more about the concept and development of the toughest watches in the world.
                </p>
            </div>
            <div class="grid grid-rows-3 gap-[20px]">
                <div v-for="item in hisory" 
                :key="item.id"
                class="md:h-full history__item  
                bg-no-repeat bg-cover bg-center flex md:items-center p-[20px] md:px-[40px] lg:p-[60px]" 
                :style="{backgroundImage: `url(${item.img})`}">
                
                <div class="relative z-10 h-fit">
                    <p v-for="text,i in item.text" :key="i" 
                    class="history__text text-md text-white">
                    {{ text }} </p>
                </div>  
            </div>
            </div>
            
        </div>

    </section>
</template>

<style lang="sass" scoped>
.history
    &__item
        position: relative
        &::after
            content: ''
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 100%
            display: block
            backdrop-filter: contrast(.3)
            z-index: 1
</style>
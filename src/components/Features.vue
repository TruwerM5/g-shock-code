<template>
    <section class="features p-[50px_60px_65px_60px] sm:px-[100px]">
        <h2 class="heading text-center mb-[30px]">Features</h2>
        <div class="features__inner">
            <div class="features__item features__item_1">
                <img src="/images/features-img.png" alt="G-Shock Watch" class="features__img w-full object-cover">
            </div>
            <div class="features__item features__item_2 text-center">
                <span class="features__indicator"></span>
                <h3 class="features__title font-medium text-md mb-[20px]">Mineral glass</h3>
                <p class="features__text text">The tough mineral glass resists scratching.</p>
            </div>
            <div class="features__item features__item_3 text-center">
                <span class="features__indicator"></span>
                <h3 class="features__title font-medium text-md mb-[20px]">Resin band</h3>
                <p class="features__text text">Synthetic resin is the ideal material 
                    for wrist straps thanks to its extremely durable and flexible properties.
                </p>
            </div>
            <div class="features__item features__item_4 text-center">
                <span class="features__indicator"></span>
                <h3 class="features__title font-medium text-md mb-[20px]">Waterproof</h3>
                <p class="features__text text">Perfect for free diving without scuba gear: 
                    the watch is water resistant up to 20 bar according to ISO 22810.</p>
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>
.features
    &__inner
        display: grid
        grid-template-rows: 1fr auto
        row-gap: 40px
        @media screen and (min-width: 768px)
            grid-template-columns: 1fr 2fr 1fr
            grid-template-rows: repeat(3, 1fr)
            align-items: center
            gap: 0
    &__item
        @media screen and (min-width: 768px)
            &_1
                grid-column: 2/3
                grid-row: 1/4
            &_3
                grid-column: 3/4
                grid-row: 2/3
            &_4
                grid-column: 1/2
                grid-row: 3/4
    &__item_1
        position: relative
        &::after, &::before
            content: ''
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            display: block
            border-radius: 50%
            z-index: -1
        &::after
            border: 1px solid rgba(55, 51, 63, 1)
            width: 80%
            height: 80%
        &::before 
            border: 1px solid rgba(55, 51, 63, 0.4)
            width: 100%
            height: 100%

    &__indicator
        position: relative
        display: block
        height: 14px
        width: 14px
        border-radius: 50%
        background-color: #5b6b78
        margin-inline: auto
        margin-block-end: 30px
        &::before, &::after
            content: ''
            position: absolute
            display: block
            left: 50%
            top: 50%
            transform: translate(-50%, -50%)
            background-color: inherit
            border-radius: 50%
        &::before
            width: 35px
            height: 35px
            opacity: 0.1
        &::after
            width: 24.5px
            height: 24.5px
            opacity: 0.4
        
</style>
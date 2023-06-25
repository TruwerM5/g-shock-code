<script setup>
import Hero from '../components/Hero.vue';
import Features from '../components/Features.vue';
import Mission from '../components/Mission.vue';
import Recommended from '../components/Recommended.vue';
</script>

<template>
    <Hero />
    <Features />
    <Mission />
    <Recommended>
        <template #Heading>Recommended for you</template>
    </Recommended>
</template>
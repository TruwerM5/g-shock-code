<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Cart from './components/Cart.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <main class="main relative top-[80px] flex-grow">
  <router-view></router-view>  
  </main>
  <Footer />
  <Cart />
</template>

<style scoped>

</style>

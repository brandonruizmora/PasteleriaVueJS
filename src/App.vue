<script setup>
import Navbar from './components/Navbar.vue';
import ClientModal from './components/ClientModal.vue';
import Footer from './components/Footer.vue';
import HomeModal from './components/HomeModal.vue';
import BakerModal from './components/BakerModal.vue';
</script>

<template>
  <Navbar />
  <HomeModal />
  <ClientModal />
  <BakerModal />
  <Footer />
</template>

<style>
@import "./assets/base.css";
</style>

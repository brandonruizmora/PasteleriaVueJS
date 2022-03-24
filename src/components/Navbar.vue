<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="navbar navbar-light bg-pink">
        <div class="container-fluid">
            <RouterLink to="/pastelero" class="btn border border-white text-white">Pastelero</RouterLink>
            <RouterLink to="/" class="navbar-brand mb-0 text-white">
                Pastelería Launch X
                <i class="bi bi-arrow-through-heart-fill"></i>
            </RouterLink>
            <RouterLink to="/cliente" class="btn border border-white text-white">Cliente</RouterLink>
        </div>
    </nav>
</template>
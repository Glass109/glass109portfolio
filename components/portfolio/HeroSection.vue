<script setup lang="ts"></script>

<template>
    <section class="flex flex-col md:flex-row justify-evenly items-center relative">
        <div class="absolute inset-x-0 top-0 pointer-events-none">
            <div class="absolute left-0 -top-20 w-full h-16 bg-[#00DAD1] mix-blend-difference"></div>
            <div class="absolute left-0 top-12 w-full h-16 bg-[#32DC00] mix-blend-difference"></div>
        </div>

        <div class="mt-16 text-center md:text-left">
            <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-black">RAÚL</h1>
            <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-black">DONDÉ</h1>
            <h3 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">desarrollador web</h3>
        </div>

        <div class="mix-blend-luminosity relative mt-8 md:mt-0">
            <img class="object-contain max-w-full" src="/Foto.png" alt="Mi foto">
            <img class="absolute top-16 drop-shadow-lg shadow-black animate-slow-spin" src="/star.svg" alt="">
        </div>
    </section>
</template>

<style scoped>
@keyframes slow-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
.animate-slow-spin { animation: slow-spin 10s linear infinite; }
</style>

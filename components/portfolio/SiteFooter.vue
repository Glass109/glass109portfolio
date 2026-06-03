<script setup lang="ts">
const messages = [
    'Esta página fué desarrollada con 3 Litros de Coca-Cola sin azucar en la sangre',
    'Este sitio no es apto para personas con alergia a los gatos (Dondé incluído)',
    'Raúl Dondé no tiene ninguna relación con la Galletera Yucateca "Dondé"',
    'Este sitio no usa cookies, pero si quieres una galleta, pídela en la sección de contacto',
    'Nos reservamos los derechos de venderle tu dirección IP al gobierno de Albania',
    'No me hago responsable del daño que puede producir los colores de este sitio web',
]
</script>

<template>
    <footer class="z-50 w-full fixed left-0 bottom-0 border-black border-t-4 bg-[#FF20B9]">
        <Vue3Marquee>
            <span v-for="(message, index) in messages" :key="index" class="mx-8">
                {{ message }}
            </span>
        </Vue3Marquee>
    </footer>
</template>

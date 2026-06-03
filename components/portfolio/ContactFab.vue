<script setup lang="ts">
defineProps<{onClick: () => void}>()
</script>

<template>
    <button
        type="button"
        class="p-2 rounded-full fixed right-4 bottom-20 md:bottom-8 flex items-center justify-center border-4 border-black gap-2 bg-white z-10 hover:scale-110 transition-transform"
        aria-label="Abrir buzón de contacto"
        @click="onClick"
    >
        <Icon size="2em" name="memory:message-text"/>
        <span class="font-bold italic text-2xl md:text-4xl hidden sm:inline">Buzón</span>
    </button>
</template>

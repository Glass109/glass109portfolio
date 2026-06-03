<script setup lang="ts">
const props = defineProps<{open: boolean}>()
const emit = defineEmits<{close: []}>()

const dialogRef = ref<HTMLDialogElement | null>(null)
const isOpen = computed(() => props.open)

watch(isOpen, (value) => {
    const el = dialogRef.value
    if (!el) return
    if (value && !el.open) el.showModal()
    if (!value && el.open) el.close()
})

const onClose = () => emit('close')
</script>

<template>
    <dialog
        ref="dialogRef"
        class="p-4 text-3xl open:flex justify-center flex-col border-4 border-black"
        style="box-shadow: .5em .5em 0 0 black"
        @close="onClose"
    >
        <b>📱 Teléfono:</b>
        <a href="tel:+529994247134">+52 999 424 7134</a>
        <small class="text-xs text-green-800">Whatsapp preferente</small>
        <hr>
        <b>📧 Correo:</b>
        <a href="mailto:glas109@gmail.com">Glas109@gmail.com</a>
        <hr>
        <button
            type="button"
            class="border-4 border-black mt-2 p-1 font-bold text-3xl bg-red-300 mx-auto hover:bg-red-100 hover:scale-110 transition-all"
            @click="onClose"
        >
            Cerrar
        </button>
    </dialog>
</template>

<style scoped>
dialog[open] {
    animation: comedown 1s forwards;
    position: absolute;
}
dialog > * {
    user-select: all;
}
@keyframes comedown {
    0%   { transform: translateY(-100%); opacity: 0; }
    100% { transform: translateY(0);     opacity: 1; }
}
</style>

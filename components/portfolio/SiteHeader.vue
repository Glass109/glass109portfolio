<script setup lang="ts">
type NavLink = {
    label: string
    to?: string
    external?: boolean
    action?: 'contact'
}

const props = defineProps<{
    onContactClick: () => void
}>()

const links: NavLink[] = [
    {label: 'Inicio',        to: '/'},
    {label: 'proyectos',     to: '/#presentation'},
    {label: 'github',        to: 'https://github.com/Glass109', external: true},
    {label: 'contacto',      action: 'contact'},
    {label: 'old_portfolio', to: '/oldportfolio'},
]

const isOpen = ref(false)
const close = () => { isOpen.value = false }

const handleClick = (link: NavLink) => {
    if (link.action === 'contact') props.onContactClick()
    close()
}
</script>

<template>
    <header class="sticky top-0 z-20 border-b-4 border-black bg-[#FF20B9]">
        <nav class="flex items-center justify-between px-4 py-2 md:hidden">
            <NuxtLink to="/" class="text-2xl font-bold text-white italic" @click="close">Inicio</NuxtLink>
            <button
                type="button"
                class="flex flex-col justify-center items-center size-10 border-2 border-black rounded bg-white"
                :aria-expanded="isOpen"
                aria-label="Abrir menú"
                @click="isOpen = !isOpen"
            >
                <span class="block w-6 h-0.5 bg-black mb-1"></span>
                <span class="block w-6 h-0.5 bg-black mb-1"></span>
                <span class="block w-6 h-0.5 bg-black"></span>
            </button>
        </nav>

        <ul v-show="isOpen" class="md:hidden flex flex-col items-stretch border-t-2 border-black bg-[#FF20B9]">
            <li v-for="link in links" :key="link.label">
                <NuxtLink
                    v-if="link.to"
                    :to="link.to"
                    :target="link.external ? '_blank' : undefined"
                    class="block w-full text-left px-4 py-3 text-2xl font-bold text-white italic border-b border-black/30 hover:bg-black/10"
                    @click="close"
                >
                    {{ link.label }}
                </NuxtLink>
                <button
                    v-else
                    type="button"
                    class="block w-full text-left px-4 py-3 text-2xl font-bold text-white italic border-b border-black/30 hover:bg-black/10"
                    @click="handleClick(link)"
                >
                    {{ link.label }}
                </button>
            </li>
        </ul>

        <ul class="hidden md:flex justify-evenly py-1">
            <li v-for="link in links" :key="link.label">
                <NuxtLink
                    v-if="link.to"
                    :to="link.to"
                    :target="link.external ? '_blank' : undefined"
                    class="text-4xl font-bold text-white italic px-2"
                >
                    {{ link.label }}
                </NuxtLink>
                <button
                    v-else
                    type="button"
                    class="text-4xl font-bold text-white italic px-2"
                    @click="props.onContactClick()"
                >
                    {{ link.label }}
                </button>
            </li>
        </ul>
    </header>
</template>

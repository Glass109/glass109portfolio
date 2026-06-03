<script setup lang="ts">
import WindowCard from '~/components/portfolio/WindowCard.vue';

const softSkills = [
    'Trabajo en equipo',
    'Comunicación',
    'Resolución de problemas',
    'Pensamiento crítico',
    'Creatividad',
    'Adaptabilidad',
    'Empatía',
    'Gestión del tiempo',
    'Liderazgo',
    'Toma de decisiones',
]

const workHistory = [
    {period: '2016 - 2020', role: 'Recepcionista en el café GREEN ZONE'},
    {period: '2021 - 2022', role: 'Operador de máquinas controladas numéricamente por computadora en Andromie'},
    {period: '2021 - 2022', role: 'Pintor electroestático en Narvi'},
    {period: '2024',        role: 'Desarrollador frontend en Digimob Tech'},
]

const languages = [
    'Español nativo',
    'Certificado Oxford Inglés C1',
    'Japonés básico (Pendiente a evaluación)',
]
</script>

<template>
    <section
        id="habilidades"
        class="container p-4 mx-0 lg:mx-auto bg-[#FFC9E5] border-4 border-black mb-4"
    >
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            <WindowCard title="Habilidades suaves" color="bg-yellow-300">
                <ul class="list-disc pl-6 space-y-1">
                    <li v-for="skill in softSkills" :key="skill">{{ skill }}</li>
                </ul>
            </WindowCard>

            <WindowCard title="Historial laboral" emoji="⚒️" color="bg-orange-300">
                <ul class="space-y-1">
                    <li v-for="entry in workHistory" :key="entry.period">
                        <b>{{ entry.period }}:</b> {{ entry.role }}
                    </li>
                </ul>
            </WindowCard>

            <WindowCard title="Idiomas" emoji="🌍" color="bg-blue-300">
                <ul class="space-y-1">
                    <li v-for="language in languages" :key="language">{{ language }}</li>
                </ul>
            </WindowCard>
        </div>
    </section>
</template>

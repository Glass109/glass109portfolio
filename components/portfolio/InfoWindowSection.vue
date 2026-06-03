<script setup lang="ts">
import WindowCard from '~/components/portfolio/WindowCard.vue';

const softSkills = [
    {name: 'Trabajo en equipo',       icon: 'memory:account'},
    {name: 'Comunicación',            icon: 'memory:chat'},
    {name: 'Resolución de problemas', icon: 'memory:bug'},
    {name: 'Pensamiento crítico',     icon: 'memory:compass'},
    {name: 'Creatividad',             icon: 'memory:lightbulb'},
    {name: 'Adaptabilidad',           icon: 'memory:rotate-clockwise'},
    {name: 'Empatía',                 icon: 'memory:heart'},
    {name: 'Gestión del tiempo',      icon: 'memory:clock'},
    {name: 'Liderazgo',               icon: 'memory:crown'},
    {name: 'Toma de decisiones',      icon: 'memory:target'},
]

const workHistory = [
    {
        period: '2021 - 2022',
        role: 'Operador de máquinas CNC',
        company: 'Andromie',
    },
    {
        period: '2024',
        role: 'Desarrollador Frontend',
        company: 'Digimob Tech',
    },
    {
        period: '2025',
        role: 'Desarrollador Full Stack en Laravel',
        company: 'Inadware Software',
    },
]

const languages = [
    {flag: '🇲🇽', name: 'Español',  level: ['Nativo']},
    {flag: '🇺🇸', name: 'Inglés',   level: ['C1 (Oxford)', 'B2 (TOEFL)']},
]
</script>

<template>
    <section
        id="habilidades"
        class="container p-4 mx-0 lg:mx-auto bg-[#FFC9E5] border-4 border-black mb-4"
    >
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            <WindowCard title="Habilidades suaves"  icon="memory:lightbulb"  color="bg-yellow-300">
                <ul class="space-y-2">
                    <li v-for="skill in softSkills" :key="skill.name"
                        class="flex items-center gap-3 p-2 border-2 border-black rounded bg-white/60">
                        <Icon :name="skill.icon" size="1.6em" class="shrink-0"/>
                        <span class="font-bold text-xl">{{ skill.name }}</span>
                    </li>
                </ul>
            </WindowCard>

            <WindowCard title="Historial laboral"  icon="memory:briefcase"  color="bg-orange-300">
                <ul class="space-y-3">
                    <li v-for="entry in workHistory" :key="entry.period + entry.company"
                        class="p-3 border-2 border-black rounded bg-white/60 flex flex-col gap-1">
                        <span class="self-start text-xs font-black px-2 py-0.5 bg-black text-white rounded-full">
                            {{ entry.period }}
                        </span>
                        <span class="font-black text-2xl leading-tight">{{ entry.role }}</span>
                        <span class="font-bold text-lg text-gray-700">@ {{ entry.company }}</span>
                    </li>
                </ul>
            </WindowCard>

            <WindowCard title="Idiomas"            icon="memory:book"       color="bg-blue-300">
                <ul class="space-y-4">
                    <li v-for="language in languages" :key="language.name"
                        class="flex items-center gap-4 p-2 border-2 border-black rounded bg-white/60">
                        <span class="text-7xl leading-none">{{ language.flag }}</span>
                        <div class="flex flex-col">
                            <span class="font-black text-3xl">{{ language.name }}</span>
                            <span v-for="lvl in language.level" :key="lvl"
                                  class="font-bold text-xl text-gray-700">{{ lvl }}</span>
                        </div>
                    </li>
                </ul>
            </WindowCard>
        </div>
    </section>
</template>

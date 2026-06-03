<script setup lang="ts">
import {skills, learning} from '~/dictionaries/skills';
import SkillIcon from '~/components/portfolio/SkillIcon.vue';
</script>

<template>
    <section
        id="presentation"
        class="container p-4 mx-0 lg:mx-auto bg-[#FFC9E5] border-4 border-black mb-4"
    >
        <div class="flex flex-col lg:flex-row gap-6">
            <div class="lg:w-1/2 font-extrabold">
                <p class="text-2xl sm:text-3xl md:text-4xl">Hola 👋,</p>
                <p class="text-2xl sm:text-3xl md:text-4xl">
                    mi nombre es
                    <i class="line-through text-gray-500">Raúl </i>
                    <b class="bg-yellow-200 inline-block animate-bounce">Dondé</b>
                </p>
                <p class="text-2xl sm:text-3xl md:text-4xl">¡Bienvenido a mi portafolio!</p>

                <figure class="hidden lg:block mt-6">
                    <img src="/yo.jpeg" alt="Yo mero" class="mx-auto">
                    <figcaption class="text-center w-full font-bold italic animate-pulse">Yo mero</figcaption>
                </figure>
            </div>

            <div class="w-full p-0 lg:p-4">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                    Suelo trabajar / he trabajado con las siguientes tecnologías
                </h2>
                <div class="flex flex-wrap justify-evenly">
                    <SkillIcon
                        v-for="skill in skills"
                        :key="skill.name"
                        :name="skill.name"
                        :icon="skill.icon"
                        :url="skill.url"
                    />
                </div>
            </div>
        </div>

        <div class="mt-8">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                Pero sigo aprendiendo cosas nuevas cada día
            </h2>
            <Vue3Marquee>
                <SkillIcon
                    v-for="skill in learning"
                    :key="skill.name"
                    :name="skill.name"
                    :icon="skill.icon"
                    :url="skill.url"
                />
            </Vue3Marquee>
        </div>
    </section>
</template>

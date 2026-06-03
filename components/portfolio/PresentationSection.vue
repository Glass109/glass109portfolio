<script setup lang="ts">
import {skillGroups, learning} from '~/dictionaries/skills';
import SkillIcon from '~/components/portfolio/SkillIcon.vue';
</script>

<template>
    <section
        id="presentation"
        class="container p-4 mx-0 lg:mx-auto bg-[#FFC9E5] border-4 border-black mb-4"
    >
        <div class="flex flex-col lg:flex-row gap-6 items-center">
            <div class="lg:w-1/2 font-extrabold">
                <p class="text-2xl sm:text-3xl md:text-4xl">Hola 👋,</p>
                <p class="text-2xl sm:text-3xl md:text-4xl">
                    mi nombre es
                    <i class="line-through text-gray-500">Raúl </i>
                    <b class="bg-yellow-200 inline-block animate-bounce">Dondé</b>
                </p>
                <p class="text-2xl sm:text-3xl md:text-4xl">¡Bienvenido a mi portafolio!</p>
            </div>

            <figure class="lg:w-1/2">
                <img src="/yo.jpeg" alt="Yo mero" class="mx-auto">
                <figcaption class="text-center w-full font-bold italic animate-pulse">Yo mero</figcaption>
            </figure>
        </div>

        <div class="mt-6 p-4 border-4 border-black bg-white/70"
             style="box-shadow: .3em .3em 0 0 black">
            <p class="text-base sm:text-lg font-medium leading-relaxed">
                Soy Raúl Dondé, estudiante de ingeniería en software en la
                Universidad Tecnológica Metropolitana. Me especializo en
                desarrollo full-stack con TypeScript, Vue.js, Kotlin
                Multiplatform y Rust. Me mueve construir productos que la
                gente realmente use y ame.
            </p>
        </div>

        <div class="mt-8">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                Suelo trabajar / he trabajado con las siguientes tecnologías
            </h2>
            <div class="space-y-5">
                <div v-for="group in skillGroups" :key="group.name">
                    <h3 class="text-lg sm:text-xl font-black mb-3">
                        <span class="inline-block border-2 border-black bg-white px-3 py-1"
                              style="box-shadow: .25em .25em 0 0 black">
                            {{ group.name }}
                        </span>
                    </h3>
                    <div class="flex flex-wrap justify-evenly">
                        <SkillIcon
                            v-for="skill in group.skills"
                            :key="skill.name"
                            :name="skill.name"
                            :icon="skill.icon"
                            :url="skill.url"
                        />
                    </div>
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

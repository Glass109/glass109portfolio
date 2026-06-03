<script setup lang="ts">
import {ProjectCardsDictionary} from '~/dictionaries/projectCards';
import ProjectCard from '~/components/portfolio/ProjectCard.vue';
</script>

<template>
    <section
        class="container p-4 mx-0 lg:mx-auto bg-[#FFC9E5] border-4 border-black mb-4"
        style="box-shadow: 8px 8px 0 0 black"
    >
        <h2 class="text-4xl sm:text-5xl md:text-6xl text-black font-black text-center underline italic mb-4">
            Proyectos
        </h2>
        <ProjectCard
            v-for="project in ProjectCardsDictionary"
            :key="project.title"
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :links="project.links"
        />
    </section>
</template>

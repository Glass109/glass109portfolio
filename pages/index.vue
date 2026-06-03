<script setup lang="ts">
import SiteHeader         from '~/components/portfolio/SiteHeader.vue'
import HeroSection        from '~/components/portfolio/HeroSection.vue'
import PresentationSection from '~/components/portfolio/PresentationSection.vue'
import ProjectsSection    from '~/components/portfolio/ProjectsSection.vue'
import InfoWindowSection  from '~/components/portfolio/InfoWindowSection.vue'
import ContactFab         from '~/components/portfolio/ContactFab.vue'
import ContactDialog      from '~/components/portfolio/ContactDialog.vue'
import SiteFooter         from '~/components/portfolio/SiteFooter.vue'

const isContactOpen = ref(false)
const openContact  = () => { isContactOpen.value = true }
const closeContact = () => { isContactOpen.value = false }
</script>

<template>
    <div>
        <audio id="hover_sound" src="/hover.wav"></audio>

        <SiteHeader :on-contact-click="openContact"/>

        <main class="bg-[#FF8ACD] p-0 lg:px-16 pb-24">
            <HeroSection/>
            <PresentationSection/>
            <ProjectsSection/>
            <InfoWindowSection/>
        </main>

        <ContactFab :on-click="openContact"/>
        <ContactDialog :open="isContactOpen" @close="closeContact"/>
        <SiteFooter/>
    </div>
</template>

<style>
* { font-family: Jost, sans-serif; }

a:hover {
    filter: drop-shadow(0 0 20px #0045FFFF);
    scale: 110%;
    transition: all .1s;
}
</style>

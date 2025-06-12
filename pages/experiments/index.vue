<script setup lang="ts">
import type { Component } from 'vue';
import ClickySwitch from '@/components/experiments/ClickySwitch.vue';
interface ExperimentSection {
  id: number;
  title: string;
  description: string;
  component: Component;
}
const experimentSections: ExperimentSection[] = [
  { id: 1, title: 'Clicky Switch', description: 'Un switch muy bonito y satisfactorio de encender', component: ClickySwitch },
];
</script>

<template>
  <main class="halftone min-h-screen">
    <div class="container mx-auto">
      <header class="title crystalcontainer">
        <p>Colección de experimentos y otras fregaderas que me gusta programar</p>
      </header>

      <section class="experiment-grid">
        <article v-for="experiment in experimentSections" :key="experiment.id" class="crystalcontainer">
          <header>
            <h2 class="font-bold text-2xl">{{ experiment.title }}</h2>
          </header>
          <div>
            <component :is="experiment.component" />
          </div>
        </article>
      </section>
    </div>
  </main>
</template>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  font-weight: bold;
}

.halftone {
  background-image:
    radial-gradient(circle at center, whitesmoke 0.25rem, transparent 0),
    radial-gradient(circle at center, azure 0.25rem, transparent 0);
  background-size: 1.3rem 1.3rem;
  background-position: 0 0, 0.65rem 0.65rem;
}

.crystalcontainer {
    background: linear-gradient(to bottom, #ffffff50, #f0f0f050, #ffffff50);
    border: 1px solid #ccc;
    padding: 1rem;
    box-shadow:
    4px 4px 2px rgba(0, 0, 0, 0.1),
    inset 4px 4px 4px rgba(255, 255, 255, 1);
  text-shadow: white 0 0 4px;

}
</style>
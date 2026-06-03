<script setup lang="ts">
import type {Skill} from '~/dictionaries/skills';

const props = defineProps<Skill>();
</script>

<template>
    <div class="grid place-content-center text-center p-4">
        <a :href="props.url" class="hover:z-50" target="_blank" rel="noopener">
            <Icon size="8em" :name="props.icon"/>
        </a>
        <b>{{ props.name }}</b>
    </div>
</template>

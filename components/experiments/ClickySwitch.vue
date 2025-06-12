<script setup lang="ts">
import { defineModel, onMounted } from 'vue';

const checked = defineModel({
    type: Boolean,
    default: false,
});

</script>

<template>
    <div>
        <label class="switch">
            <input type="checkbox" v-model="checked"s>
            <span class="slider"></span>
        </label>
    </div>
</template>

<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 22px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s cubic-bezier(0, 1, 0, 1);
    border-radius: 20px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 2px;
    background-color: white;
    transition: .4s cubic-bezier(0, 1, 0, 1);
    border-radius: 50%;
}

input:checked+.slider {
    background-color: #2196F3;
}

input:checked+.slider:before {
    transform: translateX(26px);
}
</style>
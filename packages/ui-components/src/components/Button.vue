<template>
    <button class="ui-button" v-bind="$attrs">
        {{ props.title }}
    </button>
</template>
  
<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();
</script>
  
<style scoped>
.ui-button {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
}
</style>
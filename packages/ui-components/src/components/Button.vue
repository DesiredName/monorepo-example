<template>
    <button class="ui-button" :class="{ [size]: true }" @click="onClick" v-bind="$attrs">
        {{ props.title }}
    </button>
</template>
  
<script setup lang="ts">
const props = withDefaults(defineProps<{
    title: string;
    size: 'x-small' | 'small' | 'normal' | 'big' | 'x-big'
}>(), {
    size: 'normal'
});

const emit = defineEmits<{
    (e: 'click', id: number): void;
}>();

const onClick = () => {
    emit("click", 1)
};
</script>
  
<style scoped>
.ui-button {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
}

.ui-button.x-small {
    font-size: 0.2rem;
}

.ui-button.small {
    font-size: 0.5rem;
}

.ui-button.normal {
    font-size: 1rem;
}

.ui-button.big {
    font-size: 1.5rem;
}

.ui-button.x-big {
    font-size: 2rem;
}</style>
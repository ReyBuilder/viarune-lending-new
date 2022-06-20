<template>
    <button :checked="modelValue" class="checkbox" @click="$emit('update:modelValue', !modelValue)">
        <div class="checkbox__check" />
    </button>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue']
}
</script>

<style scoped>
.checkbox:focus {
    outline-offset: 2px;
    outline: 1px solid #30203D;
}

.checkbox {
    display: flex;
    border: 1px solid rgba(68, 36, 183, 0.3);
    border-radius: 9px;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;
    background: transparent;
}

.checkbox__check {
    width: 13px;
    height: 9px;
    background-image: url("@/assets/check.svg");
    flex-grow: 0;
    flex-shrink: 0;
    opacity: 0;
}

.checkbox[checked="true"] .checkbox__check {
    opacity: 1;
}
</style>
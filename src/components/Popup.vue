<template>
    <Teleport to="body">
        <div class="popup" v-show="activeRef" @click="$emit('close')">
            <slot />
        </div>
    </Teleport>
</template>

<script>
import popupActiveStore from "@/stores/popup_active";
import { toRefs } from "vue";

export default {
    setup(props) {
        const activeRef = toRefs(props).active;
        const popupActive = popupActiveStore();
        return { activeRef, popupActive };
    },
    props: [
        'active'
    ],
    emits: ['close'],
    watch: {
        activeRef(v) {
            this.popupActive.set(v);
        }
    }
}
</script>

<style scoped>
.popup {
    position: relative;
    z-index: 2;
    min-height: 100vh;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
<template>
    <Teleport to="body">
        <div class="popup" v-show="activeRef">
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
    watch: {
        activeRef(v) {
            this.popupActive.set(v);
        }
    },
    emits: ['close']
}
</script>
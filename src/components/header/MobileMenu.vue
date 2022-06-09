<template>
    <div class="menu menu_mobile">
        <a class="menu__element menu__element_logo" href="/">
            <img src="@/assets/logo.svg">
        </a>
        <a class="menu__element" @click="popup = true">
            <img src="@/assets/burger.svg" />
        </a>
        <Popup :active="popup" @close="popup = !popup" />
    </div>
</template>

<script>
import Popup from "./Popup.vue";
import { ref } from "vue";

export default {
    components: {
        Popup,
    },
    setup() {
        const popup = ref(false);
        return { popup };
    }
};
</script>

<style scoped>
.menu {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 31px 38px 0 38px;
}

.menu__element {
    display: block;
    cursor: pointer;
    margin-top: 7px;
}

.menu__element_logo {
    margin-top: 0;
}

.menu__popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    background: #ffffff;
}

.menu_desktop {
    display: none;
}
</style>
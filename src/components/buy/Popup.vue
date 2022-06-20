<template>
    <Popup :active="active" @close="$emit('close')">
        <div class="popup" @click.stop>
            <slot></slot>
            <button class="popup__close" @click="$emit('close')"></button>
        </div>
    </Popup>
</template>

<script>
import Popup from "@/components/Popup.vue";

export default {
    components: {
        Popup
    },
    props: ['active'],
    emits: ['close']
}
</script>

<style scoped>
.popup {
    position: relative;
    max-width: 1000px;
    width: 100vw;
    background-repeat: no-repeat;
    background-position: top right;
    background-color: #ffffff;
    border: 1px solid rgba(68, 36, 183, 0.3);
    border-radius: 10px;
}

.popup__close {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    margin: 0;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    background-image: url("@/assets/popup_close.svg");
    width: 42px;
    height: 42px;
    background-position: 0 210px;
}

.popup__close:focus {
    background-position-y: 42px;
}

.popup__close:hover {
    background-position-y: 168px;
}

.popup__close:active {
    background-position-y: 126px;
}

@media screen and (min-width: 770px) and (max-width: 999px) {
    .popup {
        background-image: url("@/assets/components/buy/popup_bg_tablet.svg");
    }
}

@media screen and (min-width: 1000px) {
    .popup {
        background-image: url("@/assets/components/buy/popup_bg.svg");
    }
}

@media screen and (min-width: 770px) {
    .popup__wrapper {
        position: fixed;
        background: rgba(255, 255, 255, 0.5);
    }

    .popup {
        margin: 30px;
    }
}

@media screen and (max-width: 769px) {
    .popup__wrapper {
        position: absolute;
    }

    .popup {
        background-image: url("@/assets/components/buy/popup_bg_mobile.svg");
    }
}
</style>
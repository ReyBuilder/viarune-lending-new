<template>
    <Popup :active="active">
        <div class="popup__wrapper" @click="$emit('close')">
            <div class="popup" :class="{ 'popup_no-images': content.images == undefined }" @click.stop>
                <div class="popup__header">
                    <h3 class="popup__header__heading">{{ content.name }}</h3>
                    <button class="popup__header__close" @click="$emit('close')">
                        <img src="@/assets/popup_close.svg">
                    </button>
                </div>
                <div class="popup__about">
                    <h4 class="popup__about__heading">О курсе:</h4>
                    <p class="popup__about__content" v-html="content.text" />
                </div>
                <div class="popup__facts">
                    <h4 class="popup__about__heading">Чему научится студент на базовом курсе:</h4>

                </div>
            </div>
        </div>
    </Popup>
</template>

<script>
import Popup from '../Popup.vue';

export default {
    components: {
        Popup,
    },
    props: ['active', 'content'],
    emits: ['close']
}
</script>

<style scoped>
.popup__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100vh;

    z-index: 2;
    background: rgba(255, 255, 255, 0.5);
}

.popup {
    border: 1px solid rgba(68, 36, 183, 0.3);
    border-radius: 6px;
    background: #ffffff;
}

.popup__header__close {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
}

.popup__header {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px 0 40px;
}

.popup__header__heading {
    padding-top: 20px;
}

@media screen and (min-width: 750px) {
    .popup__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .popup {
        max-width: 1000px;
    }

    .popup_no-images {
        max-width: 660px;
    }
}
</style>
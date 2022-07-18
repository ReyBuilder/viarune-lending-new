<template>
    <Popup :active="active">
        <div class="popup">
            <button class="popup__close" @click="$emit('close')"></button>
            <div class="popup__menu">
                <div class="popup__menu__heading">Меню</div>
                <a @click.prevent="scroll('about')" class="popup__menu__element">О школе</a>
                <a @click.prevent="scroll('important')" class="popup__menu__element">Важно знать</a>
                <a @click.prevent="scroll('subjects')" class="popup__menu__element">Предметы</a>
                <a @click.prevent="scroll('register')" class="popup__menu__element">Вводное занятие</a>
            </div>
            <Footer class="popup__footer" />
        </div>
    </Popup>
</template>

<script>
import smoothScroll from "@/scripts/smoothScroll";
import Popup from "@/components/Popup.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
    components: {
        Popup,
        Footer,
    },
    props: [
        'active'
    ],
    emits: ['close'],
    methods: {
        async scroll(element_id) {
            this.$emit('close');
            await new Promise(r => setTimeout(r, 1));
            smoothScroll(element_id);
        }
    }
}
</script>

<style scoped>
.popup {
    padding: 65px 0 20px 38px;
    width: 100vw;
    background: #ffffff;
}

.popup__close {
    display: block;
    position: absolute;
    top: 30px;
    right: 29px;
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

.popup__menu__heading {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #17084D;
    margin-bottom: 17px;
}

.popup__menu__element {
    display: block;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #17084D;
    margin-bottom: 20px;
    cursor: pointer;
}

.popup__menu__element:last-child {
    margin-bottom: 0;
}

.popup__footer {
    padding: 0 !important;
    margin: 30px 0 0 0 !important;
}
</style>
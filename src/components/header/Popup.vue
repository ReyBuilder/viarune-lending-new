<template>
    <Popup :active="active">
        <div class="popup">
            <button class="popup__close" @click="$emit('close')">
                <img src="@/assets/popup_close.svg">
            </button>
            <div class="popup__menu">
                <div class="popup__menu__heading">Меню</div>
                <a href="#" class="popup__menu__element">О школе</a>
                <a href="#" class="popup__menu__element">Важно знать</a>
                <a href="#" class="popup__menu__element">Предметы</a>
                <a href="#" class="popup__menu__element">Вводное занятие</a>
            </div>
            <div class="popup__contact">
                <div class="popup__contact__heading">Свяжитесь с нами</div>
                <a class="popup__contact__element" href="tel:+79123456789">
                    <div class="popup__contact__element__icon">
                        <CallIcon />
                    </div>
                    <div class="popup__contact__element__content">
                        +7 912 345-67-89
                    </div>
                </a>
            </div>
            <div class="popup__socials">
                <a class="popup__socials__element" href="#"><img src="@/assets/socials/vk.svg" /></a>
                <a class="popup__socials__element" href="#"><img src="@/assets/socials/telegram.svg" /></a>
                <a class="popup__socials__element" href="#"><img src="@/assets/socials/whatsapp.svg" /></a>
                <a class="popup__socials__element" href="#"><img src="@/assets/socials/viber.svg" /></a>
            </div>
            <div class="popup__documents">
                <div class="popup__documents__heading">Документы</div>
                <a href="#" class="popup__documents__element">Политика конфиденциальности</a>
                <a href="#" class="popup__documents__element">Обработка персональных данных</a>
                <a href="#" class="popup__documents__element">Договор-оферта</a>
            </div>
            <div class="popup__info">
                <div class="popup__info__heading">Информация</div>
                <div class="popup__info__element">ИП "Семакин Александр Александрович"</div>
                <div class="popup__info__element">ИНН 182907717333</div>
            </div>
        </div>
    </Popup>
</template>

<script>
import CallIcon from "@/assets/CallIcon.vue";
import Popup from "@/components/Popup.vue";

export default {
    components: {
        Popup,
        CallIcon
    },
    props: [
        'active'
    ],
    emits: ['close']
}
</script>

<style scoped>
.popup {
    padding: 65px 0 0 38px;

    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    right: 0;
    background-color: #ffffff;
    min-height: 100vh;
}

.popup__close {
    position: absolute;
    top: 30px;
    right: 29px;
    border: 0;
    padding: 0;
    background: #ffffff;
    cursor: pointer;
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
}

.popup__contact {
    margin-top: 30px;
}

.popup__contact__heading {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #17084D;
    margin-bottom: 10px;
}

.popup__contact__element {
    display: flex;
}

.popup__contact__element__icon {
    margin: 0 5px;
}

.popup__contact__element__icon>* {
    fill: #17084D;
}

.popup__contact__element__content {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #17084D;
    margin-left: 3px;
}

.popup__socials {
    margin-top: 10px;
    display: flex;
}

.popup__socials__element {
    display: block;
    height: 32px;
    width: 32px;
    margin-right: 10px;
}

.popup__documents {
    margin-top: 30px;
}

.popup__documents__heading {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #17084D;
    margin-bottom: 7px;
}

.popup__documents__element {
    display: block;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-decoration-line: underline;
    color: #17084D;
    margin-bottom: 9px;
}

.popup__info {
    margin-top: 30px;
}

.popup__info__heading {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #17084D;
    margin-bottom: 10px;
}

.popup__info__element {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #17084D;
    margin-bottom: 8px;
}
</style>
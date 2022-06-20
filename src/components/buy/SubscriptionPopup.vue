<template>
    <Popup :active="active" @close="$emit('close')">
        <div class="popup">
            <h2 class="popup__heading">Выберите количество занятий</h2>
            <div class="popup__form">
                <div v-show="data.payAfter" class="popup__discount__wrapper">
                    <div class="popup__discount">Скидка -15%</div>
                </div>
                <h4 class="popup__form__heading">Выберите необходимое количество занятий и узнайте стоимость</h4>
                <div class="popup__form__content">
                    <div class="popup__form__content__element">
                        <h4 class="popup__form__content__element__text">
                            Количество занятий
                        </h4>
                        <div class="popup__form__content__element__content">
                            <input class="popup__form__content__element__content__input" type="text"
                                v-model="data.lessonsAmount" />
                            <button class="popup__form__content__element__content__plus"
                                @click="if (++data.lessonsAmount > 100) data.lessonsAmount = 100;" />
                            <button class="popup__form__content__element__content__minus"
                                @click="if (--data.lessonsAmount < 0) data.lessonsAmount = 0;" />
                        </div>
                    </div>
                    <div class="popup__form__content__element">
                        <h4 class="popup__form__content__element__text">Стоимость 1-го занятия</h4>
                        <div class="popup__form__content__element__content">{{ price + " ₽" }}</div>
                    </div>
                    <div class="popup__form__content__element">
                        <h4 class="popup__form__content__element__text">Стоимость абонемента</h4>
                        <div class="popup__form__content__element__content">{{
                                totalPrice + " ₽"
                        }}</div>
                    </div>
                </div>
                <div class="popup__form__payafter">
                    <Checkbox v-model="data.payAfter" class="popup__form__payafter__input" />
                    <div class="popup__form__payafter__text">Хочу занятия получить в рассрочку</div>
                </div>
                <Button @click="" buttonStyle="2" class="popup__form__button">
                    Записаться на вводный урок
                </Button>
            </div>
        </div>
    </Popup>
</template>

<script>
import smoothScroll from "@/scripts/smoothScroll";
import Popup from "./Popup.vue";
import Checkbox from "../Checkbox.vue";
import Button from "@/components/Button.vue";
import dataStore from "@/stores/data";

export default {
    setup() {
        const data = dataStore();
        return { data, smoothScroll };
    },
    components: {
        Popup,
        Checkbox,
        Button
    },
    computed: {
        clearPrice() {
            return this.data.lessonsAmount == 0 ? 0 : Math.ceil((-Math.pow((this.data.lessonsAmount - 1) / 40, 1.0 / 3) - (-2)) * 850);
        },
        price() {
            return Math.ceil(this.data.payAfter ? this.clearPrice : this.clearPrice * 0.85);
        },
        totalPrice() {
            return this.price * this.data.lessonsAmount;
        }
    },
    methods: {
        async gotoRegister() {
            this.$emit('close');
            await new Promise(r => setTimeout(r, 1));
            smoothScroll('register');
        }
    },
    props: ['active'],
    emits: ['close']
}
</script>

<style scoped>
.popup__heading {
    text-align: center;
}

.popup__discount {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 150%;
    text-align: right;
    color: #FFFFFF;
    background: #FF0000;
    border-radius: 63.0769px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
}

.popup__discount__wrapper {
    top: -24px;
    position: absolute;
}

.popup__form {
    position: relative;
    max-width: 449px;
    border: 1px solid rgba(68, 36, 183, 0.3);
    border-radius: 6px;
    box-sizing: border-box;
}

.popup__form__heading {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    margin-bottom: 20px;
    color: #17084D;
}

.popup__form__content__element__content {
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
}

.popup__form__content__element__content,
.popup__form__content__element__content__input {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    display: flex;
    align-items: center;
    color: #17084D;
}

.popup__form__content__element:nth-child(n+2) .popup__form__content__element__content,
.popup__form__content__element__content__input {
    border: 1px solid rgba(68, 36, 183, 0.3);
    border-radius: 10px;
    padding: 10px 20px;
    outline: none;
    margin: 0;
    background-color: transparent;
    box-sizing: border-box;
}

.popup__form__content__element:first-child .popup__form__content__element__content {
    padding: 0;
}

.popup__form__payafter {
    margin-top: 33px;
    display: flex;
    align-items: center;
}

.popup__form__payafter__text {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #17084D;
    margin-left: 10px;
}

.popup__form__content__element__content__plus,
.popup__form__content__element__content__minus {
    width: 25px;
    height: 25px;
    cursor: pointer;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    background: transparent;
    position: absolute;
    top: 13px;
}

.popup__form__content__element {
    margin-bottom: 20px;
}

.popup__form__content__element__content__plus {
    right: 55px;
    background-image: url("@/assets/components/buy/plus.svg");
}

.popup__form__content__element__content__minus {
    right: 20px;
    background-image: url("@/assets/components/buy/minus.svg");
}

.popup__form__button {
    margin-top: 30px;
    width: 100%;
}

@media screen and (min-width: 770px) {

    .popup__discount__wrapper {
        display: inline-block;
        right: -20px;
    }

    .popup__heading {
        margin: 38px 0;
    }

    .popup__form {
        margin-left: 50px;
        margin-bottom: 33px;
        padding: 30px 32px;
    }

    .popup__form__content__element {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .popup__form__content__element:nth-child(n+2) .popup__form__content__element__content,
    .popup__form__content__element__content__input {
        width: 200px;
    }
}

@media screen and (max-width: 769px) {

    .popup__discount__wrapper {
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .popup__discount {
        margin: auto;
    }

    .popup__heading {
        margin: 40px 0 54px 0;
    }

    .popup {
        height: 100vh;
        width: 100vw;
    }

    .popup__form {
        margin: 0 18px 40px 18px;
        padding: 30px 20px 20px 20px;
    }

    .popup__form__content__element:nth-child(n+2) .popup__form__content__element__content,
    .popup__form__content__element__content__input {
        width: 100%;
    }
}
</style>
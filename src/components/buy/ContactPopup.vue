<template>
    <Popup :active="active" @close="$emit('close')">
        <div class="popup">
            <h2 class="popup__heading">Остались вопросы? Спросите у нас</h2>
            <div class="popup__form">
                <input class="popup__form__input" type="text" v-model="question.name" placeholder="Имя фамилия" />
                <input class="popup__form__input" type="text" v-model="question.phoneEmail"
                    placeholder="Номер телефона или E-mail" />
                <textarea res class="popup__form__input" v-model="question.question"
                    placeholder="Ваш вопрос"></textarea>
                <div class="popup__form__check">
                    <Checkbox class="popup__form__check__check" v-model="question.check" />
                    <p class="popup__form__check__text">Я согласен с условиями обработки персональных данных</p>
                </div>
                <Button class="popup__form__button" buttonStyle="2">Задать вопрос</Button>
            </div>
        </div>
    </Popup>
</template>

<script>
import Popup from "./Popup.vue";
import Button from "@/components/Button.vue";
import Checkbox from "@/components/Checkbox.vue";
import questionStore from "@/stores/question";

export default {
    setup() {
        const question = questionStore();
        return { question };
    },
    components: {
        Popup,
        Button,
        Checkbox
    },
    props: ['active'],
    emits: ['close']
}
</script>

<style scoped>
.popup__heading {
    text-align: center;
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

.popup__form__input {
    margin-bottom: 20px;
    display: block;
    background: #FFFFFF;
    border: 1px solid rgba(68, 36, 183, 0.3);
    border-radius: 10px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #17084D;

    opacity: 0.6;
    padding: 14px 20px;
    resize: none;
    width: 100%;
    box-sizing: border-box;
}

textarea.popup__form__input {
    height: 148px;
}

.popup__form__check__text {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    color: #17084D;
    opacity: 0.6;
}

.popup__form__check {
    display: flex;
    margin-bottom: 18px;
}

.popup__form__check__check {
    margin-right: 10px;
}

.popup__form__button {
    width: 100%;
}

@media screen and (min-width: 770px) {
    .popup__heading {
        margin: 38px 0;
    }

    .popup__form {
        margin-left: 50px;
        margin-bottom: 33px;
        padding: 30px 32px;
    }
}

@media screen and (max-width: 769px) {
    .popup__heading {
        margin: 40px 0 54px 0;
    }

    .popup {
        width: 100vw;
    }

    .popup__form {
        margin: 0 18px 40px 18px;
        padding: 30px 20px 20px 20px;
    }
}
</style>
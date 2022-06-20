<template>
    <div class="form">
        <h3 class="form__heading">Приглашаем вас в нашу школу</h3>
        <Input ref="nameInput" class="form__input" v-model="name" placeholder="Имя Фамилия" type="text"
            regexp="[A-ZА-Я]{1}[a-zа-я]+ [A-ZА-Я]{1}[a-zа-я]+" error="Неверный формат. Введите только буквы." />
        <Input ref="phoneInput" class="form__input" v-model="phone" template="+7 ___ ___-__-__" type="text"
            regexp="[\d]{10}" error="Неверный формат. Введите только цифры." />
        <Input ref="emailInput" class="form__input" v-model="email" placeholder="E-mail" type="text" regexp=".+@.+\..+"
            error="Неверный формат почты" />
        <div class="form__subjects">
            <div v-for="subject in subjects.selected" :key="subject" class="form__subjects__element">
                <div class="form__subjects__element__content">{{
                        getSubjectName(subject)
                }}</div>
                <button @click="subjects.removeSelected(subject)" class="form__subjects__element__close" />
            </div>
        </div>
        <div class="form__checkbox">
            <Checkbox v-model="check" class="form__checkbox__element" />
            <p class="form__checkbox__element">
                Я согласен с условиями обработки персональных данных
            </p>
        </div>
        <Button :disabled="buttonBlocked" class="form__button" buttonStyle="1"
            @click="validateAndSend()">Записаться</Button>
    </div>
</template>

<script>
import { ref } from "vue";
import data from '@/assets/subjects.json';
import subjectsStore from '@/stores/subjects';

import Input from "./Input.vue";
import Button from "@/components/Button.vue";
import Checkbox from "@/components/Checkbox.vue";
export default {
    setup() {
        const name = ref('');
        const phone = ref('');
        const email = ref('');
        const check = ref(false);
        const subjects = subjectsStore();
        return { name, phone, email, check, subjects };
    },
    components: {
        Input,
        Button,
        Checkbox
    },
    methods: {
        getSubjectName(subject) {
            const f = data.find((e) => e.id == subject);
            return f != undefined ? f.name : '';
        },
        validateAndSend() {
            if (this.$refs.nameInput.valid && !this.$refs.nameInput.empty &&
                this.$refs.phoneInput.valid && !this.$refs.phoneInput.empty &&
                this.$refs.emailInput.valid && !this.$refs.emailInput.empty &&
                this.check) {
                console.log("LETS GO");
            }
        }
    },
    computed: {
        buttonBlocked() {
            return !this.check || !this.$refs.nameInput.valid || !this.$refs.phoneInput.valid || !this.$refs.emailInput.valid;
        }
    }
}
</script>

<style scoped>
.form {
    max-width: 449px;
    background: #ffffff;
    border: 1px solid rgba(68, 36, 183, 0.3);
    border-radius: 6px;
    padding: 30px 30px 30px 21px;
    box-sizing: border-box;
}

.form__heading {
    font-size: 18px;
    margin-bottom: 9px;
    text-align: center;
}

.form__input {
    margin-bottom: 2px;
}

.form__input:last-child {
    margin-bottom: 30px;
}

.form__subjects {
    margin-bottom: 10px;
}

.form__subjects__element {
    display: inline-flex;
    background: rgba(68, 36, 183, 0.1);
    border-radius: 20px;
    padding: 5px 10px;
    margin-right: 10px;
    margin-bottom: 10px;
}

.form__subjects__element>* {
    flex-grow: 0;
    flex-shrink: 0;
}

.form__subjects__element__content {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    user-select: none;
}

.form__subjects__element__close {
    width: 12px;
    height: 12px;
    background-image: url("@/assets/subjects__close.svg");
    padding: 0;
    outline: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    margin: 2px 0 0 5px;
}

.form__button {
    width: 100%;
    margin-top: 16px !important;
}

.form__checkbox {
    display: flex;
    justify-content: space-between;
    align-items: top;
}

.form__checkbox__element:first-child {
    margin-right: 10px;
    flex-grow: 0;
    flex-shrink: 0;
}

.form__checkbox__element:last-child {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    opacity: 0.4;
}
</style>
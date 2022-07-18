<template>
    <div class="footer">
        <div class="footer__element">
            <h4 class="footer__element__heading">Свяжитесь с нами</h4>
            <div class="footer__element__content">
                <Phone class="footer__element__content__element" />
                <Socials class="footer__element__content__element" />
            </div>
        </div>
        <div class="footer__element">
            <h4 class="footer__element__heading">Документы</h4>
            <div class="footer__element__content">
                <a target="_blank" class="footer__element__content__element" href="/personal-data.docx">Обработка
                    персональных
                    данных</a>
                <a target="_blank" class="footer__element__content__element" href="/oferta.docx">Договор-оферта</a>
            </div>
        </div>
        <div class="footer__element">
            <h4 class="footer__element__heading">Информация</h4>
            <div class="footer__element__content">
                <p class="footer__element__content__element">ИП "Семакин Александр Александрович"</p>
                <p class="footer__element__content__element">ИНН 182907717333</p>
            </div>
        </div>
    </div>
</template>

<script>
import Phone from "./Phone.vue";
import Socials from "./Socials.vue";

export default {
    components: {
        Phone,
        Socials
    }
}
</script>

<style scoped>
.footer {
    max-width: 1000px;
    padding: 0 60px;
}

.footer__element__heading {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #17084D;
    margin-bottom: 10px;
}

.footer__element__content__element {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #17084D;
    margin-bottom: 8px;
    display: block;
}

a.footer__element__content__element {
    text-decoration: underline;
}

.footer__element__content__element:last-child {
    margin-bottom: 0;
}

@media screen and (max-width: 769px) {
    .footer {
        display: block;
        margin: 38px auto;
        padding: 0 38px;
    }

    .footer__element {
        margin-bottom: 30px;
    }

    .footer__element:last-child {
        margin-bottom: 0;
    }
}

@media screen and (min-width: 770px) {
    .footer {
        display: flex;
        justify-content: space-between;
        margin: 160px auto 100px auto;
    }

    .footer__element {
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
    }
}
</style>
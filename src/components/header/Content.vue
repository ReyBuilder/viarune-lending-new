<template>
    <div class="content">
        <div class="content__heading1">Онлайн-школа</div>
        <div class="content__heading2">Viarune Study</div>
        <div class="content__text content__text_desktop">
            Мы работаем, чтобы сделать образование<br />комфортным, доступным и качественным.
        </div>
        <div class="content__text content__text_mobile">
            Мы работаем, чтобы сделать<br />образование комфортным,<br />доступным и качественным.
        </div>
        <div class="content__button__wrapper">
            <Button buttonStyle="1" class="content__button" @click="smoothScroll('subjects')">Выбрать предметы</Button>
        </div>
    </div>
</template>

<script>
import smoothScroll from "@/scripts/smoothScroll";
import Button from "@/components/Button.vue"

export default {
    setup() {
        return { smoothScroll };
    },
    components: {
        Button
    }
}
</script>

<style scoped>
.content__heading1 {
    position: relative;
    margin-bottom: -15px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    color: #ffffff;
}

.content__heading2 {
    font-family: 'Agency FB';
    font-style: normal;
    font-weight: bold;
    font-size: 66px;
    line-height: 79px;
    color: #FDCA4A;
}

.content__text {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #ffffff;
}

@media screen and (min-width: 770px) {
    .content__button {
        margin-top: 32px;
    }

    .content {
        margin-top: 199px;
    }

    .content__text_mobile {
        display: none;
    }
}

@media screen and (max-width: 769px) {

    .content__heading1,
    .content__heading2,
    .content__text {
        text-align: center;
    }

    .content {
        margin-top: 80px;
    }

    .content__text_desktop {
        display: none;
    }

    .content__button__wrapper {
        margin: 18px 38px 0 38px;
    }

    .content__button,
    .content__button>span {
        box-sizing: border-box;
        width: 100%;
    }
}
</style>
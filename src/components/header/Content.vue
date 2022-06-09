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
        <a class="content__button" href="#">
            Выбрать предметы
        </a>
    </div>
</template>

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

.content__button {
    background: linear-gradient(97.42deg, #FB7A0D 0.1%, #FB9C0D 115.11%);
    border-radius: 10px;

    display: inline-block;

    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    color: #ffffff;
}

@media screen and (min-width: 750px) {
    .content__button {
        padding: 19px 35px;
        margin-top: 34px;
    }

    .content {
        margin-top: 199px;
    }

    .content__text_mobile {
        display: none;
    }
}

@media screen and (max-width: 749px) {
    .content__button {
        width: 300px;
        height: 60px;
        margin: 20px auto 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

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
}
</style>
<template>
    <div id="register" class="register">
        <img src="@/assets/components/register/mobile_bg.svg" class="register__bg mobile">
        <img src="@/assets/components/register/bg.svg" class="register__bg desktop">
        <img src="@/assets/components/register/tablet_bg.svg" class="register__bg tablet">
        <div class="register__content__wrapper">
            <div class="register__content">
                <h2 class="register__content__heading">Записаться на вводный урок</h2>
                <Form class="register__content__form" />
            </div>
        </div>
    </div>
</template>

<script>
import Form from './Form.vue';

export default {
    components: {
        Form
    }
}
</script>

<style scoped>
.register__bg {
    display: block;
    width: 100%;
    object-fit: cover;
}

.register__content__wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.register {
    position: relative;
}

.register__content__heading {
    color: #ffffff;
    text-align: center;
}

@media screen and (min-width: 1000px) {
    .desktop {
        display: block !important;
    }

    .mobile {
        display: none !important;
    }

    .tablet {
        display: none !important;
    }

    .register {
        margin-top: 180px;
    }

    .register__content__heading {
        margin-bottom: 62px;
    }

    .register__content {
        flex-grow: 0;
        flex-shrink: 0;
        width: 1000px;
    }
}

@media screen and (max-width: 769px) {
    .desktop {
        display: none !important;
    }

    .mobile {
        display: block !important;
    }

    .tablet {
        display: none !important;
    }

    .register {
        margin-top: 130px;
    }

    .register__content__wrapper {
        justify-content: flex-start;
    }

    .register__content {
        margin-top: 110px;
        padding: 0 17px;
    }

    .register__content__form {
        margin: 40px auto 0 auto;
    }
}

@media screen and (min-width: 770px) and (max-width: 999px) {
    .desktop {
        display: none !important;
    }

    .mobile {
        display: none !important;
    }

    .tablet {
        display: block !important;
    }

    .register {
        margin-top: 230px;
    }

    .register__content__wrapper {
        justify-content: flex-start;
    }

    .register__content {
        margin-top: 150px;
    }

    .register__content__form {
        margin: 60px auto 0 auto;
    }
}
</style>
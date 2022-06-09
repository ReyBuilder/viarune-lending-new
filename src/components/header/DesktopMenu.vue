<template>
    <div class="menu menu_desktop">
        <a class="menu__element menu__logo" href="/">
            <img src="@/assets/logo.svg">
        </a>
        <a class="menu__element">О школе</a>
        <a class="menu__element">Важно знать</a>
        <a class="menu__element">Предметы</a>
        <a class="menu__element">Вводное занятие</a>
        <a class="menu__element menu__phone" href="tel:+79123456789">
            <div class="menu__phone__icon">
                <CallIcon />
            </div>
            <div class="menu__phone__content">
                <div class="menu__phone__text">+7 912 345-67-89</div>
                <div class="menu__phone__line" />
            </div>
        </a>
    </div>
</template>

<script>
import CallIcon from "@/assets/CallIcon.vue";

export default {
    components: {
        CallIcon
    },
}
</script>

<style scoped>
.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu__element {
    font-size: 16px;
    color: #ffffff;
    padding-bottom: 1px;
}

.menu__element:hover {
    padding-bottom: 0;
    border-bottom: 1px solid #f8840d;
}

.menu__logo:hover,
.menu__phone:hover {
    padding-bottom: 1px;
    border-bottom: none;
}

.menu__element:nth-child(n+2):hover {
    background: linear-gradient(97.42deg, #fb7a0d 0.1%, #fb9c0d 115.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.menu__phone__line {
    position: relative;
    right: -1px;
    margin-left: 2px;
    height: 1px;
}

.menu__phone:hover .menu__phone__line {
    background: #f8840d;
}

.menu__phone {
    display: flex;
}

.menu__phone__icon {
    height: 10px;
    margin-right: 1px;
}

.menu__phone__icon>* {
    fill: #ffffff;
}

.menu__phone__content__line {
    height: 1px;
    width: 100%;
    background: #ffffff;
    position: relative;
    right: -2px;
}

.menu__phone:hover .menu__phone__icon>* {
    fill: url(#hover);
}

.menu_mobile {
    display: none;
}
</style>
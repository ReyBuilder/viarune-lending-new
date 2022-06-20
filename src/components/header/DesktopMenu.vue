<template>
    <div class="menu menu_desktop">
        <a class="menu__element menu__logo" href="/">
            <img src="@/assets/logo.svg">
        </a>
        <a class="menu__element" href="#" @click.prevent="smoothScroll('about')"><span>О школе</span></a>
        <a class="menu__element" href="#" @click.prevent="smoothScroll('important')"><span>Важно знать</span></a>
        <a class="menu__element" href="#" @click.prevent="smoothScroll('subjects')"><span>Предметы</span></a>
        <a class="menu__element" href="#" @click.prevent="smoothScroll('register')"><span>Вводное занятие</span></a>
        <a class="menu__element menu__phone" href="tel:+79123456789">
            <span>
                <div class="menu__phone__icon">
                    <CallIcon />
                </div>
                <div class="menu__phone__content">
                    <div class="menu__phone__content__text">+7 912 345-67-89</div>
                    <div class="menu__phone__content__line__wrapper">
                        <div class="menu__phone__content__line" />
                    </div>
                </div>
            </span>
        </a>
    </div>
</template>

<script>
import smoothScroll from "@/scripts/smoothScroll";
import CallIcon from "@/assets/CallIcon.vue";

export default {
    components: {
        CallIcon
    },
    setup() {
        return { smoothScroll };
    }
}
</script>

<style scoped>
.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu__element>span {
    font-size: 16px;
    color: #ffffff;
    padding-bottom: 1px;
    cursor: pointer;
}

.menu__element:hover>span,
.menu__element:active>span {
    padding-bottom: 0;
    border-bottom: 1px solid #f8840d;
}

.menu__element {
    padding: 0 6px;
    text-decoration: none;
    border-radius: 10px;
}

.menu__element:focus {
    outline: 1px solid #FB7A0D;
    outline-offset: 4px;
}

.menu__phone:active>span,
.menu__phone:hover>span {
    padding-bottom: 1px;
    border-bottom: none;
}

.menu__element:nth-child(n+2):hover,
.menu__element:nth-child(n+2):focus,
.menu__element:nth-child(n+2):active {
    background: linear-gradient(97.42deg, #fb7a0d 0.1%, #fb9c0d 115.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.menu__phone:hover .menu__phone__content__line,
.menu__phone:active .menu__phone__content__line,
.menu__phone:focus .menu__phone__content__line {
    background: #f8840d;
}

.menu__phone>span {
    display: flex;
}

.menu__phone__icon {
    height: 10px;
    margin-right: 1px;
}

.menu__phone__icon>* {
    fill: #ffffff;
}

.menu__phone__content__line__wrapper {
    margin-left: 2px;
}

.menu__phone__content__line {
    height: 1px;
    background: #ffffff;
}

.menu__phone:hover .menu__phone__icon>*,
.menu__phone:active .menu__phone__icon>*,
.menu__phone:focus .menu__phone__icon>* {
    fill: url(#hover);
}

.menu_mobile {
    display: none;
}
</style>
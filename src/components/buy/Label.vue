<template>
    <div class="label">
        <div class="label__element">
            <h4 class="label__element__heading">Стоимость вводного занятия</h4>
            <div class="label__element__content">
                <div class="label__element__content__element">
                    <div class="label__element__content__element__price">
                        <div class="label__element__content__element__price__content">850 ₽</div>
                        <div class="label__element__content__element__price__discount">-15%</div>
                    </div>
                    <div class="label__element__content__element__oldprice">1 000 ₽</div>
                </div>
                <div class="label__element__content__element label__element__content__element_astronaut"></div>
            </div>
        </div>
        <div class="label__element">
            <Button buttonStyle="2" class="label__element__button" @click="$emit('subscription-click')">
                Рассчитать абонемент
            </Button>
            <Button buttonStyle="3" class="label__element__button" @click="$emit('contact-click')">
                Задать вопрос
            </Button>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
export default {
    emits: ["subscription-click", "contact-click"],
    components: { Button }
}
</script>

<style scoped>
.label {
    border: 1px solid rgba(68, 36, 183, 0.3);
    border-radius: 6px;
    padding: 20px;
}

.label__element {
    flex-grow: 0;
    flex-shrink: 0;
}

.label__element__button {
    display: block;
}

.label__element__button:first-child {
    margin-bottom: 10px;
}

.label__element__button {
    box-sizing: border-box;
    width: 100%;
}

.label__element__content__element__price {
    display: flex;
    align-items: flex-start;
}

.label__element__content__element__price__discount {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    background: #FF0000;
    border-radius: 40px;
    padding: 1px 6px;
    margin: 13px 0 0 16px;
    color: #ffffff;
}

.label__element__content__element__oldprice {
    font-weight: 700;
    font-size: 22px;
    line-height: 150%;
    color: #30203D;
    opacity: 0.6;
    text-decoration: line-through;
}

.label__element__heading {
    margin-bottom: 8px;
}

.label__element__heading {
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
}

.label__element__content__element__price {
    font-weight: 500;
    font-size: 42px;
    line-height: 150%;
}

@media screen and (max-width: 769px) {
    .label__element__content__element_astronaut {
        background-image: url("@/assets/astronaut-buy.svg");
        background-size: cover;
        width: 74px;
        height: 113px;
        margin-left: 33px;
    }

    .label__element__heading {
        text-align: center;
    }

    .label__element__content {
        display: flex;
    }
}

@media screen and (min-width: 770px) {

    .label__element:nth-child(2) {
        width: 288px;
    }

    .label {
        display: flex;
        justify-content: space-between;
    }
}
</style>
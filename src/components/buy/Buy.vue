<template>
    <div class="buy">
        <div class="buy__content">
            <div class="buy__content__header">
                <div class="buy__content__header__element">
                    <h2 class="buy__content__header__element__heading">Вводное занятие</h2>
                    <p class="buy__content__header__element__text">Попробуйте вводной занятие со скидкой. Продолжить
                        обучение после
                        вводного
                        занятия, вы сможете, только купив абонемент</p>
                </div>
                <div class="buy__content__header__element buy__content__header__element_astronaut"></div>
            </div>
            <div class="buy__content__label">
                <Label @subscription-click="subscriptionActive = true" @contact-click="contactActive = true" />
            </div>
        </div>
        <div class="buy__astronaut"></div>
        <SubscriptionPopup :active="subscriptionActive" @close="subscriptionActive = false" />
        <ContactPopup :active="contactActive" @close="contactActive = false" />
    </div>
</template>

<script>
import { ref } from "vue";
import Label from "./Label.vue";
import SubscriptionPopup from "./SubscriptionPopup.vue";
import ContactPopup from "./ContactPopup.vue";

export default {
    components: {
        Label,
        SubscriptionPopup,
        ContactPopup
    },
    setup() {
        const subscriptionActive = ref(false);
        const contactActive = ref(false);

        return { subscriptionActive, contactActive };
    }
}
</script>

<style scoped>
.buy {
    max-width: 1000px;
    margin: 200px auto 0 auto;
    display: flex;
    justify-content: space-between;
}

.buy__content__header__element__heading {
    margin-bottom: 40px;
}

.buy__content__header {
    margin-bottom: 28px;
}

@media screen and (max-width: 769px) {
    .buy {
        margin: 141px 18px 0 18px;
    }

    .buy__content__header {
        text-align: center;
        margin: 0 38px 30px 38px;
    }
}

@media screen and (min-width: 770px) and (max-width: 999px) {
    .buy__content__header {
        display: flex;
        align-items: flex-end;
    }

    .buy__content__header__element_astronaut {
        width: 174px;
        height: 265px;
        background-image: url("@/assets/astronaut-buy.svg");
        background-size: cover;
        flex-grow: 0;
        flex-shrink: 0;
        margin-left: 40px;
    }

    .buy {
        margin: 58px 60px 0 60px;
    }

    .buy__content__label {
        margin-right: 61px;
    }
}

@media screen and (min-width: 1000px) {
    .buy__astronaut {
        background-image: url("@/assets/astronaut-buy.svg");
        height: 488px;
        width: 321px;
        flex-shrink: 0;
        flex-grow: 0;
    }

    .buy__content__label {
        margin-right: 40px;
    }
}
</style>
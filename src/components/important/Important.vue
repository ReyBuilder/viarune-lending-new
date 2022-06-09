<template>
    <div class="important">
        <h2 class="important__heading">Важно знать родителям и ученикам</h2>
        <div class="important__content desktop">
            <div class="important__content__section">
                <p v-for="element in contentLeft" :key="element" class="important__content__section__text">{{
                        element
                }}</p>
            </div>
            <div class="important__content__image">
                <img src="@/assets/alien.svg">
            </div>
            <div class="important__content__section">
                <p v-for="element in contentRight" :key="element" class="important__content__section__text">{{
                        element
                }}</p>
            </div>
        </div>
        <div class="important__content mobile">
            <div class="important__content__section">
                <p v-for="element in content" :key="element" class="important__content__section__text">{{
                        element
                }}</p>
            </div>
            <div class="important__content__image" />
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const content = [
            'Урок длится 55 минут',
            'Площадки для проведения занятий: Zoom и Google Meet',
            'Занятия проводятся в удобное для вас время',
            'Сопровождение на всем пути обучения',
            'Помощь в решении сложных задач от опытного учителя/тренера',
            'Возможность оплатить абонемент в рассрочку',
            'Индивидуальный подход к ученику с учётом его уровня знаний',
            'Оригинальные домашние задания для отработки полученных знаний',
            ' Гибкая программа с учётом потребностей ученика'
        ];

        return { content };
    },
    computed: {
        contentLeft() {
            return this.content.slice(0, Math.ceil(this.content.length / 2));
        },
        contentRight() {
            const l = this.content.length;
            return this.content.slice(Math.ceil(l / 2), l);
        }
    }
}
</script>

<style scoped>
.important__heading {
    text-align: center;
}

.important__content__section__text::before {
    display: inline-block;
    content: ' ';
    width: 8px;
    height: 8px;
    background: #17084D;
    border-radius: 50%;
    margin-right: 10px;
    margin-bottom: 2px;
}

.important__content__section__text {
    margin-bottom: 30px;
}

@media screen and (min-width: 1000px) {
    .important {
        max-width: 1000px;
        padding: 0 60px;
        margin: 200px auto 0 auto;
    }

    .important__content {
        display: flex;
        justify-content: space-between;
        margin-top: 70px;
    }

    .important__content__section {
        margin-top: 18px;
    }

    .important__content__section__text {
        width: 300px;
        flex-grow: 0;
        flex-shrink: 0;
    }

    .important__content_mobile {
        display: none;
    }
}

@media screen and (min-width: 750px) and (max-width: 999px) {
    .important__content {
        margin-top: 70px;
        display: flex;
        justify-content: space-between;
    }

    .important {
        margin: 150px 60px 0 60px;
    }

    .important__content__section {
        width: 329px;
    }

    .important__content_desktop {
        display: none;
    }
}

@media screen and (max-width: 749px) {
    .important__content {
        margin-top: 40px;
    }

    .important__heading {
        margin: 0 36px;
    }

    .important__content__section {
        margin: 0 36px;
    }

    .important {
        margin-top: 70px;
    }

    .important__content__image {
        margin-top: 70px;
        height: 534px;
        text-align: center;
        background-image: url("@/assets/alien.svg");
        background-position: center center;
        background-repeat: no-repeat;
    }
}
</style>
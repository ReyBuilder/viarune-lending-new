<template>
    <div class="about" id="about">
        <div class="about__inner">
            <h2 class="about__heading">О школе</h2>
            <div class="about__content">
                <Card v-for="card in cards" :heading="card.heading" :icon="card.icon" :text="card.text"
                    :key="card.icon" />
            </div>
        </div>
        <div class="about__rocket about__rocket_mobile" />
        <div class="about__rocket about__rocket_desktop">
            <img src="@/assets/rocket.svg">
        </div>
    </div>
</template>

<script>
import Card from "./Card.vue";

export default {
    components: {
        Card,
    },
    setup() {
        const cards = [
            {
                heading: "Олимпиады и конференции",
                text: "Для наших учеников мы отслеживаем актуальные Олимпиады и конференции, в которых они принимают участие и занимают призовые места",
                icon: "1.svg"
            },
            {
                heading: "Опыт педагогов",
                text: "Работаем только с опытными педагогами, которые перед устройством проходят тщательный отбор",
                icon: "2.svg"
            },
            {
                heading: "Удобное расписание",
                text: "Мы подберём подходящее время занятий для вашего ребёнка в соответствии с вашим часовым поясом и ритмом жизни",
                icon: "3.svg"
            },
            {
                heading: "Заинтересованные преподаватели",
                text: "Труд наших преподавателей хорошо оплачивается, а также наши педагоги регулярно повышают свою квалификацию",
                icon: "4.svg"
            },
            {
                heading: "Качество уроков",
                text: "Для повышения качества уроков мы делаем записи, а после их анализирует команда преподавателей",
                icon: "5.svg"
            },
            {
                heading: "Техническое обеспечение",
                text: "Для обучения вам понадобится только компьютер, камера, микрофон и стабильный Интернет",
                icon: "6.svg"
            }
        ];
        return { cards };
    }
}

</script>

<style scoped>
.about__inner {
    max-width: 1000px;
    margin: auto;
    padding: 0 60px;
}

.about__heading {
    text-align: center;
    margin: 72px 0 70px 0;
}

.about__content {
    display: flex;
    flex-wrap: wrap;
}

.about__content>*:nth-child(2n-1) {
    margin-right: 22px;
}

.about__content>* {
    flex-basis: 34%;
    flex-shrink: 0;
    flex-grow: 1;
}

@media screen and (min-width: 1600px) {
    .about {
        position: relative;
    }

    .about__rocket {
        position: absolute;
        right: 0;
        top: -95px;
    }

    .about__rocket_mobile {
        display: none;
    }
}

@media screen and (max-width: 1599px) and (min-width: 770px) {
    .about__rocket {
        display: none;
    }
}

@media screen and (max-width: 769px) {
    .about__inner {
        padding: 0 38px;
    }

    .about__content {
        display: block;
    }

    .about__rocket_desktop {
        display: none;
    }

    .about__rocket {
        height: 537px;
        background-image: url("@/assets/rocket_mobile.svg");
        background-position: center center;
        background-repeat: no-repeat;
    }
}
</style>
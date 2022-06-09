<template>
    <div class="card">
        <div class="card__content">
            <div class="card__content__header">
                <h3 class="card__content__header__heading">{{ this.content.name }}</h3>
                <span class="age card__content__header__age">{{ this.content.age }}+</span>
            </div>
            <div class="card__content__facts">
                <div v-for="fact in facts" :key="fact" class="card__content__facts__element">
                    <div class="card__content__facts__element__dot" />
                    <p class="card__content__facts__element__text">{{ fact }}</p>
                </div>
            </div>
        </div>
        <div class="card__buttons">
            <button class="card__buttons__element button">
                <span>Выбрать предмет</span>
            </button>
            <button class="card__buttons__element button" @click="active = true">
                <span>Подробнее</span>
            </button>
        </div>
        <Popup :active="active" :content="content" @close="active = false"></Popup>
    </div>
</template>

<script>
import { ref } from 'vue';
import Popup from './Popup.vue';

export default {
    setup() {
        const active = ref(false);
        return { active };
    },
    props: ['content'],
    computed: {
        facts() {
            return this.content.facts.length > 4 ? this.content.facts.slice(0, 4) : this.content.facts;
        }
    },
    components: {
        Popup,
    }
}
</script>

<style scoped>
.card {
    padding: 10px 20px 20px 20px;
    border: 1px solid rgba(68, 36, 183, 0.3);
    border-radius: 6px;
    box-sizing: border-box;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card__content {
    display: flex;
    flex-direction: column;
}

.card__content__facts {
    flex-shrink: 1;
}

.card__content__header__heading {
    margin-top: 10px;
}

.card__content__header {
    display: flex;
    justify-content: space-between;
}

.card__content__facts {
    overflow: hidden;
    margin-top: 10px;
}

.card__content__facts__element {
    display: flex;
}

.card__content__facts__element__dot {
    width: 8px;
    height: 8px;
    display: inline-block;
    background: #17084D;
    border-radius: 50%;
    margin-top: 5px;
    margin-right: 10px;
    flex-grow: 0;
    flex-shrink: 0;
}

.card__buttons__element:nth-child(2)>span {
    border: 1px solid #4424B74D;
    box-sizing: border-box;
    background: linear-gradient(141.18deg, #30045C -8.71%, #58048B 104.75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.card__buttons__element:nth-child(2):hover>span {
    background: linear-gradient(97.42deg, #FB7A0D 0.1%, #FB9C0D 115.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    border: 1px solid #FB7A0D;
}

.card__buttons__element:nth-child(2):active>span {
    background: linear-gradient(97.42deg, #FB7A0D 0.1%, #FB9C0D 115.11%);
    text-fill-color: initial;
    -webkit-text-fill-color: initial;
    color: #ffffff;
}

.card__buttons__element:nth-child(2):active>span>span {
    color: #ffffff;
}

@media screen and (min-width: 1000px) {
    .card__buttons {
        margin-top: 14px;
        display: flex;
        justify-content: space-between;
    }

    .card__buttons__element {
        display: block;
        position: relative;
        margin-bottom: -4px;
    }

    .card__buttons__element:nth-child(1) {
        margin-left: -4px;
    }

    .card__buttons__element:nth-child(2) {
        margin-right: -4px;
    }
}

@media screen and (max-width: 999px) {
    .card__buttons {
        margin-top: 19px;
    }

    .card__buttons__element,
    .card__buttons__element>span {
        width: 100%;
        box-sizing: border-box;
    }

    .card__buttons__element:nth-child(1) {
        margin-bottom: 6px;
    }
}
</style>
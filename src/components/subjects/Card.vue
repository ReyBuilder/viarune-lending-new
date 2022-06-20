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
            <Button buttonStyle="2" @click="subjects.addSelected(content.id)" :selected="isSubjectSelected(content.id)"
                :disabled="isSubjectSelected(content.id)" class="card__buttons__element">{{
                        !isSubjectSelected(content.id) ? "Выбрать предмет" : "Предмет выбран"
                }}</Button>
            <Button buttonStyle="3" class="card__buttons__element" @click="active = true">Подробнее</Button>
        </div>
        <Popup :active="active" :content="content" @close="active = false" />
    </div>
</template>

<script>
import { ref } from 'vue';
import Popup from './Popup.vue';
import subjectsStore from '@/stores/subjects.js';
import Button from '@/components/Button.vue';

export default {
    setup() {
        const subjects = subjectsStore();
        const active = ref(false);
        return { active, isSubjectSelected: subjects.isSubjectSelected, subjects };
    },
    props: ['content'],
    computed: {
        facts() {
            return this.content.facts.length > 4 ? this.content.facts.slice(0, 4) : this.content.facts;
        }
    },
    components: {
        Popup,
        Button
    },
    emits: ['checkSubject']
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

@media screen and (min-width: 1000px) {
    .card__buttons {
        margin-top: 14px;
        display: flex;
    }

    .card__buttons__element {
        display: block;
        position: relative;
        flex-grow: 1;
        flex-basis: 0;
        padding: 16px 0 !important;
    }

    .card__buttons__element:first-child {
        margin-right: 20px;
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
<template>
    <div class="subjects" id="subjects">
        <div class="subjects__inner">
            <h2 class="subjects__heading">Наши предметы</h2>
            <div class="subjects__filters desktop">
                <Button buttonStyle="4" v-for="filter in filters" :key="filter" @click="setFilter(filter)"
                    :selected="isFilterActive(filter)" class="subjects__filters__element">
                    {{ filter }}
                </Button>
            </div>
            <div class="subjects__filters mobile">
                <div class="subjects__filters__group">
                    <Button buttonStyle="4" v-for="filter in mobileFilters1" :key="filter" @click="setFilter(filter)"
                        :selected="isFilterActive(filter)" class="subjects__filters__element">
                        {{ filter }}
                    </Button>
                </div>
                <Button buttonStyle="4" v-for="filter in mobileFilters2" :key="filter" @click="setFilter(filter)"
                    :selected="isFilterActive(filter)" class="subjects__filters__element">
                    {{ filter }}
                </Button>
            </div>
            <div class="subjects__cards desktop">
                <Card v-for="card in filteredContent" :key="card.name" :content="card" />
                <div v-if="filteredContent.length % 2 == 1"></div>
            </div>
            <div class="subjects__cards mobile">
                <Card v-for="card in shownContent" :key="card.name" :content="card" />
                <div v-if="shownContent.length % 2 == 1"></div>
            </div>
            <div class="subjects__show-more mobile">
                <Button buttonStyle="2" @click="this.shown = !this.shown" v-if="filteredContent.length > 4"
                    class="subjects__show-more__button">{{ !this.shown ? 'Показать больше' : 'Скрыть'}}
                </Button>
            </div>
        </div>
        <div class="subjects__nlo" />
    </div>
</template>

<script>
import { ref } from 'vue';
import Card from './Card.vue';
import Button from '@/components/Button.vue';

export default {
    setup() {
        const filters = ["Все", "Программирование", "Дизайн", "Подготовка к ОГЭ/ЕГЭ", "Школьные предметы"];
        const content = require("@/assets/subjects.json");
        const currentFilter = ref("Все");
        const shown = ref(false);

        return { filters, content, currentFilter, shown };
    },
    methods: {
        isFilterActive(filter) {
            return this.currentFilter == filter;
        },
        setFilter(filter) {
            this.currentFilter = filter;
        }
    },
    computed: {
        filteredContent() {
            if (this.currentFilter == "Все") {
                return this.content;
            }
            return this.content.filter((e) => {
                for (const i in e.tags) {
                    if (this.currentFilter == e.tags[i]) {
                        return true;
                    }
                }
                return false;
            });
        },
        shownContent() {
            return this.shown ? this.filteredContent : this.filteredContent.slice(0, 4);
        },
        mobileFilters1() {
            return this.filters.slice(0, 2);
        },
        mobileFilters2() {
            return this.filters.slice(2);
        }
    },
    components: { Card, Button }
}
</script>

<style scoped>
@media screen and (min-width: 1200px) {
    .subjects__nlo {
        width: 330px;
        height: 236px;
        background-image: url("@/assets/nlo.svg");
        position: absolute;
        top: -130px;
        left: 65px;
    }
}

.subjects {
    position: relative;
}

.subjects__heading {
    text-align: center;
}

.subjects__cards {
    margin-top: 22px;
}

.subjects__heading {
    margin-bottom: 60px;
}

.subjects__show-more__button {
    display: block !important;
    margin: 70px auto 0 auto !important;
}

.subjects__show-more__button {
    max-width: 300px !important;
}

@media screen and (max-width: 999px) {

    .subjects__cards.mobile,
    .subjects__show-more.mobile {
        display: block !important;
    }

    .subjects__cards.desktop {
        display: none !important;
    }
}

@media screen and (min-width: 1000px) {

    .subjects__cards>.mobile,
    .subjects__show-more>.mobile {
        display: none !important;
    }

    .subjects__cards>.desktop {
        display: block !important;
    }
}

@media screen and (min-width: 770px) {
    .subjects__cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .subjects__cards>* {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 40%;
    }

    .subjects__filters {
        position: relative;
        display: flex;
        overflow: auto;
        padding: 6px;
    }

    .subjects__inner {
        max-width: 1000px;
        padding: 0 60px;
        margin: 200px auto 0 auto;
    }

    .subjects__filters__element {
        margin-right: 16px !important;
        flex-shrink: 0;
        flex-shrink: 0;
        flex-grow: 0;
    }

    .subjects__filters__element:last-child {
        margin-right: 0 !important;
    }
}

@media screen and (max-width: 769px) {
    .subjects__inner {
        margin-top: 150px;
    }

    .subjects__filters {
        padding: 0 38px;
    }

    .subjects__cards {
        padding: 0 16px;
    }

    .subjects__filters__group {
        display: flex;
    }

    .subjects__filters__group .subjects__filters__element:first-child {
        width: auto;
        margin-right: 14px !important;
    }

    .subjects__filters__element {
        display: block;
        margin-bottom: 17px !important;
    }

    .subjects__filters__group .subjects__filters__element {
        margin-bottom: 18px;
    }

    .subjects__filters__element,
    .subjects__filters__element>span {
        width: 100%;
        box-sizing: border-box;
    }

    .subjects__show-more__button,
    .subjects__show-more__button>span {
        box-sizing: border-box;
        width: 100%;
    }

    .subjects__show-more {
        margin: 70px 36px 0 36px;
    }
}
</style>
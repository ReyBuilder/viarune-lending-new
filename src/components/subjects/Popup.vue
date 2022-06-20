<template>
    <Popup :active="active" @close="$emit('close')">
        <div class="popup" :class="{ 'popup_no-images': content.images == undefined }" @click.stop>
            <div class="popup__header">
                <h3 class="popup__header__heading">{{ content.name }}</h3>
                <button class="popup__header__close" @click="$emit('close')"></button>
            </div>
            <div class="popup__content">
                <div class="popup__content__about">
                    <h4 class="popup__content__about__heading">О курсе:</h4>
                    <p class="popup__content_about__content" v-html="content.text" />
                </div>
                <div class="popup__content__facts">
                    <h4 class="popup__content__facts__heading">Чему научится студент на базовом курсе:</h4>
                    <div class="popup__content__facts__content">
                        <div v-for="fact in content.facts" :key="fact" class="popup__content__facts__content__element">
                            <div class="popup__content__facts__content__element__dot"></div>
                            <p class="popup__content__facts__content__element__content">{{ fact }}</p>
                        </div>
                    </div>
                </div>
                <div class="popup__content__button__wrapper">
                    <Button buttonStyle="2" class="popup__content__button button"
                        :disabled="isSubjectSelected(content.id)"
                        @click="subjects.addSelected(content.id)">Записаться</Button>
                </div>
            </div>
        </div>
    </Popup>
</template>

<script>
import Popup from '../Popup.vue';
import subjectsStore from '@/stores/subjects';
import Button from '@/components/Button.vue';

export default {
    setup() {
        const subjects = subjectsStore();

        return { isSubjectSelected: subjects.isSubjectSelected, subjects };
    },
    components: {
        Popup,
        Button
    },
    props: ['active', 'content'],
    emits: ['close', 'checkSubject']
}
</script>

<style scoped>
.popup {
    background: #ffffff;
}

.popup__header__close {
    display: block;
    width: 42px;
    height: 42px;
    background-image: url("@/assets/popup_close.svg");
    background-position: 0 210px;
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.popup__header__close:focus {
    background-position-y: 42px;
}

.popup__header__close:hover {
    background-position-y: 168px;
}

.popup__header__close:active {
    background-position-y: 126px;
}

.popup__header {
    display: flex;
    justify-content: space-between;
}

.popup__content__about__heading,
.popup__content__facts__heading {
    font-weight: 500;
    font-size: 18px;
}

.popup__content__facts__content__element {
    display: flex;
    margin-bottom: 5px;
}

.popup__content__facts__content__element__dot {
    content: ' ';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #17084D;
    border-radius: 50%;
    margin-right: 10px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-top: 6px;
}


@media screen and (min-width: 770px) {
    .popup {
        border: 1px solid rgba(68, 36, 183, 0.3);
        border-radius: 6px;
    }

    .popup__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .popup {
        max-width: 1000px;
    }

    .popup_no-images {
        max-width: 660px;
    }

    .popup__content {
        margin: 25px 40px 0 40px;
    }

    .popup__header {
        padding: 20px 30px 0 40px;
    }

    .popup__header__heading {
        padding-top: 20px;
    }

    .popup__content__about__heading,
    .popup__content__facts__heading {
        margin-bottom: 9px;
    }

    .popup__content__about {
        margin-bottom: 25px;
    }

    .popup__content__button__wrapper {
        margin-top: 25px;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 40px;
    }
}

@media screen and (max-width: 769px) {
    .popup {
        height: 100vh;
    }

    .popup__header {
        margin: 20px 10px 0 20px;
    }

    .popup__content {
        margin: 25px 20px 0 20px;
    }

    .popup__content__about__heading,
    .popup__content__facts__heading {
        margin-bottom: 10px;
    }

    .popup__content__about {
        margin-bottom: 25px;
    }

    .popup__content__facts {
        margin-bottom: 40px;
    }

    .popup__content__button,
    .popup__content__button>span {
        width: 100%;
        box-sizing: border-box;
    }
}
</style>
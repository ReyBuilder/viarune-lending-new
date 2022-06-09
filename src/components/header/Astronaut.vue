<template>
    <div class="astronaut">
        <div class="astronaut__spacer-left" />
        <div class="astronaut__image astronaut__image_desktop">
            <img class="astronaut__image_desktop" src="@/assets/astronaut.svg" />
        </div>
        <div class="astronaut__image astronaut__image_mobile">
            <img class="astronaut__image_mobile" src="@/assets/astronaut_mobile.svg">
        </div>
        <div class="astronaut__spacer-right" />
    </div>
</template>

<style scoped>
@media screen and (min-width: 750px) {
    .astronaut {
        position: absolute;
        height: 881px;
        width: 100vw;
        left: 0;
        top: 0;
        display: flex;
        justify-content: space-between;
        z-index: 1;
    }

    .astronaut__spacer-left {
        min-width: 285px;
        flex-grow: 4;
    }

    .astronaut__spacer-right {
        flex-grow: 1;
    }

    .astronaut__image {
        flex-grow: 0;
        flex-shrink: 0;
    }

    .astronaut__image img {
        margin-top: 162px;
    }

    .astronaut__image_mobile {
        display: none;
    }
}

@media screen and (max-width: 749px) {
    .astronaut__image_desktop {
        display: none;
    }

    .astronaut__image_mobile {
        width: 363px;
        margin: auto;
    }
}
</style>
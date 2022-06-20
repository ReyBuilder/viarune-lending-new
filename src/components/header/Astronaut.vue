<template>
    <div class="astronaut">
        <div class="astronaut__spacer-left desktop" />
        <div class="astronaut__image" />
        <div class="astronaut__spacer-right desktop" />
    </div>
</template>

<style scoped>
.astronaut__image {
    background-repeat: no-repeat;
    background-position: center center;
}

@media screen and (min-width: 770px) {
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
        margin-top: 162px;
        flex-grow: 0;
        flex-shrink: 0;
        height: 585px;
        width: 678px;
        background-image: url("@/assets/astronaut.svg");
    }
}

@media screen and (max-width: 769px) {
    .astronaut__image {
        height: 370px;
        background-image: url("@/assets/astronaut_mobile.svg");
        background-repeat: no-repeat;
        background-position: center center;
    }
}
</style>
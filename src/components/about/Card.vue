<template>
    <div class="card">
        <div class="card__heading">
            <div class="card__heading__icon"><img :src="require('@/assets/cards/' + icon)" /></div>
            <h3 class="card__heading__text">{{ heading }}</h3>
        </div>
        <p class="card__text">{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: [
        'icon',
        'heading',
        'text'
    ]
}
</script>

<style scoped>
.card__heading {
    display: flex;
    align-items: center;
}

.card__heading__icon {
    margin: 0 21px 0 5px;
}

@media screen and (min-width: 1000px) {
    .card {
        height: 145px;
    }
}

@media screen and (min-width: 400px) and (max-width: 1000px) {
    .card {
        margin-bottom: 19px;
    }
}

@media screen and (max-width: 800px) {
    .card {
        margin-bottom: 30px;
    }
}
</style>
<template>
    <div class="main">
        <Header />
        <About />
        <Important />
        <Subjects />
    </div>
</template>

<script>
import Header from './header/Header.vue';
import About from './about/About.vue';
import Important from './important/Important.vue';
import Subjects from './subjects/Subjects.vue';

export default {
    components: {
        Header,
        About,
        Important,
        Subjects
    }
}
</script>

<style scoped>
.popupActive {
    overflow: hidden;
}
</style>
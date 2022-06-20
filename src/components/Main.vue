<template>
    <div class="main">
        <Header />
        <About />
        <Important />
        <Subjects />
        <Buy />
        <Register />
        <Footer />
    </div>
</template>

<script>
import Header from './header/Header.vue';
import About from './about/About.vue';
import Important from './important/Important.vue';
import Subjects from './subjects/Subjects.vue';
import Buy from './buy/Buy.vue';
import Register from './register/Register.vue';
import Footer from './footer/Footer.vue';

export default {
    components: {
        Header,
        About,
        Important,
        Subjects,
        Buy,
        Register,
        Footer
    }
}
</script>

<style scoped>
.popupActive {
    overflow: hidden;
}
</style>
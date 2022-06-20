<template>
    <a class="phone" href="tel:+79123456789">
        <div class="phone__icon">
            <CallIcon />
        </div>
        <div class="phone__content">+7 912 345-67-89</div>
    </a>
</template>

<script>
import CallIcon from "@/assets/CallIcon.vue";

export default {
    components: {
        CallIcon
    }
}
</script>

<style scoped>
.phone {
    display: flex !important;
    text-decoration: none !important;
}

.phone__icon svg {
    fill: #17084D;
    margin-right: 3px;
}

.phone__content {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #17084D;
    margin: 3px;
}
</style>
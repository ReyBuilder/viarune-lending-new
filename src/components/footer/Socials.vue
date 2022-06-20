<template>
    <div class="socials">
        <a class="socials__element socials__element_telegram" href="https://t.me/alexasemkain"></a>
        <a class="socials__element socials__element_whatsapp" href="https://wa.me/89131105966"></a>
        <a class="socials__element socials__element_viber" href="viber:chat?number=%2B9131105966"></a>
    </div>
</template>

<style scoped>
.socials {
    display: flex !important;
}

.socials__element {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    display: block;
}

.socials__element:last-child {
    margin-right: 0;
}

.socials__element_vk {
    background-image: url("@/assets/socials/vk.svg");
}

.socials__element_telegram {
    background-image: url("@/assets/socials/telegram.svg");
}

.socials__element_whatsapp {
    background-image: url("@/assets/socials/whatsapp.svg");
}

.socials__element_viber {
    background-image: url("@/assets/socials/viber.svg");
}
</style>
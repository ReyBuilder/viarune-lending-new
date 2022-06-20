<template>
  <div class="header__wrapper">
    <div class="header">
      <Menu />
      <Content />
      <img class="header__mouse" src="@/assets/mouse.svg">
    </div>
    <Astronaut />
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Content from "./Content.vue";
import Astronaut from "./Astronaut.vue";

export default {
  components: {
    Menu,
    Content,
    Astronaut,
  }
};
</script>

<style scoped>
.header__wrapper {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  user-select: none;
}

@media screen and (min-width: 770px) {
  .header__wrapper {
    height: 881px;
    background-image: url("@/assets/header_bg.svg");
  }

  .header {
    position: relative;
    z-index: 3;
    max-width: 1000px;
    padding: 38px 58px 0 58px;
    margin: auto;
  }
}

@media screen and (max-width: 769px) {
  .header__wrapper {
    background-image: url("@/assets/header_bg_mobile.svg");
    background-position: center bottom;
    height: 853px;
  }
}

@media screen and (min-width: 1000px) {
  .header__mouse {
    display: block;
    margin: 98px auto 0 auto;
    width: 44px;
    filter: drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.25));
  }
}

@media screen and (max-width: 999px) {
  .header__mouse {
    display: none;
  }
}
</style>
<template>
  <div class="menu__wrapper">
    <DesktopMenu class="menu_desktop" />
    <MobileMenu class="menu_mobile" />
  </div>
</template>

<script>
import DesktopMenu from './DesktopMenu.vue';
import MobileMenu from './MobileMenu.vue';

export default {
  components: {
    DesktopMenu,
    MobileMenu
  }
};
</script>

<style scoped>
@media screen and (min-width: 770px) {
  .menu_mobile {
    display: none;
  }
}

@media screen and (max-width: 769px) {
  .menu_desktop {
    display: none;
  }
}
</style>
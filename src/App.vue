<template>
  <Main />
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main,
  }
};
</script>

<style>
@import url(@/assets/fonts/fonts.css);

@media screen and (min-width: 770px) {
  body.popupActive {
    overflow: hidden;
  }
}

@media screen and (max-width: 769px) {
  body.popupActive {
    overflow: hidden;
  }
}

html,
body {
  width: 100%;
  margin: 0;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

#app {
  width: 100%;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h2 {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 500;
  font-size: 54px;
  line-height: 66px;
  letter-spacing: -0.03em;
  color: #1B0863;
  margin: 0;
}

h3 {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 120%;
  color: #1B0863;
  margin: 0;
}

h4 {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #1B0863;
  margin: 0;
}

span,
p {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1B0863;
  margin: 0;
}

span.age,
p.age {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  color: #1B0863;
  margin: 0;
}

@media screen and (min-width: 770px) {
  .mobile {
    display: none !important;
  }
}

@media screen and (max-width: 769px) {
  .desktop {
    display: none !important;
  }
}
</style>

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

body.popupActive {
  overflow: hidden;
}

body {
  margin: 0;
  overflow-x: hidden;
}

#app {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: #000000;
  text-decoration: none;
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

button.button {
  display: inline-block;
  padding: 4px;
  outline: none;
  border: none;
  margin: 0;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;

  background: #ffffff;
}

button.button:focus {
  padding: 3px;
  border: 1px solid #17084D;
}

button.button>span {
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  background: linear-gradient(141.18deg, #30045C -8.71%, #58048B 104.75%);
  padding: 16px 32px;
  display: inline-block;
  border-radius: 10px;
  user-select: none;
}

button.button:hover>span {
  background: linear-gradient(97.42deg, #FB7A0D 0.1%, #FB9C0D 115.11%);
}

button.button:active>span {
  background: #FB7A0D;
}

@media screen and (min-width: 750px) {
  .mobile {
    display: none !important;
  }
}

@media screen and (max-width: 749px) {
  .desktop {
    display: none !important;
  }
}
</style>

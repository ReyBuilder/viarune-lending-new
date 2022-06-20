<template>
    <button :selected="selected" :disabled="disabled" @click="$emit('click')" :buttonStyle="buttonStyle">
        <slot></slot>
    </button>
</template>

<script>
export default {
    emits: ['click'],
    props: ['disabled', 'buttonStyle', 'selected']
}
</script>

<style scoped>
button[buttonStyle="4"]:hover {
    border: 1px solid #FB7A0D;
    padding: 10px 29px;
}

button[buttonStyle="2"]:hover {
    background: linear-gradient(97.42deg, #FB7A0D 0.1%, #FB9C0D 115.11%);
}

button[buttonStyle="3"]:hover {
    border: 1px solid #FB7A0D;
    background: linear-gradient(97.42deg, #FB7A0D 0.1%, #FB9C0D 115.11%);
    -webkit-background-clip: text;
    background-clip: text;
}

button[buttonStyle="1"]:focus,
button[buttonStyle="2"]:focus,
button[buttonStyle="1"]:hover,
button[buttonStyle="2"]:hover {
    box-shadow: 1px 4px 35px rgba(248, 132, 13, 0.25);
}

button[buttonStyle="3"]:active {
    background: linear-gradient(97.42deg, #FB7A0D 0.1%, #FB9C0D 115.11%);
    box-shadow: 1px 4px 35px rgba(248, 132, 13, 0.25);
    text-fill-color: unset;
    -webkit-text-fill-color: unset;
    color: #ffffff;
}

button {
    display: inline-block;
    outline: none;
    border: none;
    margin: 0;
    cursor: pointer;
    user-select: none;
    background: transparent;
}

button:focus {
    outline: 1px solid #17084D;
}

button[buttonStyle="1"]:focus,
button[buttonStyle="2"]:focus,
button[buttonStyle="3"]:focus,
button[buttonStyle="4"] {
    outline-offset: 3px;
}

button[buttonStyle="1"],
button[buttonStyle="2"],
button[buttonStyle="3"] {
    outline-offset: 4px;
}

button[buttonStyle="1"],
button[buttonStyle="2"],
button[buttonStyle="3"] {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    border-radius: 10px;
}

button[buttonStyle="4"],
button[buttonStyle="4"][disabled] {
    background: rgba(68, 36, 183, 0.1);
    border-radius: 20px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #17084D;
    padding: 11px 30px;
}

button[buttonStyle="4"][selected="true"] {
    border: none;
    padding: 11px 30px;
    font-weight: 700;
    background: linear-gradient(97.42deg, #FB7A0D 0.1%, #FB9C0D 115.11%);
    color: #ffffff;
}

button[buttonStyle="1"],
button[buttonStyle="2"] {
    color: #ffffff;
}

button[buttonStyle="1"],
button[buttonStyle="1"][disabled] {
    background: linear-gradient(97.42deg, #FB7A0D 0.1%, #FB9C0D 115.11%);
    padding: 18px 36px;
}

button[buttonStyle="2"],
button[buttonStyle="2"][disabled] {
    background: linear-gradient(141.18deg, #30045C -8.71%, #58048B 104.75%);
    padding: 16px 32px;
}

button[buttonStyle="3"],
button[buttonStyle="3"][disabled] {
    background: linear-gradient(141.18deg, #30045C -8.71%, #58048B 104.75%);
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    padding: 14px 30px;
    border: 1px solid rgba(68, 36, 183, 0.3);
}

button[buttonStyle="1"]:active,
button[buttonStyle="2"]:active,
button[buttonStyle="2"][selected="true"] {
    background: #FB7A0D;
}

button[disabled] {
    opacity: 0.4 !important;
    box-shadow: none !important;
}

button[buttonStyle="2"][selected="true"] {
    opacity: 1 !important;
}
</style>
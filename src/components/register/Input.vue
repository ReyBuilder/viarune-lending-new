<template>
    <div class="input" :valid="valid" :empty="empty">
        <div class="input__inner">
            <input :type="type" :placeholder="placeholder" :value="inputData" @input="updateValue($event.target.value);"
                @focusout="validate(); emptyate();">
            <div class="input__inner__check" />
        </div>
        <div v-if="error" class=" input__error">
            {{ (!!valid || !!empty) ? '' : error }}
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const inputData = ref('');
        const valid = ref(true);
        const empty = ref(true);
        return { valid, inputData, empty };
    },
    props: ['error', 'regexp', 'placeholder', 'modelValue', 'type', 'template'],
    emits: ['update:modelValue'],
    methods: {
        validate() {
            if (this.regexp) {
                const match = this.modelValue.match(this.regexp);
                this.valid = (match == null) ? false : match[0].length == this.modelValue.length;
            }
            else {
                this.valid = true;
            }
        },
        emptyate() {
            this.empty = this.regexp && this.modelValue == '';
        },
        updateInput(v) {
            let newData;
            if (this.template) {
                newData = '';
                let vIndex = 0;
                let block = true;
                for (let i = 0; i < this.template.length; i++) {
                    if (vIndex >= v.length && !block) break;
                    if (this.template[i] == "_") {
                        if (vIndex < v.length) {
                            newData += v[vIndex];
                            vIndex++;
                        }
                        block = false;
                    }
                    else {
                        newData += this.template[i];
                    }
                }
            }
            else {
                newData = v;
            }
            this.inputData = '';
            this.inputData = newData;
        },
        updateValue(v) {
            let newData;
            if (this.template) {
                newData = '';
                const t = this.template.replaceAll("_", '');
                let lastCount = 0;
                for (; lastCount < this.template.length - 1; lastCount++) {
                    if (this.template[this.template.length - lastCount - 1] != '_') break;
                }
                let tIndex = 0;
                for (let i = 0; i < v.length; i++) {
                    if (t[tIndex] == v[i]) {
                        tIndex++;
                    } else {
                        if (tIndex == t.length && (lastCount-- <= 0)) break;
                        newData += v[i];
                    }
                }
            }
            else {
                newData = v;
            }
            if (newData == this.modelValue) {
                this.updateInput(newData);
            }
            this.$emit('update:modelValue', newData);
        }
    },
    watch: {
        modelValue(v) {
            this.updateInput(v);
        },
    },
    mounted() {
        if (this.template) {
            this.updateInput(this.modelValue);
        }
        this.updateValue(this.modelValue);
    }
}
</script>

<style scoped>
.input__inner {
    position: relative;
}

.input input {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: rgba(48, 32, 61, 0.6);
    padding: 17px 20px;
    background: #FFFFFF;
    border: 1px solid rgba(48, 32, 61, 0.6);
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    padding-right: 36px;
}

input:focus {
    outline: 1px solid #17084D;
    outline-offset: 2px;
}


input:active {
    border: 1px #FB7A0D solid;
}

.input[valid="false"][empty="false"] input {
    border: 1px solid #E13C3C;
    color: #E13C3C;
}


.input__inner__check {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 16px;
    height: 12px;
    background-image: url("@/assets/input_check.svg");
    user-select: none;
    opacity: 0;
}

.input[valid="true"][empty="false"] .input__inner__check {
    opacity: 1;
}

.input__error {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #E13C3C;
    margin-top: 4px;
    height: 14px;
}
</style>
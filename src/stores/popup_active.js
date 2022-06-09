import { defineStore } from "pinia";

export default defineStore('popup_active', {
    state() {
        return {
            value: false
        };
    },
    actions: {
        set(v) {
            if (v) {
                document.body.classList.add('popupActive');
            } else {
                document.body.classList.remove('popupActive');
            }
            this.value = v;
        }
    }
});
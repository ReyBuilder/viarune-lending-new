import { defineStore } from "pinia";

export default defineStore('popup_active', {
    state() {
        return {
            value: false,
            prevOverflow: -1
        };
    },
    actions: {
        set(v) {
            if (v) {
                this.prevOverflow = window.top.scrollY;
                document.body.classList.add('popupActive');
                document.getElementById("app").style.position = "fixed";
                document.getElementById("app").style.top = "-" + this.prevOverflow + "px";
                window.scrollTo(0, 0);
            } else {
                document.body.classList.remove('popupActive');
                document.getElementById("app").style.position = "static";
                document.getElementById("app").style.top = "0";
                window.scrollTo(0, this.prevOverflow);
            }
            this.value = v;
        }
    }
});
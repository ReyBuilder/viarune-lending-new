import { defineStore } from "pinia";

export default defineStore('data', {
    state() {
        return {
            name: '',
            phone: '',
            email: '',
            lessonsAmount: "0",
            payAfter: false
        };
    }
});
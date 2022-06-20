import { defineStore } from "pinia";

export default defineStore('question', {
    setup() {
        return {
            name: '',
            phoneEmail: '',
            question: '',
            check: false,
        };
    }
});
import { defineStore } from "pinia";

export default defineStore('subjects', {
    state() {
        return {
            selected: []
        };
    },
    actions: {
        addSelected(e) {
            this.selected.push(e);
        },
        removeSelected(e) {
            this.selected = this.selected.filter((s) => s != e);
        }
    },
    getters: {
        isSubjectSelected(state) {
            return (subjectId) => state.selected.find((e) => e == subjectId) != undefined;
        }
    }
});
import {reactive} from 'vue';

export const store = reactive({
    cards: [],
    meta: {},
    filterTarget: '',
});
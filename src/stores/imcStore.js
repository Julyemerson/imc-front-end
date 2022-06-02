import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'imc',
  state: () => ({
    step: 1,
  }),
  actions: {
    setStep(step) {
      this.step = step;
    },
  },
  getters: {},
});

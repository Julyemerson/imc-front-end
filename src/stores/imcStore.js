import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'imc',
  state: () => ({
    step: 1,
    user: {
      id: '',
      email: '',
      name: '',
      createdAt: '',
    },
    imcResult: {
      id: '',
      weight: '',
      height: '',
      imc: '',
      createdAt: '',
      userId: '',
    },
  }),
  actions: {
    setStep(step) {
      this.step = step;
    },
    setUser(user) {
      this.user = user;
    },
    setImcResult(imc) {
      this.imcResult = imc;
    },
  },
  getters: {},
});

import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'imc',
  state: () => ({
    user: {
      id: '',
      email: '',
      name: '',
      createdAt: '',
    },
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    setImcResult(imc) {
      this.imcResult = imc;
    },
    setUserEmail(email) {
      this.user.email = email;
    },
  },
  getters: {},
});

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
    imcResult: {
      id: '',
      weight: '',
      height: '',
      imc: '',
      createdAt: '',
      userId: '',
    },
    isLogged: false,
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    setImcResult(imc) {
      this.imcResult = imc;
    },
    setLogged() {
      this.isLogged = !this.isLogged;
    },
  },
  getters: {},
});

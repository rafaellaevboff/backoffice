import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      user: null
    }
  },
  mutations: {
    setUser(state, userData) {
      state.user = userData
    }
  },
  actions: {
    login({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/login', credentials)
          .then(response => {
            if (response.data.sucesso) {
              commit('setUser', response.data.user);
              resolve(response.data);
            } else {
              reject(new Error('Credenciais inválidas ou não autorizado'));
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    logout({ commit }) {
      commit('setUser', null);
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isLoggedIn(state) {
      return !!state.user;
    }
  }
})

export default store

import {axiosInstance} from 'boot/axios'

export default {
  namespaced: true,

  state: {
    authenticated: false,
    user: null
  },

  getters: {
    authenticated (state) {
      return state.authenticated
    },

    user (state) {
      return state.user
    },
  },

  mutations: {
    SET_AUTHENTICATED (state, value) {
      state.authenticated = value
    },

    SET_USER (state, value) {
      state.user = value
    }
  },

  actions: {
    async signIn ({ commit }, credentials) {
      await axiosInstance.get('/sanctum/csrf-cookie')
     let res= await axiosInstance.post('/api/login', credentials)

      commit('SET_AUTHENTICATED', true)
        commit('SET_USER', res.data)
    //  return dispatch('me')
    },

    async signOut ({ dispatch }) {
      await axiosInstance.post('/api/logout')
      commit('SET_AUTHENTICATED', false)
      commit('SET_USER', null)
     // return dispatch('me')
    },

    me ({ commit }) {
      return axiosInstance.get('/api/user').then((response) => {
        commit('SET_AUTHENTICATED', true)
        commit('SET_USER', response.data)
      }).catch(() => {
        commit('SET_AUTHENTICATED', false)
        commit('SET_USER', null)
      })
    }}
}
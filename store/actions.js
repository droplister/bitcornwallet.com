const actions = {
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('login', payload)
      resolve()
    })
  },
  unlock ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('unlock', payload)
      resolve()
    })
  }
}

export default actions
import createPersistedState from 'vuex-persistedstate'

export default ({ store, isHMR }) => {
  if (isHMR) return

  window.onNuxtReady(() => {
    createPersistedState({
      key: 'bitcorn_session',
      paths: [
        'plaintext',
      ],
      storage: window.sessionStorage,
    })(store)
  })
}
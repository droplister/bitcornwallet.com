import createPersistedState from 'vuex-persistedstate'

export default ({ store, isHMR }) => {
  if (isHMR) return

  window.onNuxtReady(() => {
    createPersistedState({
      key: 'bitcorn_storage',
      paths: [
        'encrypted',
        'encrypted.mnemonic',
      ]
    })(store)
  })
}
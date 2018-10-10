import CryptoJS from 'crypto-js'
import Mnemonic from 'bitcore-mnemonic'

const mutations = {
  createMnemonic(state) {
    state.rmnemonic = Mnemonic(Mnemonic.Words.ENGLISH).toString()
  },
  login(state, payload) {
    state.encrypted = payload.mnemonic
    state.rmnemonic = null
  },
  unlock(state, payload) {
    if(state.encrypted.trim().split(' ').length > 1) {
      state.encrypted = CryptoJS.AES.encrypt(state.encrypted, payload.password).toString()
      state.plaintext = CryptoJS.AES.decrypt(state.encrypted, payload.password).toString(CryptoJS.enc.Utf8)
      state.rmnemonic = null
    } else {
      state.plaintext = CryptoJS.AES.decrypt(state.encrypted, payload.password).toString(CryptoJS.enc.Utf8)
      state.rmnemonic = null
    }
  },
  logout(state, payload) {
    state.plaintext = null
  },
  reset(state, payload) {
    state.encrypted = null
    state.plaintext = null
  },
}

export default mutations
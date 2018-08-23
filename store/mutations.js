import Mnemonic from 'bitcore-mnemonic'

const mutations = {
  generateMnemonic(state) {
    state.randomMnemonic = Mnemonic(Mnemonic.Words.ENGLISH).toString()
  }
}

export default mutations
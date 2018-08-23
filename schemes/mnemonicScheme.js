export default class MnemonicScheme {
  constructor (auth, options) {
    this.$auth = auth
    this.name = options._name
  }

  async login ({ data }) {
    await this._logoutLocally()

    this.$auth.setToken(this.name, data.mnemonic)

    return this.$auth.setUser(data)
  }

  async fetchUser () {
    return this.$auth.$state.user
  }

  async _logoutLocally () {
    return this.$auth.reset()
  }
}
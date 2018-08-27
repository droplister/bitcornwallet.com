import Mnemonic from 'bitcore-mnemonic'

export default class MnemonicScheme {
  constructor (auth, options) {
    this.$auth = auth
    this.name = options._name
  }

  async login ({ data }) {
    await this.logout()
    var isValid = Mnemonic.isValid(data.mnemonic);
    if(isValid) {
      var encrypted_mnemonic = window.btoa(data.mnemonic);
      sessionStorage.setItem(mnemonic,data.mnemonic);
      this.$auth.setToken(this.name, encrypted_mnemonic);
      this.$auth.setUser(true);
      return this.$auth.redirect('home');
    }
    return;
  }

  async fetchUser () {
    return this.$auth.$state.user
  }

  async logout() {
    sessionStorage.removeItem(mnemonic);
    return this.$auth.redirect('login');
  }

  async _resetAuth () {
    sessionStorage.removeItem(mnemonic);
    return this.$auth.reset();
  }
}


class SessionStorage {
    constructor() {

    }

    get(key, defaultValue) {
        var value = sessionStorage.getItem(key, defaultValue);
        return value;
    }

    set(key, value) {
        sessionStorage.setItem(key, value);
    }

    remove(key) {
        sessionStorage.removeItem(key);
    }

    removeAll() {
        sessionStorage.clear()
    }

    IsJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
}

const storage = new SessionStorage();
const mnemonic = "mnemonic";
<template>
  <div>
    <div class="card-deck mb-3">
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h6 class="my-0 font-weight-normal">Log Into Your Wallet</h6>
        </div>
        <div class="card-body">
          <form class="login" @submit.prevent="login">
            <div class="row">
              <div class="col-md-9">
                <input type="password" class="form-control mb-3" v-model="mnemonic" placeholder="Enter your 12 word passphrase...">
              </div>
              <div class="col-md-3">
                <b-button block type="submit" class="mb-3" :variant="variant" :disabled="disabled">
                  <i class="fa fa-upload"></i> Login
                </b-button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      mnemonic: ''
    }
  },
  computed: {
    disabled: function () {
      return ! this.twelveWords
    },
    variant: function () {
      return this.twelveWords ? 'primary' : 'outline-primary'
    },
    twelveWords: function () {
      return this.mnemonic.trim().split(' ').length === 12
    },
  },
  methods: {
    login() {
      this.$store.dispatch('login', {mnemonic: this.mnemonic})
        .then(() => this.$router.replace({ path: 'unlock' }))
    }
  }
}
</script>
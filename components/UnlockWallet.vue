<template>
  <div>
    <div class="card-deck my-5 py-5">
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h6 class="my-0 font-weight-normal">{{ twelveWords ? 'Secure Your Wallet' : 'Unlock Your Wallet' }}</h6>
        </div>
        <div class="card-body">
          <form class="unlock" @submit.prevent="unlock">
            <div class="row">
              <div class="col-md-9">
                <input type="password" class="form-control mb-3" v-model="password" :placeholder="twelveWords ? 'Enter an additional password...' : 'Enter your password to unlock...'">
              </div>
              <div class="col-md-3">
                <b-button block type="submit" class="mb-3" :variant="variant" :disabled="disabled">
                  <i class="fa" :class="twelveWords ? 'fa-lock' : 'fa-unlock'"></i> {{ twelveWords ? 'Encrypt' : 'Unlock' }}
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
      password: ''
    }
  },
  computed: {
    disabled: function () {
      return ! this.strongPassword
    },
    variant: function () {
      return this.strongPassword ? 'primary' : 'outline-primary'
    },
    strongPassword: function () {
      return this.password.length >= 8
    },
    twelveWords: function () {
      return this.$store.state.encrypted && this.$store.state.encrypted.split(' ').length === 12
    },
  },
  methods: {
    unlock() {
      this.$store.dispatch('unlock', {password: this.password})
        .then(() => this.$router.replace({ path: 'wallet' }))
    }
  }
}
</script>
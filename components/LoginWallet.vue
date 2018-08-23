<template>
  <div>
    
    <div class="card-deck mb-3">
      <div class="card mb-4 shadow-sm">
        <div class="card-header">
          <h6 class="my-0 font-weight-normal">Login to Wallet</h6>
        </div>
        <div class="card-body">
          <form class="login" @submit.prevent="login">
            <div class="row">
              <div class="col-md-9">
                <input type="password" class="form-control mb-3" v-model="mnemonic" placeholder="Enter your 12 word passphrase...">
              </div>
              <div class="col-md-3">
                <b-button type="submit" class="mb-3" :variant="mnemonic.trim().split(' ').length !== 12 ? 'outline-primary' : 'primary'" :disabled="mnemonic.trim().split(' ').length !== 12" block>
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
  data () {
    return {
      mnemonic: ''
    }
  },
  methods: {
    async login() {
      this.error = null
      return this.$auth
      .loginWith('mnemonic', {
        data: {
          mnemonic: this.mnemonic,
        }
      })
      .catch(e => {
        this.error = e + ''
      })
    }
  }
}
</script>
<template>
  <div>
    <div class="wallet-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Bitcorn Wallet</h1>
      <p class="lead">Welcome to Version 0.1 (alpha edish)</p>
      <create-wallet/>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <login-wallet/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateWallet from '~/components/CreateWallet.vue'
import LoginWallet from '~/components/LoginWallet.vue'

export default {
  auth: false,
  components: {
    CreateWallet,
    LoginWallet
  }
}
</script>
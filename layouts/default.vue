<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal">&#x1f33d; Bitcorn Wallet</h5>
      <template v-if="$auth.$state.loggedIn">
        <nav class="my-2 my-md-0 mr-md-3">
          <a class="p-2 text-dark" href="#">Wallet</a>
          <a class="p-2 text-dark" href="#">Market</a>
          <a class="p-2 text-dark" href="#">Voting</a>
          <a class="p-2 text-dark" href="#" @click="logout">Logout</a>
        </nav>
      </template>
      <a class="btn btn-outline-primary" href="https://t.me/bitcorns" target="_blank">Support</a>
    </div>

    <nuxt/>

  </div>
</template>
<script>

export default {
  methods: {
    async logout() {
      return this.$auth.logout();
    }
  }
}
</script>
<style>
  html {
    font-size: 14px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  
  .welcome-header {
    max-width: 700px;
  }
  
  @media (min-width: 768px) {
    html {
      font-size: 16px;
    }
  }
</style>
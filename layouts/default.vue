<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal">&#x1f33d; <a href="/" class="text-dark">Bitcorn Wallet</a></h5>
      <template v-if="$store.state.encrypted">
        <nav class="my-2 my-md-0 mr-md-3">
          <a v-if="$store.state.plaintext" class="p-2 text-dark" href="/unlock" @click="logout"><i class="fa fa-lock"></i> Lock</a>
          <a v-if="!$store.state.plaintext" class="p-2 text-dark" href="/" @click="reset">Reset</a>
        </nav>
      </template>
      <a class="btn btn-outline-primary" href="https://t.me/bitcorns" target="_blank"><i class="fa fa-support"></i> Support</a>
    </div>

    <nuxt/>

  </div>
</template>

<script>

export default {
  methods: {
    logout() {
      this.$store.commit('logout')
    },
    reset() {
      this.$store.commit('reset')
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
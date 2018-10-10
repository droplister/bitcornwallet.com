<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <unlock-wallet/>
        </div>
      </div>
    </div>
    <pre>state = {{ $store.state }}</pre>
  </div>
</template>

<script>
import UnlockWallet from '~/components/UnlockWallet.vue'

export default {
  components: {
    UnlockWallet,
  }
}
</script>
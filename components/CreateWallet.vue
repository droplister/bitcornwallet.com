<template>
  <div>
    
    <b-btn v-b-modal.createWallet size="lg" class="mt-2 mb-5" variant="outline-success" @click="generateMnemonic">
      <i class="fa fa-id-card-o"></i> Create New Wallet
    </b-btn>

    <!-- Modal -->
    <b-modal id="createWallet" title="Create New Wallet" cancel-variant="outline-secondary" ok-variant="outline-success" no-close-on-backdrop no-close-on-esc ok-only centered>
      <p class="text-left">
        Passphrase generated: 
        <i class="fa fa-question-circle" v-b-tooltip title="Protect this password. It can be used to steal your funds!"></i>
        <a href="#" @click="generateMnemonic" class="ml-1">(refresh)</a>
      </p>
      <div class="row">
        <div class="col-md-10">
          <input ref="randomMnemonic" type="text" class="form-control mb-3" v-model="randomMnemonic">
        </div>
        <div class="col-md-2">
          <b-button class="mb-3" variant="outline-secondary" block v-b-tooltip title="Copy" @click="copyToClipboard">
            <i class="fa fa-clipboard"></i> <span class="d-md-none ml-2">Copy to Clipboard</span>
          </b-button>
        </div>
      </div>
      <div class="alert alert-warning py-2 px-2 mb-1">
        <small>These 12 words are your passphrase. You can think of them as the password to your blockchain bank account. If you lose this passphrase, you will lose access to your entire account and its funds. Keep it secret. Keep it safe!</small>
      </div>
    </b-modal>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  fetch({ store }) {
    store.commit('generateMnemonic')
  },
  computed: mapState([
    'randomMnemonic'
  ]),
  methods: {
    generateMnemonic() {
      this.$store.commit('generateMnemonic')
    },
    copyToClipboard() {
      this.$refs.randomMnemonic.select()
      document.execCommand('copy')
    },
  }
}
</script>
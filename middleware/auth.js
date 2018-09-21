export default function ({ store, redirect }) {
  if (! store.getItem('bitcorn_session.plaintext.mnemonic')) {
    return redirect('/')
  }
}
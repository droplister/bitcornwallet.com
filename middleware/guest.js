export default function ({ store, redirect }) {
  if (store.getItem('bitcorn_session.plaintext.mnemonic')) {
    return redirect('/wallet')
  }
  if (store.getItem('bitcorn_storage.encrypted.mnemonic')) {
    return redirect('/unlock')
  }
}
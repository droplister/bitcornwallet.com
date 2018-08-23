<template>
  <div>
    <pre>{{ state }}</pre>
    <pre>{{ $auth.token || '-' }}</pre>
    <b-btn-group>
      <b-button @click="$auth.fetchUser()">Fetch User</b-button>
      <b-button @click="$auth.logout()">Logout</b-button>
    </b-btn-group>
  </div>
</template>

<script>

export default {
  computed: {
    state() {
      return JSON.stringify(this.$auth.$state, undefined, 2)
    }
  }
}
</script>
<template>
  <div>
    <pre>{{ state }}</pre>
    <pre>{{ $auth.token || '-' }}</pre>
    <b-btn-group>
      <b-button @click="$auth.fetchUser()">Fetch User</b-button>
      <b-button @click="reset()">Reset</b-button>
      <b-button @click="$auth.logout()">Logout</b-button>
    </b-btn-group>
  </div>
</template>

<script>

export default {
  mounted() {
  },
  methods: {
    reset: function() {
      this.$auth.logout();
      this.$auth.reset();
    }
  },
  computed: {
    state() {
      return JSON.stringify(this.$auth.$state, undefined, 2)
    }
  }
}
</script>
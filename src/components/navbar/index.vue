<template>
  <div class="nav">
    <router-link tag="p" to="/">
      <a>Home</a>
    </router-link>
    <router-link tag="p" to="/list">
      <a>List</a>
    </router-link>
    <div class="sign-out">
      <amplify-sign-out v-if="signedIn" button-text="登出"></amplify-sign-out>
    </div>
  </div>
</template>

<script>
import { Auth, Hub } from 'aws-amplify'

export default {
  name: 'Navbar',
  data() {
    return {
      signedIn: false
    }
  },
  beforeCreate() {
    Hub.listen('auth', data => {
      const { payload } = data
      if (payload.event === 'signIn') {
        this.signedIn = true
        this.$router.push('/list')
      }
      if (payload.event === 'signOut') {
        this.signedIn = false
        this.$router.push('/auth')
      }
    })
    Auth.currentAuthenticatedUser()
      .then(() => {
        this.signedIn = true
      })
      .catch(() => (this.signedIn = false))
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  background-color: #ff9900;
  padding: 0 1rem;
  & p {
    padding: 0px 30px 0px 0px;
    font-size: 16px;
    p:hover {
      opacity: 0.7;
    }
  }
  & p a {
    color: #fff;
    text-decoration: none;
    &:hover,
    &:active {
      color: #000;
    }
  }
  .sign-out {
    line-height: 3.2em;
  }
}
</style>

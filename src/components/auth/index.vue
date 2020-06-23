<template>
  <div class="auth">
    <amplify-authenticator username-alias="email">
      <amplify-sign-up
        slot="sign-up"
        username-alias="email"
        :form-fields.prop="formFields"
        header-text="创建一个新帐户"
        submit-button-text="注册"
      ></amplify-sign-up>
      <amplify-sign-in
        slot="sign-in"
        username-alias="email"
        :form-fields.prop="formFields"
        header-text="登录到您的帐户"
        submit-button-text="登录"
        :handle-submit="onSubmints"
      ></amplify-sign-in>
    </amplify-authenticator>
  </div>
</template>

<script>
import Amplify, { Auth, Hub, API } from 'aws-amplify'

export default {
  name: 'Auth',
  data() {
    return {
      formFields: [
        {
          type: 'email',
          label: '电子邮箱',
          placeholder: '请输入电子邮箱',
          required: true
        },
        {
          type: 'password',
          label: '密码',
          placeholder: '请输入密码',
          required: true
        }
      ]
    }
  },
  mounted() {
    Hub.listen('auth', data => {
      const { payload } = data
      if (payload.event === 'signIn') {
        this.$router.push('/list')
      }
    })
  },
  methods: {
    onSubmints(event) {
      console.log('cat event:', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  min-height: 98vh;
  justify-content: center;
  align-items: center;
}
</style>

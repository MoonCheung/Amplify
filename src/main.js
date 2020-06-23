import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@aws-amplify/ui-vue'
import Amplify from 'aws-amplify'

Vue.config.productionTip = false

Amplify.configure({
  aws_project_region: 'ap-southeast-2',
  aws_cognito_identity_pool_id: 'ap-southeast-2:dbb34c1e-6260-4bdf-9c08-a502ae9e9946',
  aws_cognito_region: 'ap-southeast-2',
  aws_user_pools_id: 'ap-southeast-2_Oswc4Z75E',
  aws_user_pools_web_client_id: 'u5bts530qo5ftsfr4d8e338nc',
  aws_content_delivery_bucket: 'maji-dev-buckets',
  aws_content_delivery_bucket_region: 'ap-southeast-2',
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'ap-southeast-2:dbb34c1e-6260-4bdf-9c08-a502ae9e9946',
    // REQUIRED - Amazon Cognito Region
    region: 'ap-southeast-2',
    // OPTIONAL - Hosted UI configuration
    oauth: {
      domain: 'maji-dev.auth.ap-southeast-2.amazoncognito.com',
      scope: ['openid', 'email'],
      redirectSignIn: 'maji://',
      redirectSignOut: 'maji://'
    }
  },
  Storage: {
    AWSS3: {
      bucket: 'maji-dev-buckets', //REQUIRED -  Amazon S3 bucket
      region: 'ap-southeast-2' //OPTIONAL -  Amazon service region
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

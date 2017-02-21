
export default [
  {
    path: '/demo',
    component: resolve => {
      require.ensure(['./index.vue'], () => {
        resolve(require('./index.vue'))
      }, 'demo')
    }
  },
  {
    path: '/tree',
    component: resolve => {
      require.ensure(['./tree.vue'], () => {
        resolve(require('./tree.vue'))
      }, 'demo')
    }
  },
  {
    path: '/wifi',
    component: resolve => {
      require.ensure(['./wifi.vue'], () => {
        resolve(require('./wifi.vue'))
      }, 'demo')
    }
  }
]

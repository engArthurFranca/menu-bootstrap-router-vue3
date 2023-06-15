const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/menu-bootstrap-router-vue3/'
    : '/'
})
console.log(process.env.NODE_ENV)

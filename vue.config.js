// 'use strict'
// const merge = require('webpack-merge')
// const prodEnv = require('./prod.env')
// const proxy = require('http-proxy-middleware');
//
module.exports = {
  devServer: {
    proxy: 'http://localhost:9090'
  }
}


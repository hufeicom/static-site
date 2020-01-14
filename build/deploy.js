const webpack = require("webpack")

const HttpPush = require('webpack-http-push')
const extReg = /\.(js|css|map|json|jpe?g|gif|png|bmp|svg|ico|eot|ttf|woff2?|otf|html)$/i

const config = require('./webpack.dev')

config.plugins.push(new HttpPush({
    receiver: `http://10.60.0.112:7999/okay-upload`,
    to: `/xdfapp/www/xin.static.fe.xk12.cn/test`,
    include: [extReg],
    exclude: []
}))

webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        // 在这里处理错误
        throw(err)
    } else {
        console.log('deploy success!!!')
    }
});
const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const ZipWebpackPlugin = require('zip-webpack-plugin')
const extReg = /\.(js|css|map|json|jpe?g|gif|png|bmp|svg|ico|eot|ttf|woff2?|otf|html)$/i

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimize:true
    },
    plugins: [
        new ZipWebpackPlugin({
            path: path.join(__dirname, '../', 'dist'),
            filename: 'student-h5.static',
            extension: 'zip',
            include: [ extReg ],
            exclude:  [ /\.map$/i, /manifest\.json$/i ]
        }),
        new ZipWebpackPlugin({
            path: path.join(__dirname, '../', 'dist'),
            filename: 'student-h5.page',
            extension: 'zip',
            include: [ /^\.\/page.*\.html$/i ],
            exclude: []
        })
    ]
})
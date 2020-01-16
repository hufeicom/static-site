const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries") 

const extractCSS = new ExtractTextPlugin('assets/[name]_[hash:7].css')
const extractSCSS = new ExtractTextPlugin('assets/[name]_[hash:7].css')

const commonEntry = {
    reset: "./src/components/common/reset.css",
    theme: "./src/components/common/theme.scss"
}

let entries = getEntries()
if(!entries.length){
    throw(new ReferenceError(' can not find the entry file , please check page dir') )
}

let entry = Object.assign({}, commonEntry ), pageFiles = [];

entries.forEach(v => {
    entry[v.name] = v.entry;
    pageFiles.push(new HtmlWebpackPlugin(v.page))
})

const STATIC_PATH = "http://localhost:9000"

const config = {
    entry,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]_[hash:7].js',
        publicPath: STATIC_PATH
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: ['ts-loader']
            },
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // },
            {
                test: /\.scss$/,
                use: extractSCSS.extract({ fallback: "style-loader", use: [ "css-loader", "sass-loader" ]})
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: ['css-loader'],
                  })
            },
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src', 'link:href'],
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name:'[name]_[hash:7].[ext]',
                            limit: 2048,
                            outputPath: "assets/",
                            publicPath: `${STATIC_PATH}/assets`,
                            esModule: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [ new FixStyleOnlyEntriesPlugin(), extractSCSS, extractCSS ].concat(pageFiles).concat([
        new webpack.ProvidePlugin({
            GlobalPage:  path.resolve(__dirname, '../src/page/layout/layout.ts'),
            $:  require.resolve('jquery'),
            jQuery:  require.resolve('jquery')
          }),
    ]),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, '../src'),  // 一个全局变量
        }
    }
    
}

module.exports = config

function getEntries() {
    const root = path.resolve(__dirname, '../src/page');
    const r = glob.sync('./**/index.js', {
        cwd: root
    })
    console.log("Entry list: \n", r)

    return r.map(p => {
        let name = /([^\/]+)\/index\.js/g.exec(p)
        let filename = p.replace(/\/index\.js/g, '.html')
        
        return {
            name: name[1],
            entry: path.resolve(__dirname, '../src/page', p),
            page: {
                // TODO title 自定义
                filename: path.resolve( __dirname, '../dist/page', filename),
                template: path.resolve(__dirname, '../src/page/layout/layout.html'),
                chunks: Object.keys(commonEntry).concat([ name[1]])
            }
        }
    })

}
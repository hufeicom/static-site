const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')

let entries = getEntries()
if(!entries.length){
    throw(new ReferenceError(' can not find the entry file , please check page dir') )
}

let entry = {}, pageFiles = [];

entries.forEach(v => {
    entry[v.name] = v.entry;
    pageFiles.push(new HtmlWebpackPlugin(v.page))
})

const STATIC_PATH = "http://localhost:9000"

const config = {
    entry,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
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
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/",
                            publicPath:  `${STATIC_PATH}/assets`,
                            esModule: false
                        }
                    }, "css-loader"]
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
    plugins: [].concat(pageFiles)
}

module.exports = config

function getEntries() {
    const root = path.resolve(__dirname, '../src/page');
    const r = glob.sync('./**/*.entry.js', {
        root
    })

    return r.map(p => {
        let name = /([^\/]+)\.entry.js/.exec(p);
        return {
            name: name[1],
            entry: path.resolve(__dirname, '../', p),
            page: {
                // TODO title 自定义
                filename: p.replace(/entry\.js$/, 'html').replace(/\.\/src/, '.'),
                template: path.resolve(__dirname, '../src/page/layout.html'),
                chunks: [name[1]]
            }
        }
    })

}
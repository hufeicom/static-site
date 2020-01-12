const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')

let entries = getEntries()

let entry={}, pageFiles=[];

entries.forEach( v => {
    entry[v.name] = v.entry;
    pageFiles.push( new HtmlWebpackPlugin( v.page ))
})


const config = {
    mode: "development",
    entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }

                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src'],
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
                            limit: 8192,
                            outputPath: "assets/",
                            publicPath: "/assets",
                            esModule: false
                        }
                    }
                ]
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    plugins: [].concat(pageFiles)
}

module.exports=config

function getEntries() {
    const r = glob.sync('./page/**/*.entry.js')
    return r.map(p => {
        let name = /([^\/]+)\.entry.js/.exec(p);

        return {
            name: name[1],
            entry: p,
            page: {
                filename: p.replace(/entry\.js$/, 'html'),
                template: path.resolve(__dirname, p.replace( /entry\.js$/, 'html')),
                chunks: [ name[1] ]
            }
        }
    })
}
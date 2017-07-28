var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

prod_state = process.env.NODE_ENV==="production"


module.exports = {
    entry: {
        bundle: './src/index.js',
        gymnastics: './src/gymnastics.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
               use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpg|png|gif|jpeg|svg)$/,
                loaders: [
                    'file-loader?limit=10000&hash=sha512&digest=hex&name=[hash].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            bypassOnDebug: true,
                            mozjpeg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            pngquant: {
                                quality: '75-90',
                                speed: 4,
                            },
                        },
                    }
                ],
            },
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: !prod_state,
        }),
        new webpack.optimize.UglifyJsPlugin({
        
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
            // name: 'vendor',            
            // minChunks: function(module) {
            //     // this assumes your vendor imports exist in the node_modules directory
            //     return module.context && module.context.indexOf('node_modules') !== -1;
            // }            
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            chunks: ['manifest', 'bundle']
        }),
        new HtmlWebpackPlugin({
            template: 'src/gymnastics.html',
            filename: 'gymnastics.html',
            chunks: ['manifest', 'gymnastics']
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash].css'
        })
    ]
}
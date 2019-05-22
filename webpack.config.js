const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
 


module.exports = {
    entry: {
        main:["./js/main.js", './sass/main.scss'], 
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: "bundle.js"
    }, module: {
        rules: [
          {
                test:/\.hbs$/,
                loader:"handlebars-loader"
          },
          {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: true, sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: "../css/style.css"
        }),
        new CopyPlugin([
            { from: 'static', to: '../static' },
            {from: 'index.html', to: '../index.html'},
            {from: 'home.html', to: '../home.html'},
            {from: 'register.html', to: '../register.html'},
            {from: 'plp.html', to: '../plp.html'}
          ])
     ]
};

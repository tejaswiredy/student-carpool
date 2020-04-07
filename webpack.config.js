const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EncodingPlugin = require('webpack-encoding-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {

    // Environment mode
    mode: 'development',
  
    // Entry point of app
    entry: './src/index.js',
  
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/bundle.js'
    },

    devServer: {

        // Serve index.html as the base
        contentBase: ['./src', './public'],
    
        // Enable compression
        compress: true,
    
        // Enable hot reloading
        hot: true,
    
        host,
        inline: true,
    
        port: 3000,
    
        // Public path is root of content base
        publicPath: '/',
    
    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader'
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true,
                    // options...
                  }
                }
              ]
          }
        ],
    },

    plugins: [
      // Re-generate index.html with injected script tag.
      // The injected script tag contains a src value of the
      // filename output defined above.
      new HtmlWebpackPlugin({
        inject: true,
        template: resolveAppPath('public/index.html'),
      }),
      new EncodingPlugin({
        encoding: 'iso-8859-1'
      }),
      new MiniCssExtractPlugin({
        filename: 'css/mystyles.css'
      }),
    ],


    resolve: {
      alias: {
        _: path.resolve(__dirname, 'src'),
        _pages: path.resolve(__dirname, 'src/views/pages'),
        _components: path.resolve(__dirname, 'src/views/components'),
      }
    },
 
    watch: true
  }
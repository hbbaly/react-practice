const path =require('path');
module.exports = {
    //入口文件
    entry:'./src/index.js',
    //出口文件
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'temp/'
    },
    devServer:{
        contentBase:'./',
        host:'localhost',
        compress:true,
        port:3000
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:"babel-loader",
                query:{
                    presets:['es2015','react'],
                    plugins:['react-html-attrs']
                }
               
            },{
              test:/\.(png|jpg|gif)$/,
              use:[
                  {
                      loader:'url-loader',    
                      options:{
                          limit:50000,
                          outputPath:'img/'
                      }
                  }
              ]
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]'
          }
        ]
    }
}
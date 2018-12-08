const path =require('path');
// const babelpolyfill = require("babel-polyfill");
module.exports = {
    //入口文件
    entry:'./index.js',
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
                    plugins:[
                        'react-html-attrs',
                        ["import", {
                            "libraryName": "antd",
                            "libraryDirectory": "es",
                            "style": "css" // `style: true` 会加载 less 文件
                          }]
                    ]
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
        //   {
        //     test: /\.css$/,
        //     loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]'
        //   }
        { test: /\.css$/, loader: 'style-loader!css-loader' }
          ,{//antd样式处理
            test:/\.css$/,
            exclude:/redux/,
            use:[
                { loader: "style-loader",},
                {
                    loader: "css-loader",
                    options:{
                        importLoaders:1
                    }
                }
            ]
          }
        ]
    }
}
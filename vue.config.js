module.exports={
  devServer:{
    host:'localhost',
    port:'8080',
    proxy:{
      '/api':{
        target:'https://www.easy-mock.com/mock/5f756c07e30a0d4abc617776/example',
        changeOrigin:true, //允许跨域
        pathRewrite:{
          '^/api':'' // //请求的时候使用这个api就可以
        }
      }
    }
  }
}
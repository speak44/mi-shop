 let baseURL;
 // 分环境的处理

 switch (process.env.NODE_ENV) { // 在webapck中设置的环境 model=...
  case 'development':
     baseURL="http://dev-mall-pre.springboot.cn/api"
  break;
  case 'test':
     baseURL="http://test-mall-pre.springboot.cn/api"
  break;
  case 'production':
     baseURL="http://mall-pre.springboot.cn/api"
  break;   
   default:
    baseURL="http://mall-pre.springboot.cn/api"
    break;
 }

 export default{
  baseURL
 }
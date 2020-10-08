/**
 * Storege 封装
 */
const STORAGE_KEY = 'mail'

export default{
  // 存储值 str boolean num obj
  setItem(key,value,module_name){
    // module_name 模块名称，指定模块传入；比如user模块中添加一个 obj:'web'
    if(module_name){ // user
      let val= this.getItem(module_name)
      val[key] =value
      this.setItem(module_name,val)
    }else{
      const val = this.getStoreage()
      val[key]= value
      window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    } 
  },
  // 获取单个值
  getItem(key, module_name){
    // key: usename
    // module_name:user
    if(module_name){
      const val = this.getItem(module_name)
      if(val)return val[key]
    }
    return this.getStoreage()[key]
  },
  // 获取全部
  getStoreage(){
   return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)) ||{}
   // user: {usename: "ohh", age: 18, sex: 1}
  },
  //清空
  clear(key,module_name){
    const val = this.getStoreage()
    if(module_name){
      if(!module_name)return
      delete val[module_name][key]
    }else{
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
  }

}
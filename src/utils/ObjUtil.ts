
class ObjUtil{
  // https://www.jianshu.com/p/0d7bd31ccf43
  static copy(obj1:any,obj2:any){
    // var obj2=obj2||{}; //最初的时候给它一个初始值=它自己或者是一个json
    // let obj2=obj2||{}; 
    obj2=obj2||{}; 
    // for(var name in obj1){
      // for(let name in obj1){
        for(const name in obj1){
      if(typeof obj1[name] === "object"){ //先判断一下obj[name]是不是一个对象
        obj2[name]= (obj1[name].constructor===Array)?[]:{}; //我们让要复制的对象的name项=数组或者是json
        ObjUtil. copy(obj1[name],obj2[name]); //然后来无限调用函数自己 递归思想
      }else{
        obj2[name]=obj1[name];  //如果不是对象，直接等于即可，不会发生引用。
      }
    }
    return obj2; //然后在把复制好的对象给return出去
  }
  
}
// function copy(obj1:any,obj2:any){
//   var obj2=obj2||{}; //最初的时候给它一个初始值=它自己或者是一个json
//   for(var name in obj1){
//     if(typeof obj1[name] === "object"){ //先判断一下obj[name]是不是一个对象
//       obj2[name]= (obj1[name].constructor===Array)?[]:{}; //我们让要复制的对象的name项=数组或者是json
//       copy(obj1[name],obj2[name]); //然后来无限调用函数自己 递归思想
//     }else{
//       obj2[name]=obj1[name];  //如果不是对象，直接等于即可，不会发生引用。
//     }
//   }
//   return obj2; //然后在把复制好的对象给return出去
// }

export default ObjUtil

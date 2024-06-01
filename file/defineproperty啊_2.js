//之前存在问题，解决需要全局变量保存
function defineReactive(data,key,value=data[key]){
    Object.defineProperty(data,key,{
        get:function getdata(){
  return value
        },
        set:function setdata(newval){
            if(newval===value)
                return
            console.log(`set value to->${newval}`)
            value=newval

        }
    })
}
defineReactive(obj,a,1)
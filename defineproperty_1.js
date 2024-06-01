//数据劫持：自定义了 getter和setter重写原有的行为
const obj={}

let val = 1
//(对象，prop，description，包括value，enumerate（true）？)
Object.defineProperty(obj,a,{
get(){
    console.log('get property a')
    return val
},
set(newval){
if(newval===val)
    return
console.log(`set property a-> ${newval}`)
val=newval

}

})

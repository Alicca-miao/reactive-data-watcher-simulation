//解决嵌套的情况
class Observer{
    constructor(value){
     this.value=value
     this.walk
    }
    walk(){
        Object.keys(this.value).forEach((item)=>{
datareactive(this.value,item)
        })
    }
}
//上述类来自_3
function observe(data){
    if(typeof data!=='object')return
    new Observer(data)
}

function defineReactive(data,key,value=data[key]){
    observe(value)//如果也是对象则嵌套
	Object.defineProperty(data,key,{
	get: function reactivegetter(){
	return value
	},
	set: function reactivesetter(newval){
	if(newval===value)
	return

	value=newval
    observe(newval)//对新值的监听
	}
	})
}
//上述函数来自defineproperty_2
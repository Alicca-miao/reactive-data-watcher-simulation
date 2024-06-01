//解决多个属性情况

function defineReactive(data,key,value=data[key]){
	
	Object.defineProperty(data,key,{
	get: function reactivegetter(){
	return value
	},
	set: function reactivesetter(newval){
	if(newval===value)
	return

	value=newval
	}
	})
}
//上述函数来自defineproperty_2



class Observer{
    constructor(value){
     this.value=value
     this.walk
    }
    walk(){
        Object.keys(this.value).forEach((item)=>{
defineReactive(this.value,item)
        })
    }
}
const obj={a:1,b:2}
new Observer(obj)

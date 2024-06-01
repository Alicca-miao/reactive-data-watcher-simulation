//淘宝将买家信息存在数组中，响应式系统中应该有一个数组来保存买家信息 watcher
//每个数据维护属于自己的watcher
//在数据劫持里的definereactive里定义数组dep，通过闭包，每个属性能有一个属于自己的dep
function defineReactive(data,key,value=data[key])
{
	const dep=[]//新增加数组
    
	observe(value)

	Object.defineProperty(data,key,{
	get:function reactivegetter(){
	return value
	},

	set:function reactivesetter(newval){
	if(newval===value)return
	value=newval
	
    dep.notify()//通知watcher们，依赖管理器，用于存储依赖项（例如 Watchers
	}

	})
}
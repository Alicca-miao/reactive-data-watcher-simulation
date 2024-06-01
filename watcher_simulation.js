// 第一步函数definereactive
// - 遍历的walk函数
// - 嵌套 
// - 总结成类只让修改后的dom变化
function observe(data){
	if(typeof data !=='object')return
	new Observer(data)//是对象则开始嵌套打劫数据
}

class Observer{
	constructor(value)
	{
	 this.value=value
	 this.walk()
	}
	walk(){
	//对对象所有属性循环查看扔进去数据劫持
	Object.keys(this.value).forEach(key=>definereactive(this.value,key))

	}
}

function definereactive(data,key,value=data[key]){
	const dep = new Dep()
	//每个数据都有自己要绑定的依赖
	////第二步，对于每个数据有自己的watcher依赖,新建立一个dep类
	observe(value)
	Object.defineProperty(data,key,{
	
	get:function reactivegetter(){
	dep.depend()
	////get这里记录新的dep
	return value
	},

	set: function reactiveSetter(newValue) {
      if (newValue === value) return
      observe(newValue) // 确保新值被观察到
      value = newValue
      dep.notify() // 通知所有依赖
    }

	})

}


class Dep{
	constructor(){
	this.subs=[]
	}

	depend(){

	if(Dep.target){
	this.addSub(Dep.target)
	}
	}

	notify(){

	const subs=[...this.subs]
	subs.forEach((s)=>s.update())
	}

	addSub(sub) {
    this.subs.push(sub)
  }
}
Dep.target=null

const targetstack=[]
function pushTarget(_target) {
  targetstack.push(Dep.target)
  Dep.target = _target
}

function popTarget() {
  Dep.target = targetstack.pop()
}

class Watcher {
  constructor(data, expression, cb) {
    this.data = data
    this.expression = expression
    this.cb = cb
    this.value = this.get()
  }

  get() {
    pushTarget(this)
    const value = parsePath(this.data, this.expression)
    popTarget()
    return value
  }

  update() {
    const oldValue = this.value
    this.value = parsePath(this.data, this.expression)
    this.cb.call(this.data, this.value, oldValue)
  }
}


function parsePath(obj, expression) {
  const segments = expression.split('.')
  for (let key of segments) {
    if (!obj) return
    obj = obj[key]
  }
  return obj
}


//测试
observe(obj)

let w1 = new Watcher(obj, 'a', (val, oldVal) => {
  console.log(`obj.a 从 ${oldVal}(oldVal) 变成了 ${val}(newVal)`)
})







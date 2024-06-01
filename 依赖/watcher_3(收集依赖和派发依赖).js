// 在插值语法时候，调用构造函数，触发里面的get方法，进行计算时触发getter进行计算
//问题在：已知get方法里this为watch怎么把watch整出去加入dep里
//对于每个数据来说要收集属于她的watcher数组，说用闭包

//1. 依赖收集过程：需要数据-》实例化watcher-〉对需要的数据求值-》触发getter，添加依赖自己的watcher
//2. new watcher时候执行get方法，get方法获取自己依赖的数据，重写了数据的访问行为，为每个数据定义了getter，getter函数会执行
//3. 所以说用户要读数据触发get然后get会调用getter然后在getter里添加依赖，get执行完毕
//4. 遇到一个插值表达式就会新建一个watcher，每个节点对应一个watcher（1.x）
//（2.x）每个组件对应一个watcher
//触发哪个数据的getter，watcher依赖哪个数据，数据变化怎么通知watcher（setter中派发更新）


//1. 收集依赖
get:function getdata(){
    window.target=this
    const value = parsePath(this.data, this.expression)
  return value
}
dep.push(window.target)

//2.派发依赖
set:function setdata(){
    if(newval===value)return
    value=newval
    dep.forEach(d=>d.update())
    //新增update方法？？

}
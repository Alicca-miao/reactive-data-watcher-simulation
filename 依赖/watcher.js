// 我点击预售提醒，开始卖时候淘宝给我推送一条信息，看到信息开始购买
// 买家对应watcher，每个watcher实例订阅一个或者多个数据，数据也被称作watcher的依赖，依赖变化时，watcher实例接受的数据发送变化，更新页面
// data<->watcher->回调

//解决每次更新都重新渲染页面
//只更新对应dom

class watcher{
    constructor(data,expression,cb){
        this.data=data
        this.expression=expression
        this.cb=cb
        this.value=this.get()
    }
    get(){
        const value=parsePath(this.data,this.expression)
        return value
    }
    set(){
        this.value=parsePath(this.data,this.expression)
        cb()
    }

}
function parsePath(obj,expression){
    let segments = expression.split('.')
    for(let key in segments)
        {
            if(!obj)return
            obj=obj[key]
            //最终得到的是比如b.c,obj=obj[b]=c,
	// obj=obj[c]为空返回上一层总之得到的是c的值,所以如果变化 返回新的对象的值
        }
   
        return obj
}
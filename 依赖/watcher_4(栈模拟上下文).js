
//1. update更新,模拟watcher里有oldval和newval

update(){
    //多了一个保存旧值的操作
    const oldval=this.value
    this.value=parsePath(this.data, this.expression)
    this.cb.call(this.data,this.value,oldval)

}

//意思是，来了新的，则用栈保存上一个的执行上下文，然后指向新的执行上下文
//弹出之前保存的上下文并指向之前保存的上下文


//2. 栈存储上下文
let targetstack=[]
function pushtarget(_target){
    targetstack.push(window.target)
    window.target=_target
}
function poptarget(){
    window.target=targetstack.pop()
    //指向了被弹出的元素
}

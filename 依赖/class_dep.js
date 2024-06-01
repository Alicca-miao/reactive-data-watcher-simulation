class Dep{
    constructor(){
        this.subs=[]
    }
    depend(){
        this.addSub(Dep.target)
        ////dep.target是全局的静态
    }
    notify(){
        const subs=[...this.subs]
        //cosnt只保证指针指向不动，但是subs还是能变化所以这种解构形式方式过程中this.subs变化
        subs.forEach(s=>s.update())
    }
    addsub(sub){
	this.subs.push(sub)
	}
}
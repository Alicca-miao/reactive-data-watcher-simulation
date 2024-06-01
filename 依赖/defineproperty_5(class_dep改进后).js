function defineReactive(data, key, value = data[key]) {
  const dep = new Dep() // 修改
  observe(value)
  Object.defineProperty(data, key, {
    get: function reactiveGetter() {
      dep.depend() // 修改,原本的window.target就是当前正在处于实例化过程中的watcher
      //!最终决定用栈存放
      return value
    },
    set: function reactiveSetter(newValue) {
      if (newValue === value) return
      value = newValue
      observe(newValue)
      dep.notify() // 修改
    }
  })
}


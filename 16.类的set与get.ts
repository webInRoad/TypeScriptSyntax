// 方法一设置与获取类里的私有属性
class Person4 {
  private name
  constructor(name:string){
    this.name = name
  }
  getName() {
    return this.name
  }
  setName(name) {
    this.name = name
  }
}
var p:Person4 = new Person4("张三")
p.setName("李四")
console.info(p.getName())

// 方法二 set与get 感觉也差不多 要es5才支持，所以要用tsc -t es5 file
class Person7 {
  private _name:string
  constructor(firtName:string) {
    this._name = firtName;
  }
  set name(newName:string) {
    if(newName.length<8){
      throw new Error("名称不能少于8个字符")
    } else {
      this._name = newName
    }
  }
  get name() {
    return this._name
  }
}

var p9:Person7 = new Person7("zjh")
p9.name = "cyzcyzcyz"
console.info(p9.name)

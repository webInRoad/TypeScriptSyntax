class Person2 {
	// private name = '张三' //外部不能访问，只能在walk里访问
	protected name = '张三' //子类跟内部可以访问
	age = 20
	walk() {
		console.info('我叫' + this.name + ',我今年' + this.age + '多少岁')
	}
}
var p = new Person()
// p.name //不可以访问
class Child2 extends Person2 {
	callParent() {
		console.info(this.name) //访问不了父类private修饰的属性，可以访问protected与public修饰的
	}
	static test() {} //静态方法，static修饰之后就可以直接用类名访问，不可以访问this
}
var child = new Child()
child.callParent()
Child.test()


class Person5 {
  constructor(private name:string,private age:number) {
  }
  public show():void {
    console.info(`名字:${this.name},年龄:${this.age}`)
  }
}

let p5:Person5 = new Person5("blue",23)
p5.show()
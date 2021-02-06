class Animal {
	readonly name: string
	protected age: number = 2
	static categoies: string[] = ['mammal', 'bird'] //静态属性
	static isAnimal(a) {
		return a instanceof Animal
	} //静态方法
	constructor(name) {
		this.name = name
	}
	run() {
		return `${this.name} is runnning`
	}
}

const snake = new Animal('lily')
// snake.age = 2 // protected的只能在类内部跟子类访问
// snake.name = 'zjh' //由于是只读的，无法设置
// console.info(snake.run())
// console.info(Animal.categoies)
// console.info(Animal.isAnimal(snake))
class Dog extends Animal {
	bark() {
		return `${this.name} is barking,its age is ${this.age}`
	}
}
const dog = new Dog('cyzDog')
console.info(dog.bark())
// console.info(dog.run())

class Cat extends Animal {
	constructor(name) {
		super(name)
		console.info(name)
	}
	run() {
		return 'Memo,' + super.run() //super.run() 调用父类方法
	}
}

const cat = new Cat('miaomiao')
// console.info(cat.run())

//接口 interface
interface Radio {
	name: string
	switchRadio(): void
}

interface Battery {
	checkBatteryStatus()
}
//1.实现两个接口用逗号隔开
class CellPhone implements Radio, Battery {
	name: string
	switchRadio(): void {}
	checkBatteryStatus() {}
}

class Car implements Radio {
	name: string
	switchRadio(): void {}
}

//2.采用继承
interface RadioWithBattery extends Radio {
	checkBatteryStatus()
}
class CellPhone2 implements RadioWithBattery {
	name: string
	checkBatteryStatus() {}
	switchRadio() {}
}

//抽象类
abstract class People {
	abstract name: string
	age: number
	constructor(age: number) {
		// this.name = name
		this.age = age
	}
	commonInfo(): void {
		console.info(`his name is ${this.name},age is ${this.age}`) //his name is 张三,age is 22
	}
	abstract getInfo()
}
class Man extends People {
	name: string
	constructor(name, age) {
		super(age)
		this.name = name
	}
	getInfo() {
		console.info(this.name)
	}
}
const zs = new Man('张三', 22)
zs.commonInfo()
zs.getInfo()

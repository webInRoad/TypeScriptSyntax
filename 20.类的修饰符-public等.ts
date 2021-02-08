class User {
	public name: string
	protected sex: string
	private age: number
	constructor(name: string, age: number, sex: string) {
		this.name = name
		this.age = age
		this.sex = sex
	}
	getInfo() {
		//类内部任何属性或方法都可以访问
		console.info(`名字叫${this.name}，今年${this.age}岁，性别:${this.sex}`)
	}
	protected eat() {
		console.info('人都会吃饭！')
	}
}

class Teacher extends User {
	getInfo() {
		//子类只可以访问public与protected修饰的属性或方法
		console.info(`名字叫${this.name} ，性别:${this.sex}`)
		super.eat()
	}
}

const user = new User('张三', 23, '男')
console.info(user.name) //只可以访问public修饰的属性或方法
user.getInfo()
// user.eat() //不可以
const teacher = new Teacher('张教授', 45, '女')
teacher.getInfo()

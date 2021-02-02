interface IState {
	name: string
}
var d: IState = {
	name: '张三'
}

var e: IState = {
	name: '李四'
	// age: 12 // 不可以，1.强约束对象的属性值和个数
}

// 2.可选属性 ?:
interface IState2 {
	name: string
	age?: number
}

var f: IState2 = {
	name: '张三'
}

// 3.只读属性 readonly age:
interface IState3 {
	name: string
	readonly age: number
}
var g: IState3 = {
	name: '张三',
	age: 20
	// sex: '男' // 不可以
}
g['name'] = '李四' //可以
// g['age'] = 28 //不可以
g['sex'] = '男' // 可以

// 3.属性个数不确定
interface IState4 {
	name: string
	age: number
	[propName: string]: any
	// [propName: number]: any
}
var h: IState4 = {
	name: '张三',
	age: 22,
	a: 1,
	3: 5 //可以
}

//声明式函数
function funcType(name: string, age: number = 12, sex?: string): number {
	return age
}

var ageNum: number = funcType('张三', 18)

// 表达式类型函数
var funcVar = function (name: string, age: number = 18): number {
	return age
}
// var newFun: string = funcVar //会报错，因为funcVar这个变量是函数类型,虽然没有显式定义，但ts会类型推断出funcVar类型
var newFun: (name: string, age?: number) => number = funcVar
var age1: number = funcVar('张三') //不会报错,因为参数age设置了默认值
// 显式定义
// 方法一
// 中间那个number是因为要返回的是number类型，所以只能是number
var funcVar2: (name: string, age: number) => number = function (
	name: string,
	age: number = 18
): number {
	return age
}
funcVar2('张三', 12) //有作用

// 方法二
interface IStateFun {
	(name: string, age: number): number
}

var funcType3: IStateFun = function (name: string, age: number = 18): number {
	return age
}
funcType3('张三', 12)

// 重载
var getValue = function (value: number | string): number | string {
	return value
}
getValue(1)
getValue('1')
// 重载
// 输入是number 输出也是number
// 输入是string 输出也是string
function getValue2(value: number): number
function getValue2(value: string): string
function getValue2(value: string | number): number | string {
	return value
}
var gNum: number = getValue2(1)
var gStr: string = getValue2('1')

// 类型断言 感觉不需要
function getAssert(name: string, age: number) {
	// return (name as string).length
	return name.length //不会报错
}

function test() {
	console.info(arguments)
	// let arr5: any[] = arguments
}

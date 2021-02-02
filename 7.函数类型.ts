//声明式函数
function funcType(name:string,age:number=12,sex?:string):number{
  return age
}

var ageNum:number = funcType('张三',18)

// 表达式类型函数
var funcVar = function(name:string,age:number=18):number{
  return age
}
funcVar('张三') //不会报错

var funcVar2:(name:string,age:number) => number=function(name:string,age:number=18):number {
  return age
} 
funcVar2("张三",12) //有作用

interface IStateFun {
  (name:string,age:number):number
}

var funcType3:IStateFun=function(name:string,age:number=18):number {
  return age
} 
funcType3("张三",12)

// 重载
var getValue = function(value:number|string):number|string {
  return value
}
getValue(1)
getValue("1")
// 重载
// 输入是number 输出也是number
// 输入是string 输出也是string
function getValue2(value:number):number;
function getValue2(value:string):string;
function getValue2(value:string|number):number|string{
  return value;
}
var gNum:number = getValue2(1)
var gStr:string = getValue2("1")

// 类型断言 感觉不需要
function getAssert(name:string,age:number){
  // return (name as string).length
  return name.length //不会报错
}
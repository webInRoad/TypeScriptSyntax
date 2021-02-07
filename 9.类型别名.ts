// type strType:string
type strType = string
var str: strType
// str = 3
str = '3'

type complexType = string | number | boolean
var item: complexType
item = 4
item = false
item = '张三'

// 限定字符串选择
type enumStr = 'click' | 'onClick'
var oper: enumStr
oper = 'click'

function sum(a:number,b:number):number {
  return a+b;
}
const sum2:(a:number,b:number) => number = sum
//用别名
type PlusType = (a:number,b:number) => number
const sum3:PlusType = sum

//参数既可以是string又可以是函数
type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n:NameOrResolver):string {
  if(typeof n === 'string') {
    return n
  } else {
    return n()
  }
}
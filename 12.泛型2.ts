// 定死了参数跟返回值类型
function echo(arg:number):number{
  return arg
}
const res = echo(2)
console.info(res)
// const result2 = echo("2") //报错,用该方式就得重新定义个string类型的echo

// 采用泛型
// 函数泛型,在函数名后加上<T>,其中T只是随便起的一名字
function echoGeneric<T>(arg:T):T{
  return arg
}
const r = echoGeneric(2)

function swap<T,U>(tuple:[T,U]):[U,T]{
  return [tuple[1],tuple[0]]
}
const s = swap(["23",23])

// 约束泛型 比如底下要求有length属性
// function echoWithError<T>(arg:T):T{
//   console.info(arg.length)
//   return arg
// }
function echoWithArr<T>(arg:T[]):T[]{
  console.info(arg.length)
  return arg
}
const ar:number[] = echoWithArr([1,2,3])
const ar2:(number|string)[] = echoWithArr([1,2,"3"]) //居然也可以,T变成了number|string
// const arr3 = echoWithArr('str') //string实际上也有length属性,所以这种定义方式有问题

//采用interface extends
interface IWithLength {
  length:number
}
function echoWithArr2<T extends IWithLength>(arg:T):T {
  return arg
}
const arrWith = echoWithArr2([1,2,3])
const arrWith2 = echoWithArr2('str')
// const arrWith3 = echoWithArr2(23)  //不可以,因为number没有length属性

class Queue {
  private data = []
  push(item) {
    return this.data.push(item)
  }
  pop(){
    return this.data.shift()
  }
}
const queue = new Queue()
queue.push(1)
queue.push("str")
console.info(queue.pop().toFixed())
// console.info(queue.pop().toFixed()) //运行时才会报错

//增加检验
class Queue2 {
  private data = []
  push(item:number) {
    return this.data.push(item)
  }
  pop():number{
    return this.data.shift()
  }
}
const queue2 = new Queue2()
queue2.push(1)
// queue2.push("str") //会报错,起到了限制作用
console.info(queue2.pop().toFixed())
//上面的起到了只允许传入number类型,但如果要弄个允许加入字符串,就得重新定义个类,这不合理
// 泛型登场,在类名后加上<T>
class Queue3<T> { 
  private data = []
  push(item:T) {
    return this.data.push(item)
  }
  pop():T{
    return this.data.shift()
  }
}
const queue3 = new Queue3<number>()
queue3.push(3)
console.info(queue3.pop().toFixed()) //3
const queue3Str = new Queue3<string>()
queue3Str.push("3")
console.info(queue3Str.pop().indexOf("3")) //0

// 泛型在接口上的使用
interface KeyPair<T,U> {
  key:T,
  value:U
}
let kp1:KeyPair<number,string> = {key:23,value:"23"}
let kp2:KeyPair<string,number> = {key:"23",value:23}

// Array<number>也是泛型在接口上的使用
let n:number[] = [2,3,4]
let n2:Array<number> = [2,3,4]

// interface描述函数类型
interface IPlus{
  (a:number,b:number):number
}
function plus(a:number,b:number) :number {
  return a+b;
}
const r2:number = plus(3,5)

//interface搭上泛型
interface IPlus2<T> {
  (a:T,b:T):T
}
function plus2(a:number,b:number) :number {
  return a+b;
}
function connect(a:string,b:string) :string {
  return a+b;
}
const p2:IPlus2<number> = plus2
const c2:IPlus2<string> = connect

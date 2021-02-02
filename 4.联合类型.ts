var a: string = '44'
// a = 55 //不可以
var b: string | number | boolean = '55'
b = 55
b = true

// //只能访问共有的属性或方法 测试了下并不是这样，估计是版本升级
// var c: string | boolean = '88'
// console.info(c.length)

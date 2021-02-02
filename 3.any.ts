var a: any = '张三'
a = 33

var b //等价于var b:any
b = '李四'
b = 45

var c = 54
// c = '王五' //不可以，有类型推论，初始化值会推断出类型

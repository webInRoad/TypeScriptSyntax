var str: string = '1'
var num: number = 1
var flag: boolean = true
var nul: null = null
var unde: undefined = undefined

//null与undefined是其他类型的子集
str = null
var str2: string = null //子集
num = null
flag = null
// undefined = null //不可以

str = undefined
var str3: string = undefined //子集
num = undefined
flag = undefined
// null = undefined //不可以

//void
let getName = function (): void {
	// return '张三'
}

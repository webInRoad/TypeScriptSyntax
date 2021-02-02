// 1.类型+[]
var arr: number[] = [1, 2, 3]
var arr2: string[] = ['1', '2', '3']

// 2.泛型 Array<elementType>
var arr3: Array<number> = [1, 2, 3]
var arr4: Array<string> = ['1', '2']

// 3.接口类型
interface IArray {
	[index: number]: string //index:number是固定的
}

var arr5: IArray = ['1', '3', '4']

// 数组跟对象类型合起来
interface IState5 {
	name: string
	age: number
}
// 1
var arr6: IState5[] = [{ name: '张三', age: 20 }]
// 2
var arr7: Array<IState5> = [{ name: '张三', age: 20 }]
// 3
interface IArray2 {
	[index: number]: IState5
}
var arr8: IArray2 = [{ name: '张三', age: 20 }]

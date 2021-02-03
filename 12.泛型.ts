function createArray(length: number, value: any): Array<any> {
	return []
}

var result: number[] = createArray(3, '1') // 可以
var result2: string[] = createArray(3, '1') // 也可以

// 根据
function createArray2<T>(length: number, value: any): Array<T> {
	return []
}
var result: number[] = createArray2(3, 1) // 可以 T不代表啥，因为参数value是any类型
var result2: string[] = createArray2(3, '1') // 可以

function createArray3<T>(length: number, value: T): Array<T> {
	return []
}
var result3: number[] = createArray3(3, 1) // 可以 T代表number
var result4: string[] = createArray3(3, '1') // 可以 T代表string
// var result5: number[] = createArray3(3, '1') // 不可以 T代表string,所以返回的也是个字符串数组

interface ICreate {
	<T>(name: string, value: T): Array<T>
}
var func: ICreate
func = function <T>(name: string, value: T): T[] {
	return []
}

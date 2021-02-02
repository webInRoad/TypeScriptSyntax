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

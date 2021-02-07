enum Direction  {
  Up,
  Down,
  Left,
  Right
}
// 双向映射，并且默认是从0开始
console.info(Direction.Up) //0
console.info(Direction[0]) //Up

// 枚举默认第一项是0，值也为0，可以通过赋值改变，后序的依次
enum Direction2 {
  Up=10,
  Down,
  Left,
  Right
}
console.info(Direction2.Down) //11
console.info(Direction2[11]) //Down

// 字符串枚举
enum DirectionStr {
  Up="up",
  Down="down",
  Left="left",
  Right="right"
}
let value = "up"
if(value == DirectionStr.Up) {
  console.info("go up!")
}

// 常量枚举：在enum前加上const关键字
// 枚举不会编译成js代码，直接输出结果
const enum DirectionStr2 {
  Up="up",
  Down="down",
  Left="left",
  Right="right"
}
let value2 = "up"
if(value2 == DirectionStr2.Up) {
  console.info("go up!")
}
// 编译为:var value2 = "up";
// if (value2 == "up" /* Up */) {
//   console.info("go up!");
// }
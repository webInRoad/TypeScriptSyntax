//字符串枚举 单纯的就是赋值，没有做映射(Days[Days["sun"] = "Sunday"] = "sun";)
// enum Days{
//加上const，变成常量枚举，直接将Days["mon"]编译成值'Monday',编译后不会有Days对象存在
const enum Days {
	sun = 'Sunday',
	mon = 'Monday',
	tues = 'Tuesday',
	web = 'Wednesday',
	tuhr = 'Thursday',
	fri = 'Friday',
	sat = 'Saturday'
}
// console.info(Days[1]) // undefined
// console.info(Days['Monday']) // undefined
console.info(Days['mon']) //Monday
enum Gender {
  Male = 10,//枚举第一项默认为0，当改为10之后，后续的依次为11,...
  Female
}
console.info(Gender.Female) // 11
// let gender:Gender = Gender.Male 底下会报错
let gender: Gender //正常
switch (gender) {
	case Gender.Male:
		console.info('male')
		break
	case Gender.Female:
		console.info('female')
		break
}

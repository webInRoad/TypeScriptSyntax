enum Days {
	sub,
	mon,
	tue,
	web,
	tuh,
	fri,
	stt
}
Days[1] == 'mon'

enum Gender {
  Male = 10,
  Female
}

// let gender:Gender = Gender.Male 底下会报错
let gender:Gender //正常
switch(gender) {
  case Gender.Male:
    console.info("male")
    break
  case Gender.Female:
    console.info("female")
    break
}
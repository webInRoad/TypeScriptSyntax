var Days;
(function (Days) {
    Days[Days["sub"] = 0] = "sub";
    Days[Days["mon"] = 1] = "mon";
    Days[Days["tue"] = 2] = "tue";
    Days[Days["web"] = 3] = "web";
    Days[Days["tuh"] = 4] = "tuh";
    Days[Days["fri"] = 5] = "fri";
    Days[Days["stt"] = 6] = "stt";
})(Days || (Days = {}));
Days[1] == 'mon';
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
// let gender:Gender = Gender.Male 底下会报错
var gender;
switch (gender) {
    case Gender.Male:
        console.info("male");
        break;
    case Gender.Female:
        console.info("female");
        break;
}

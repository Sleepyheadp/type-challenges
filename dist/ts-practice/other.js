function errorFunc() {
    throw new Error();
    console.log(11);
}
function forNever() {
    while (true) {
        console.log(22);
    }
}
function add_2(_a) {
    var a = _a.a, b = _a.b;
    return a + b;
}
add_2({ a: 1, b: 2 });
var arr_3_1 = [1, "Tom"];
var arr_3_2 = [
    { name: "Tom", age: 1 },
    { name: "Jerry", age: 2 },
];
var girl = [18, "one", "two"];
var tupleArr = [
    ["capoo", 18, true],
    ["Tom", 20, false],
];
function getLength_5_1(something) {
    return something;
}
function getLength_5_2(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something;
    }
}
function selectOne(sth) {
    if (sth.isCan) {
        sth.canSay();
    }
    else {
        sth.canRun();
    }
}
function selectTwo(sth) {
    if ("canSay" in sth) {
        sth.canSay();
    }
    else {
        sth.canRun();
    }
}
function isNumber(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        throw new Error("a and b should be number");
    }
}
var _Dog = (function () {
    function _Dog() {
    }
    _Dog.prototype.run = function () {
        console.log("dog run");
    };
    return _Dog;
}());
var _Cat = (function () {
    function _Cat() {
    }
    _Cat.prototype.say = function () {
        console.log("cat say");
    };
    return _Cat;
}());
function isAnimal(animal) {
    if (animal instanceof _Dog) {
        animal.run();
    }
    else {
        animal.say();
    }
}
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
function isToday(num) {
    if (num === Days.Sun) {
        console.log("today is Sun");
    }
    else {
        console.log("today is not Sun");
    }
}
isToday(0);

function errorFunc() {
    throw new Error();
    console.log(11);
}
function forNever() {
    while (true) {
        console.log(22);
    }
}
function add(_a) {
    var a = _a.a, b = _a.b;
    return a + b;
}
add({ a: 1, b: 2 });
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

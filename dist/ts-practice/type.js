var num = 1;
var person = {
    name: "capoo",
    age: 18,
};
var arr_7_1 = [1, 2, 3];
var arr_7_2 = ["1", "2", "3"];
var pds = [
    {
        name: "capoo",
        age: 18,
        sex: "man",
    },
    {
        name: "tom",
        age: 19,
        sex: "woman",
    },
];
var PersonDemo = (function () {
    function PersonDemo(name, age) {
        this.name = name;
        this.age = age;
    }
    return PersonDemo;
}());
var pOne = new PersonDemo("capoo", 18);
console.log("类类型pOne:", pOne);
var functionType = function () {
    return "函数类型注解语法";
};
var person2 = {
    name: "capoo",
    age: 18,
    sexy: "man",
    toSay: function () {
        var res = "hello ts";
        console.log(res);
        return res;
    },
};
var str = "hello ts";
var num2 = 2;
var C_6 = {
    A_6: {
        name: "tom",
    },
    age: 18,
};
var num_8;
num_8 = "one";
var arr_8;
arr_8 = "eight";
arr_8 = [1, 2, 3];
var demo_8;
demo_8 = {
    name: "capoo",
    age: 18,
};
console.log("设置多个类型:", demo_8);
var demo_9 = {
    price: 99.9,
    size: "L",
};
function func_10(a, b) {
    return a + b;
}
func_10(1, 2);
function cmd(a) {
    return "success";
}
function add_10(p) {
    console.log("给函数参数添加类型", p.a + p.b);
    return p.a + p.b;
}
add_10({ a: 1, b: 2 });
var arrowFunc = function (a, b) { return a + b; };
arrowFunc(1, 2);
function request_12(callback) {
    callback("success");
}
request_12(function (result) {
    console.log("箭头函数作为函数参数:", result);
});
function request(callback) {
    callback("success", "200");
}
var callback = function (result, code) {
    return console.log("call signature:".concat(result, " ").concat(code));
};
request(callback);
var str_14 = "hello any type";
var a_14_1 = 14;
var a_14_2 = str_14;
var a_14_3 = str_14;
console.log(typeof a_14_1, typeof a_14_2, typeof a_14_3);
var tshift_17 = {
    title: "体恤",
    price: 59.9,
    inStock: false,
    size: "L",
};

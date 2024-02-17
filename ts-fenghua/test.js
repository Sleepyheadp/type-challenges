/* 只有ts在命名时使用数字,其他变量函数命名全部使用字母且驼峰的形式 */
// 1.给变量添加基本类型
var num = 1;
// 2.给对象添加基本类型
var person = {
    name: "capoo",
    age: 18
};
var person2 = {
    name: "capoo",
    age: 18,
    sexy: "man",
    toSay: function () {
        var res = "hello ts";
        console.log(res);
        return res;
    }
};
// 3.类型注释:ts会自动推断变量的类型,但是我们用ts就是为了自己设置类型的
var str = "hello ts";
var num2 = 2;
var person4 = {
    name: "capoo",
    age: 18,
};
var discount = function (price) {
    var res = price * 0.8;
    console.log(res);
    return res;
};
discount(1);
console.log("capoo");

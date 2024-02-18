var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 15.泛型的使用
// 15-1.给函数添加泛型
// 约束函数的参数和返回值类型
function join(arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
}
var res_15_1_1 = join([1, 2, 3], [4, 5, 6]);
var res_15_2_2 = join(["1", "2", "3"], ["4", "5", "6"]);
console.log("给函数添加泛型:", res_15_1_1, res_15_2_2);
var obj_one = {
    value: "15",
    desc: "Add a generic to an object",
};
var obj_two = {
    value: 15,
    desc: "Add a generic to an object",
};
// 15-3.定义多个泛型参数
var map = new Map();
map.set("1", 2);
function PrintType(t, k) {
    console.log("Map:".concat(t, ":").concat(typeof t, ", ").concat(k, ":").concat(typeof k));
}
// 在函数调用的时候,要求参数的类型
PrintType("a", 1);
function displayTitle(t) {
    console.log(t.title, t.price, t.inStock);
}
// 根据接口新建一个对象
var product = {
    title: "cloth",
    price: 99,
    inStock: true,
};
// 对象接收一个对象作为参数
displayTitle(product);
var tshirt = {
    title: "体恤",
    price: 59.9,
    inStock: false,
    size: "L",
};
displayTitle(tshirt);

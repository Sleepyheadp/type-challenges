var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function add(a, b) {
    return a + b;
}
console.log(add("capoo", 2));
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
var map = new Map();
map.set("1", 2);
function PrintType(t, k) {
    console.log("Map:".concat(t, ":").concat(typeof t, ", ").concat(k, ":").concat(typeof k));
}
PrintType("a", 1);
var PD_4 = (function () {
    function PD_4(person) {
        this.person = person;
    }
    PD_4.prototype.select = function (index) {
        return this.person[index].name;
    };
    return PD_4;
}());
var chooseOne = new PD_4([
    { name: "Tom" },
    { name: "Jerry" },
    { name: "capoo" },
]);
console.log("generic extends:", chooseOne.select(2));
function displayTitle(t) {
    console.log(t.title);
}
var coat = {
    title: "coat",
};
displayTitle(coat);
var tshirt = {
    title: "体恤",
    size: "L",
};
displayTitle(tshirt);
function getLength_0(sth) {
    console.log(sth.length);
}
function getLength(sth) {
    console.log(sth.length);
}
function getLength_2(sth) {
    console.log(sth.length);
}
var LengthWise_3 = (function () {
    function LengthWise_3() {
    }
    return LengthWise_3;
}());
function getLength_3(sth) {
    console.log(sth.length);
}

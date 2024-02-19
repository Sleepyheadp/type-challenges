var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person4 = {
    name: "capoo",
    age: 18,
    toSay: function (num) {
        return num + "learning TS";
    },
};
var discount = function (price, piece) {
    var res = price * piece;
    console.log(res);
    return res;
};
discount(59.9, 2);
var post = {
    1: true,
    2: false,
};
var Cat = (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function (food, count) {
        console.log("".concat(this.name, " \u5403\u4E86 ").concat(count, " \u4E2A ").concat(food));
    };
    return Cat;
}());
var CatOne = new Cat("cat");
CatOne.eat("apple", 2);
var personA = (function () {
    function personA(name) {
        this.name = name;
    }
    personA.prototype.tell = function (sth) {
        console.log("".concat(this.name, "\u8BF4:").concat(sth));
    };
    personA.prototype.do = function (sth) {
        console.log("".concat(this.name, "\u505A:").concat(sth));
    };
    return personA;
}());
var A = new personA("Tom");
A.tell("我是tell方法");
A.do("do方法");
function getValue() {
    var counter = function () {
        counter.count++;
    };
    counter.count = 0;
    return counter;
}
var counter = getValue();
counter();
console.log("count:", counter.count);
counter();
console.log("count:", counter.count);
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var TestOne = (function (_super) {
    __extends(TestOne, _super);
    function TestOne(name, info) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.info = info;
        return _this;
    }
    TestOne.prototype.toSay = function () {
        console.log("".concat(this.name, " \u8BF4:\u8FD9\u662F ").concat(this.info));
    };
    return TestOne;
}(Person));
var newPerson = new TestOne("Tom", "PortExtends 接口继承");
newPerson.toSay();
var Three = (function () {
    function Three() {
    }
    return Three;
}());
var A_4_9 = (function () {
    function A_4_9() {
    }
    return A_4_9;
}());
var B_4_9 = (function () {
    function B_4_9() {
    }
    return B_4_9;
}());
var A_4_10 = (function () {
    function A_4_10() {
    }
    return A_4_10;
}());
var show_4_10 = (function () {
    function show_4_10() {
    }
    return show_4_10;
}());
var demo_5_1 = "capoo";
var demo_5_2 = "capoo";
demo_5_2 = ["capoo", "tom"];
var demo_5_3 = ["tom", 18];
var demo_5_4 = function (argument) {
    return argument;
};
var Person_5_5 = (function () {
    function Person_5_5(name) {
        this.name = name;
    }
    return Person_5_5;
}());
function createName(ctor, name) {
    return new ctor(name);
}
var demo_5_5 = createName(Person_5_5, "Tom");
console.log(demo_5_5.name);

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
var PD_1 = (function () {
    function PD_1() {
    }
    return PD_1;
}());
var demo_1 = new PD_1();
demo_1.name = "capoo";
demo_1.age = 18;
console.log(demo_1);
var PD_2_1 = (function () {
    function PD_2_1(name) {
        this.name = name;
    }
    PD_2_1.prototype.toSay = function () {
        console.log("class extends : name is ".concat(this.name));
    };
    return PD_2_1;
}());
var PD_2_2 = (function (_super) {
    __extends(PD_2_2, _super);
    function PD_2_2(age) {
        var _this = _super.call(this, age) || this;
        _this.age = age;
        return _this;
    }
    return PD_2_2;
}(PD_2_1));
var demo_2 = new PD_2_2("capoo");
demo_2.toSay();
var PD_3 = (function () {
    function PD_3(name, age) {
        this.name = name;
        this.age = age;
    }
    return PD_3;
}());
var demo_3_1 = [new PD_3("a", 1), new PD_3("b", 2)];
var PD_3_2 = (function () {
    function PD_3_2() {
    }
    return PD_3_2;
}());
var demo_3_2 = [
    { name: "a", age: 1 },
    { name: "b", age: 2 },
];
var PD_4_1 = (function () {
    function PD_4_1(name) {
        this.name = name;
    }
    PD_4_1.prototype.sayName = function () {
        return this.name;
    };
    return PD_4_1;
}());
var demo_4_1 = new PD_4_1("Tom");
console.log("class's type public :", demo_4_1.sayName());
var PD_4_2 = (function () {
    function PD_4_2() {
    }
    return PD_4_2;
}());
var demo_4_2 = new PD_4_2();
var PD_4_3_1 = (function () {
    function PD_4_3_1(name) {
        this.name = name;
    }
    PD_4_3_1.prototype.sayName = function () {
        console.log("protected:", this.name);
    };
    return PD_4_3_1;
}());
var PD_4_3_2 = (function (_super) {
    __extends(PD_4_3_2, _super);
    function PD_4_3_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PD_4_3_2;
}(PD_4_3_1));
var demo_4_3_2 = new PD_4_3_2("capoo");
demo_4_3_2.sayName();
var Person_super = (function () {
    function Person_super(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    return Person_super;
}());
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(age, hobby) {
        var _this = _super.call(this, "Tom", "男") || this;
        _this.age = age;
        _this.hobby = hobby;
        return _this;
    }
    return Teacher;
}(Person_super));
var teacher = new Teacher(18, "coding");
teacher.name = "Jerry";
console.log("constructor.attributes:".concat(teacher.name, "\u662F\u4E2A").concat(teacher.age, "\u5C81\u7684").concat(teacher.sex, "\u5B69,\u559C\u6B22").concat(teacher.hobby));
var Parent = (function () {
    function Parent(name) {
        this.name = name;
    }
    return Parent;
}());
var Child = (function (_super) {
    __extends(Child, _super);
    function Child(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        _this.age = age;
        return _this;
    }
    return Child;
}(Parent));
var Parent_2 = (function () {
    function Parent_2() {
    }
    Parent_2.prototype.greet = function () {
        console.log("Hello from Parent");
    };
    return Parent_2;
}());
var Child_2 = (function (_super) {
    __extends(Child_2, _super);
    function Child_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child_2.prototype.greet = function () {
        _super.prototype.greet.call(this);
        console.log("Hello from Child");
    };
    return Child_2;
}(Parent_2));
var child = new Child_2();
child.greet();
var Person_6 = (function () {
    function Person_6(_age) {
        this._age = _age;
    }
    Object.defineProperty(Person_6.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (_age) {
            this._age = _age;
        },
        enumerable: false,
        configurable: true
    });
    return Person_6;
}());
var demo_6 = new Person_6(18);
console.log("6. get age:", demo_6.age);
demo_6.age = 20;
console.log("6. set age:", demo_6.age);
var PD_7 = (function () {
    function PD_7() {
    }
    PD_7.prototype.saySth = function () {
        return "Hi ts";
    };
    return PD_7;
}());
var demo_7 = new PD_7();
console.log("7.", demo_7.saySth());
var PD_7_2 = (function () {
    function PD_7_2() {
    }
    PD_7_2.saySth = function () {
        return "Hi ts static";
    };
    return PD_7_2;
}());
console.log("7.", PD_7_2.saySth());
var Person_8 = (function () {
    function Person_8(name) {
        this._name = name;
    }
    return Person_8;
}());
var demo_8_1 = new Person_8("capoo");
var PD_9 = (function () {
    function PD_9() {
    }
    return PD_9;
}());
var demo_9_1 = (function (_super) {
    __extends(demo_9_1, _super);
    function demo_9_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    demo_9_1.prototype.doSth = function () {
        return "这是我实现的部分";
    };
    return demo_9_1;
}(PD_9));
var demo_9_2 = (function (_super) {
    __extends(demo_9_2, _super);
    function demo_9_2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    demo_9_2.prototype.doSth = function () {
        return 10;
    };
    return demo_9_2;
}(PD_9));

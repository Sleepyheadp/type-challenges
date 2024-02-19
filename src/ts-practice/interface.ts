// 4.interface 关键字
// 4-1.定义对象类型
interface Person3 {
	name: string;
	age: number;
	sex?: string;
	toSay?(num: number): string; // 为什么方法的类型是string,不是function吗?
}
let person4: Person3 = {
	name: "capoo",
	age: 18,
	toSay(num) {
		return num + "learning TS";
	},
};
// 4-2.定义函数类型
// 定义一个discount计算价格函数
interface Discount {
	// 定义对象中key和value的类型,key:value
	(price: number, piece: number): number;
}
let discount: Discount = function (price, piece) {
	const res = price * piece;
	console.log(res);
	return res;
};
discount(59.9, 2);
// 4-3.定义可索引类型(限制对象中键和值的类型)
interface Post {
	// 定义对象中key和value的类型
	[key: number]: boolean;
}
let post: Post = {
	1: true,
	2: false,
};
// 4-4.定义类类型 implements(落实interface中定义的内容)
interface Animal {
	name: string;
	eat(food: string, count: number): void;
}
// 类名首字母大写
class Cat implements Animal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	eat(food: string, count: number) {
		console.log(`${this.name} 吃了 ${count} 个 ${food}`);
	}
}
let CatOne = new Cat("cat");
CatOne.eat("apple", 2);
// 4-5.定义继承类型 extends关键字
interface TellSth {
	name: string;
	tell(sth: string): void;
}
interface DoSth extends TellSth {
	do(sth: string): void;
}
class personA implements DoSth {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	tell(sth: string) {
		console.log(`${this.name}说:${sth}`);
	}
	do(sth: string) {
		console.log(`${this.name}做:${sth}`);
	}
}
let A = new personA("Tom");
A.tell("我是tell方法");
A.do("do方法");
// 4-6.定义混合类型
interface Add {
	(): void;
	count: number;
}
function getValue(): Add {
	let counter = function () {
		counter.count++;
	} as Add;
	counter.count = 0;
	return counter;
}
let counter = getValue();
counter();
console.log("count:", counter.count);
counter();
console.log("count:", counter.count);

// 4-7.定义接口继承类(extends继承类,implements实现interface接口中的内容)
class Person {
	name: string;
}
interface PortExtends {
	info: string;
	toSay(): void;
}
class TestOne extends Person implements PortExtends {
	name: string;
	info: string;
	constructor(name: string, info: string) {
		super(); // 为什么要用super呢?因为TestOne是从Person类派生(继承来的)
		this.name = name;
		this.info = info;
	}
	toSay() {
		console.log(`${this.name} 说:这是 ${this.info}`);
	}
}
let newPerson = new TestOne("Tom", "PortExtends 接口继承");
newPerson.toSay();
/* 
    总结: extends和implements关键字
    1.extends:既可以用于类的继承也可以用于接口的继承,或者接口继承类,但是不能用于类继承接口(需要通过implements)
    2.implements表示一个类实现一个或多个接口
    3.extends继承的属性和方法,当前类或接口按需定义即可,不必全部包含.
    4.implements也就意味着类必须包含接口中所有的属性和方法.
  */
// 4-8.定义接口继承多个接口
interface One {}
interface Two {}
interface Three extends One, Two {}
class Three implements One, Two {}

// 4-9定义接口继承多个类
class A_4_9 {}
class B_4_9 {}
interface Three extends A_4_9, B_4_9 {}
// 4-10.定义接口继承多个类和接口
class A_4_10 {}
interface B_4_10 {}
interface C_4_10 extends A_4_10, B_4_10 {}
class show_4_10 implements C_4_10 {} // 包含如上所有类和接口的属性和方法
// 5.type关键字和interface关键字的区别
// 1.type关键字可以定义基本类型(也可以是any类型)别名,interface不可以
type Name_5_1 = string | any;
let demo_5_1: Name_5_1 = "capoo";
// 2.type可以定义多个类型
type Name_5_2 = string | string[]; // 数组或数组元素为字符串的数组
let demo_5_2: Name_5_2 = "capoo";
demo_5_2 = ["capoo", "tom"];
// 3.type可以定义元组类型(一个长度和类型都固定的数组),且必须按照定义的类型赋值
type Name_5_3 = [string, number];
let demo_5_3 = ["tom", 18];
// 4.type可以定义函数类型
type Name_5_4 = (argument: string) => string;
let demo_5_4: Name_5_4 = (argument) => {
	return argument;
};
// 5.type定义类类型
type Name = { new (name: string): Person_5_5 };
class Person_5_5 {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}
function createName(ctor: Name, name: string): Person_5_5 {
	return new ctor(name);
}
let demo_5_5 = createName(Person_5_5, "Tom");
console.log(demo_5_5.name);
// interface Name = new (name: string) => string; // 报错

// 16.interface类型继承(extends关键字) 见4-5使用interface关键字定义继承类型

// - 1.never关键字:函数返回类型定义
// 如果一个函数是永远也执行不完的,就可以定义返回值为类型为never
function errorFunc(): never {
	throw new Error();
	//后续的代码执行不到
	console.log(11);
}
// 死循环函数
function forNever(): never {
	while (true) {
		console.log(22);
	}
}

// - 2.给函数参数和返回值都进行类型注解
function add_2({ a, b }: { a: number; b: number }): number {
	return a + b;
}
add_2({ a: 1, b: 2 });

// - 3.数组类型的定义
// 示例一:值是一个数组,类型为string或者number
const arr_3_1: (number | string)[] = [1, "Tom"];
// 示例二:值是一个数组,类型为对象
const arr_3_2: { name: string; age: number }[] = [
	{ name: "Tom", age: 1 },
	{ name: "Jerry", age: 2 },
];

// - 4.元组tuple的使用:数组的加强,可以更好的规范其中的类型
const girl: (string | number)[] = [18, "one", "two"];
// 引入元组tuple => 类型必须一一对应
const tupleArr: [string, number, boolean][] = [
	["capoo", 18, true],
	["Tom", 20, false],
];

// - 5.联合类型和类型保护
// 5.1 联合类型:表示取值可以为多种类
function getLength_5_1(something: string | number): number | string {
	return something;
}
// 5.2 类型保护:当一个联合类型的变量被赋值为一个类型的值,访问不同类型的属性或方法时,会报错
// 5.2.1 类型保护:通过类型断言的方式
// <string>sth
function getLength_5_2(something: string | number): number | string {
	// <string>something:类型断言的一种方式,告诉编译器,这个参数是string类型
	// 只有string类型的参数才有length属性
	if ((<string>something).length) {
		return (<string>something).length;
	} else {
		return something;
	}
}

// as关键字
interface Say {
	isCan: boolean;
	canSay(): void;
}
interface Run {
	isCan: boolean;
	canRun(): void;
}
// sth as Say:类型断言的一种方式,告诉编译器,sth是Say类型
function selectOne(sth: Say | Run): void {
	if (sth.isCan) {
		// 确保sth是Say类型,才能调用canSay方法
		(sth as Say).canSay();
	} else {
		// 确保sth是Run类型,才能调用canRun方法
		(sth as Run).canRun();
	}
}

// 5.2.2 类型保护:通过in关键字
function selectTwo(sth: Say | Run): void {
	if ("canSay" in sth) {
		sth.canSay();
	} else {
		sth.canRun();
	}
}

// 5.2.3 类型保护:通过typeof关键字
// 示例一:引用变量或属性的类型
const arr = [""];
type r = typeof arr;
const _arr: r = ["c"]; // _arr是一个元素为string的数组
console.log("typeof 关键字", _arr);

// 示例二:检测变量类型
function isNumber(a: string | number, b: string | number): number {
	if (typeof a === "number" && typeof b === "number") {
		return a + b;
	} else {
		throw new Error("a and b should be number");
	}
}

// 5.2.4 类型保护:通过instanceof关键字
// instanceof:判断一个实例是否属于某个类.只能用于类的实例,不能用于接口
class _Dog {
	run() {
		console.log("dog run");
	}
}
class _Cat {
	say() {
		console.log("cat say");
	}
}
function isAnimal(animal: _Dog | _Cat): void {
	if (animal instanceof _Dog) {
		animal.run();
	} else {
		animal.say();
	}
}

// - 6.枚举enum的使用
// 6.1 数字枚举
enum Days {
	Sun, // 也可以为成员指定具体的值 Sun = 7,从7开始递增
	Mon,
	Tue,
	Wed,
	Thu,
	Fri,
	Sat,
}
// console.log(Days.Sun); // 0
// console.log(Days["Sun"]); // 0
// console.log(Days[0]); // Sun
function isToday(num: number): void {
	if (num === Days.Sun) {
		console.log("today is Sun");
	} else {
		console.log("today is not Sun");
	}
}
isToday(0);

// 6.2 字符串枚举
// enum Direction {
// 	Up = "UP",
// 	Down = "DOWN",
// 	Left = "LEFT",
// 	Right = "RIGHT",
// }
// // 6.3 异构枚举
// enum Answer {
// 	N,
// 	Y = "YES",
// }
// // 6.4 枚举成员类型和联合类型
// enum E {
// 	X,
// }
// function f(obj: { X: number }) {
// 	return obj.X;
// }
// f(E);

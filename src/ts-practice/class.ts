// 类class
// 1.类的基本使用
class PD_1 {
	name: string;
	age: number;
}
let demo_1 = new PD_1();
demo_1.name = "capoo";
demo_1.age = 18;
console.log(demo_1);

// 2.类的继承
class PD_2_1 {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	// 在 TypeScript 中，类和接口的定义有一些不同。
	// 在接口中，你可以定义一个方法的签名，但不能提供实现。
	// 在类中，你需要提供方法的实现。
	toSay(): void {
		console.log(`class extends : name is ${this.name}`);
	}
}
// 扩展:关于构造器中super()的使用
/* 
在 TypeScript 和 JavaScript 中，如果你的子类有自己的构造函数 constructor，那么你必须在构造函数中调用 super() 方法。这是因为 super() 会调用父类的构造函数，确保父类的属性被正确初始化。
然而，如果你的子类没有自己的构造函数，那么 TypeScript 和 JavaScript 会自动为你添加一个默认的构造函数，这个默认的构造函数会自动调用 super()。所以，在你的代码中，即使你没有显式地添加构造函数和 super()，父类的构造函数仍然会被正确调用。
这就是为什么你的代码可以正常工作，即使你没有显式地添加 super()。但是，如果你添加了自己的构造函数，那么你就需要显式地调用 super()。
*/
class PD_2_2 extends PD_2_1 {
	age: number;
	constructor(age: any) {
		// 派生类的构造函数必须包含"super()"调用
		super(age);
		this.age = age;
	}
}
let demo_2 = new PD_2_2("capoo");
demo_2.toSay();

// 3.类定义类型
/* 
PD_3 类有一个 constructor 方法，它接受 name 和 age 参数。然而，你仍然是直接创建了对象字面量并赋值给 demo_3_1。
在这种情况下，TypeScript 会检查这些对象字面量是否符合 PD_3 类的结构，即它们是否有 name 和 age 属性。
所以在new PD_3的时候需要传入对应的值
*/
// 带有constructor构造器
class PD_3 {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}
const demo_3_1: PD_3[] = [new PD_3("a", 1), new PD_3("b", 2)];

// 没有constructor构造器
/* 
PD_3_2 类没有 constructor 方法，所以你可以直接创建对象字面量 { name: "a", age: 1 } 和 { name: "b", age: 2 }，并将它们赋值给 PD_3_2[] 类型的变量 demo_3_2。
*/
class PD_3_2 {
	name: string;
	age: number;
}
const demo_3_2: PD_3_2[] = [
	{ name: "a", age: 1 },
	{ name: "b", age: 2 },
];

// 4.typescript中类的访问类型
// private protected public
// 4.1 public
class PD_4_1 {
	// 默认是 public类型 public在程序里的意思就是允许在内部和外部被调用
	name: string; // => public name:string
	constructor(name: string) {
		this.name = name;
	}
	sayName() {
		return this.name; // 内部调用
	}
}
let demo_4_1 = new PD_4_1("Tom");
console.log("class's type public :", demo_4_1.sayName()); // 外部调用

// 4.2 private 只允许在类的内部被调用，外部不允许调用。
class PD_4_2 {
	private name: string;
}
let demo_4_2 = new PD_4_2();
// demo_4_2.name = "capoo"; // 报错: 属性"name"为私有属性,只能在类"PD_4_2"中访问.ts(2341)

// 4.3 protected:只允许在类内及继承的子类中使用
class PD_4_3_1 {
	/*
		不给name赋值，我们希望在new class的时候，通过传递参数的形式给name赋值，并打印出来。
		这个时候我们就要用到构造函数。constructor
	*/
	protected name: string;
	constructor(name: string) {
		this.name = name;
	}
	sayName() {
		console.log("protected:", this.name); // 内部访问name
	}
}
class PD_4_3_2 extends PD_4_3_1 {
	age: number;
}
let demo_4_3_2 = new PD_4_3_2("capoo"); // 在这里传值
// demo_4_3_2.name = "capoo"; //报错:属性"name"受保护,只能在类"PD_4_1"及其子类中访问.
demo_4_3_2.sayName(); // 子类中访问

// demo constructor
class Person_super {
	constructor(public name: string, public sex: string) {}
}
class Teacher extends Person_super {
	constructor(public age: number, public hobby: string) {
		// super 关键字用于调用父类的构造函数。在 super 后面的括号中的参数，就是传递给父类构造函数的实参。
		super("Tom", "男"); // 也就是赋值给父构造函数的name和sex属性
	}
}
const teacher = new Teacher(18, "coding"); // 类teacher中有四个属性 name sex age hobby
teacher.name = "Jerry";
console.log(
	`constructor.attributes:${teacher.name}是个${teacher.age}岁的${teacher.sex}孩,喜欢${teacher.hobby}`
);

// 5.super关键字的使用
// 在 TypeScript 和 JavaScript 中，super 关键字主要在以下两种情况下使用：
/*
情况一:
	在子类的构造函数中调用父类的构造函数：
		当你创建一个类并让它继承自另一个类时，你需要在子类的构造函数中调用 super()。
		这是必须的，因为在子类的构造函数中，你不能在调用 super() 之前使用 this 关键字。
		super() 会调用父类的构造函数，确保父类的属性被正确初始化。
*/
class Parent {
	constructor(public name: string) {}
}

class Child extends Parent {
	constructor(name: string, public age: number) {
		super(name); // 调用父类的构造函数
		// 现在可以使用 `this`
		this.age = age;
	}
}
/* 
情况二:
	在子类的方法中调用父类的同名方法：
		如果你在子类中重写了一个父类的方法，但仍然想在子类的方法中使用父类的实现，你可以使用 super 关键字。
*/
class Parent_2 {
	greet() {
		console.log("Hello from Parent");
	}
}

class Child_2 extends Parent_2 {
	greet() {
		super.greet(); // 调用父类的 greet 方法
		console.log("Hello from Child");
	}
}

const child = new Child_2();
child.greet(); // 输出 "Hello from Parent" 和 "Hello from Child"

// 6.typescript类的getter/setter/static的使用
class Person_6 {
	// age只能在类内部调用,因此需要使用get方法获取
	constructor(private _age: number) {}
	get age() {
		return this._age;
	}
	set age(_age: number) {
		this._age = _age;
	}
}
const demo_6 = new Person_6(18);
console.log("6. get age:", demo_6.age); // 触发了get方法
demo_6.age = 20; // 修改值时set方法已经触发
console.log("6. set age:", demo_6.age); // 触发了get方法

// 7.类的static关键字的使用
// 用static声明的属性和方法，不需要进行声明对象，就可以直接使用对象中的属性和方法。
// - 正常写法
class PD_7 {
	saySth() {
		return "Hi ts";
	}
}
const demo_7 = new PD_7();
console.log("7.", demo_7.saySth());
// - static 关键字写法
class PD_7_2 {
	static saySth() {
		return "Hi ts static";
	}
}
console.log("7.", PD_7_2.saySth());

// 8.关键字:readonly 属性只读
class Person_8 {
	public readonly _name: string;
	constructor(name: string) {
		this._name = name;
	}
}
const demo_8_1 = new Person_8("capoo");
// demo_8_1._name = "tank"; // 无法为"_name"赋值,因为它是只读属性
// 直接报错：Cannot assign to '_name' because it is a read-only property.

// 9.关键字:abstract 抽象类:每个类自定义方法的实现
abstract class PD_9 {
	// abstract doSth() {} // 方法doSth不能有实现,因为它标记为抽象
	abstract doSth(): void; // 意思就是我在这里定义了方法,但是我不实现,具体怎么用,你们自己继承的时候自己写.
}
class demo_9_1 extends PD_9 {
	doSth() {
		return "这是我实现的部分";
	}
}
class demo_9_2 extends PD_9 {
	doSth() {
		return 10;
	}
}

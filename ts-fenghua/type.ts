/*只有ts在命名时使用数字,其他变量函数命名全部使用字母且驼峰的形式 */
// 1.给变量添加基本类型
let num: number = 1;
// 2.给对象添加基本类型
let person: {
	name: string;
	age: number;
} = {
	name: "capoo",
	age: 18,
};
// 2-1.使用type关键字定义可复用的类型
type Person2 = {
	name: string;
	age: number;
	// 2-2.可选的对象类型属性
	sexy?: string; // 可选对象类型属性
	toSay?(): string; // 函数的可选应该这样写
};
let person2: Person2 = {
	name: "capoo",
	age: 18,
	sexy: "man",
	toSay() {
		const res = "hello ts";
		console.log(res);
		return res;
	},
};
// 3.类型注释:ts会自动推断变量的类型,但是我们用ts就是为了自己设置类型的
let str = "hello ts";
let num2 = 2;

// 6.定义嵌套的对象类型
interface A_6 {
	name: string;
}
interface B_6 {
	A_6: A_6;
	age: number;
}
let C_6: B_6 = {
	A_6: {
		name: "tom",
	},
	age: 18,
};
// 7.给数组变量添加类型
let arr_7_1: number[] = [1, 2, 3];
let arr_7_2: Array<string> = ["1", "2", "3"];
interface Pd_7 {
	name: string;
	age: number;
	sex: string;
}
let pds: Pd_7[] = [
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
// 8.设置多个类型
let num_8: number | string;
num_8 = "one";

let arr_8: string | number[];
arr_8 = "eight";
arr_8 = [1, 2, 3];

interface PD_8 {
	name: string;
	age: number;
}
let demo_8: string | PD_8;
demo_8 = {
	name: "capoo",
	age: 18,
};
console.log("设置多个类型:", demo_8);
// 9.类型别名与值限定(通过type设置)
type Price_9 = number | string;
type Size_9 = "S" | "M" | "L" | "XL";
interface PD_9 {
	price: Price_9;
	size: Size_9;
}
let demo_9: PD_9 = {
	price: 99.9,
	size: "L",
};
// 10.给函数参数及返回值添加类型
// 示例一
function func_10(a: number, b: number): number {
	return a + b;
}
func_10(1, 2);
// 示例二
function cmd(a: string | string[]): string {
	return "success";
}
// 示例三
interface PD_10 {
	a: number;
	b: number;
}
function add_10(p: PD_10): number {
	console.log("给函数参数添加类型", p.a + p.b);
	return p.a + p.b;
}
add_10({ a: 1, b: 2 });

// 11.箭头函数的参数和返回值类型
let arrowFunc = (a: number, b: number): number => a + b;
arrowFunc(1, 2);
// 12.函数作为参数值,变量值或对象方法时的类型
// 首先定义一个箭头函数
type Arrow_12 = (res: string) => void; // {}空对象需要有返回值,void不需要.
// 箭头函数作为函数参数
function request_12(callback: Arrow_12) {
	callback("success");
}
// 函数调用
request_12((result) => {
	console.log("箭头函数作为函数参数:", result);
});
// 13.函数调用签名call signature
// 接口
interface RequestCallback {
	(result: string, code: string): void;
}
// 接口作为函数参数
function request(callback: RequestCallback) {
	callback("success", "200");
}
// 创建一个Callback回调函数
const callback: RequestCallback = (result, code) =>
	console.log(`call signature:${result} ${code}`);
// Callback回调函数作为request函数参数进行使用
request(callback);

// 14. any类型 / 类型强制转换(我们在使用时都会定义好类型)
let str_14 = "hello any type";
let a_14_1: any = 14; // typeof a_24_1 = number;
let a_14_2 = str_14 as string;
let a_14_3 = <string>str_14;
console.log(typeof a_14_1, typeof a_14_2, typeof a_14_3);

// 17.type定义的类型继承
type PD_17 = {
	title: string;
	price: number;
	inStock: boolean;
};
// 直接用等式来赋值,进行类型继承.&添加新的属性
type TShift_17 = PD_17 & {
	size: "S" | "M" | "L" | "XL";
};
const tshift_17: TShift_17 = {
	title: "体恤",
	price: 59.9,
	inStock: false,
	size: "L",
};

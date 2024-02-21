// 泛型的使用
// 什么是泛型?泛型是指在定义函数、接口或类的时候,不预先指定具体的类型,而在使用的时候再指定类型的一种特性
// 1.给函数添加泛型
// 约束函数的参数和返回值类型
// demo1
// 理解:我在这里定义了T和K,并在调用函数的时候传递类型,那么a和b就都是对应传入的类型,返回值类型为T
function add<T, K>(a: T, b: K): T {
	// 告诉ts,a和b是any类型,可以进行+运算
	return (a as any) + (b as any);
	// 类型断言了两次:第一次是a和b的类型,第二次是返回值的类型
	// return ((a as any) + (b as any)) as T;
}
// add<boolean>(true, false); // 1
// add<number>(1, 2); // 3
console.log(add<string, number>("capoo", 2)); // 3
// demo2:数组的使用
// function join<T>(arr1:Array<T>, arr2:Array<T>):Array<T>{ // 也可以这样写
function join<T>(arr1: T[], arr2: T[]): T[] {
	return [...arr1, ...arr2];
}
const res_15_1_1 = join<number>([1, 2, 3], [4, 5, 6]);
const res_15_2_2 = join<string>(["1", "2", "3"], ["4", "5", "6"]);
console.log("给函数添加泛型:", res_15_1_1, res_15_2_2);

// 2.给对象添加泛型
interface Obj<T> {
	value: T;
	desc: string;
}
let obj_one: Obj<string> = {
	value: "15",
	desc: "Add a generic to an object",
};
let obj_two: Obj<number> = {
	value: 15,
	desc: "Add a generic to an object",
};

// 3.定义多个泛型参数
let map: Map<string, number> = new Map();
map.set("1", 2);

function PrintType<T, K>(t: T, k: K) {
	console.log(`Map:${t}:${typeof t}, ${k}:${typeof k}`);
}
// 在函数调用的时候,要求参数的类型
PrintType<string, number>("a", 1);

// 4.泛型继承
// demo1:泛型继承
interface P_name {
	name: string;
}
class PD_4<T extends P_name> {
	constructor(private person: T[]) {}
	select(index: number): string {
		return this.person[index].name;
	}
}
const chooseOne = new PD_4([
	{ name: "Tom" },
	{ name: "Jerry" },
	{ name: "capoo" },
]);
console.log("generic extends:", chooseOne.select(2));

// demo2:泛型继承
interface PD_5 {
	title: string;
}
// extends继承
interface Cloth_5 extends PD_5 {
	// 添加一个size属性,并继承PD_15的属性
	size: "S" | "M" | "L" | "XL";
}
function displayTitle<T extends PD_5>(t: T) {
	console.log(t.title);
}
// 根据接口新建一个对象
let coat: PD_5 = {
	title: "coat",
};
// 对象接收一个对象作为参数
displayTitle<PD_5>(coat);

let tshirt: Cloth_5 = {
	title: "体恤",
	size: "L",
};
displayTitle<Cloth_5>(tshirt);

// 6. 泛型约束 generic constraint
// 6.0 直接添加约束类型
function getLength_0<T extends number | string>(sth: T): void {
	console.log((sth as any).length);
}
// 6.1 通过接口的方式约束泛型
interface LengthWise_1 {
	length: number;
}
function getLength<T extends LengthWise_1>(sth: T): void {
	console.log(sth.length);
}
// 6.2 通过类型别名的方式约束泛型
type LengthWise_2 = {
	length: number;
};
function getLength_2<T extends LengthWise_2>(sth: T): void {
	console.log(sth.length);
}
// 6.3 通过类的方式约束泛型
class LengthWise_3 {
	length: number;
}
function getLength_3<T extends LengthWise_3>(sth: T): void {
	console.log(sth.length);
}

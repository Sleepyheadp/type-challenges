// 15.泛型的使用
// 15-1.给函数添加泛型
// 约束函数的参数和返回值类型
function join<T>(arr1: T[], arr2: T[]): T[] {
	return [...arr1, ...arr2];
}
const res_15_1_1 = join<number>([1, 2, 3], [4, 5, 6]);
const res_15_2_2 = join<string>(["1", "2", "3"], ["4", "5", "6"]);
console.log("给函数添加泛型:", res_15_1_1, res_15_2_2);

// 15-2.给对象添加泛型
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

// 15-3.定义多个泛型参数
let map: Map<string, number> = new Map();
map.set("1", 2);

function PrintType<T, K>(t: T, k: K) {
	console.log(`Map:${t}:${typeof t}, ${k}:${typeof k}`);
}
// 在函数调用的时候,要求参数的类型
PrintType<string, number>("a", 1);

// 15-4:泛型的约束
// 定义一个接口
interface PD_15 {
	title: string;
	price: number;
	inStock: boolean;
}
// extends继承
interface TShift_15 extends PD_15 {
	// 添加一个size属性,并继承PD_15的属性
	size: "S" | "M" | "L" | "XL";
}
function displayTitle<T extends PD_15>(t: T) {
	console.log(t.title, t.price, t.inStock);
}
// 根据接口新建一个对象
let product: PD_15 = {
	title: "cloth",
	price: 99,
	inStock: true,
};
// 对象接收一个对象作为参数
displayTitle<PD_15>(product);

let tshirt: TShift_15 = {
	title: "体恤",
	price: 59.9,
	inStock: false,
	size: "L",
};
displayTitle<TShift_15>(tshirt);

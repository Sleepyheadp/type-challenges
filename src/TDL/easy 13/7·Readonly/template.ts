// type MyReadonly<T> = any;

// - 将所有的属性都变为只读 readonly
// keyof就是将接口T中的所有键遍历出来
type MyReadonly<T> = {
	readonly [P in keyof T]: T[P];
};

// - JS实现
// 给属性添加readonly
// function MyReadonly(obj) {
// 	const result = {};
// 	for (const key in obj) {
// 		result["readonly" + key] = obj[key];
// 	}
// 	return result;
// }

// - keyof关键字的使用举例
// interface PD {
// 	name: string;
// 	age: number;
// }
// type r = keyof PD; // "name" | "age"
// const demo: r = "name"; // demo的值可以是name或age

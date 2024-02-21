// T is an array, arr element type is any
type First<T extends any[]> = T extends [] ? never : T[0];

// js 实现
function First_js(arr) {
	if (arr.length > 0) {
		return arr[0];
	} else {
		return "arr is a empty array.";
	}
}
const r_1 = First([() => 123, { a: "string" }]);
const r_2 = First([]);
const r_3 = First([undefined, undefined]);

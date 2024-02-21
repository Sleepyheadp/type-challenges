// T is an array, arr element type is any
type First<T extends any[]> = T extends [] ? never : T[0];

// js 实现
function First_js(arr) {
	if (arr.length > 0) {
		return arr[0];
	}
}
First([3, 2, 1]);

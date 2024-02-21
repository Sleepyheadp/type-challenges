type MyExclude<T, U> = T extends U ? never : T;

// -- js -- exclude 排除

["a", "b", "c"]["a"];
function exclude_js(arr1, arr2) {
	return arr1.filter((el) => !arr2.includes(el));
}
console.log(exclude(["a", "b", "c"], ["a"]));

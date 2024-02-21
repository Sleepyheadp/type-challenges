type MyPick<T, K extends keyof T> = {
	// 遍历K，将T中的K属性取出来, 生成新的对象
	[P in K]: T[P];
};

// js实现
function myPick(T, K) {
	let picked = {};
	K.forEach((key) => {
		if (key in T) {
			picked[key] = T[key];
		}
	});
	return picked;
}

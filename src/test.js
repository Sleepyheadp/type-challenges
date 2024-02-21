function convert(arr) {
	const res = [];
	for (const i of arr) {
		const obj = { [i]: i };
		res.push(obj);
	}
	console.log(res);
	return res;
}
convert(["a", "b", "c"]);

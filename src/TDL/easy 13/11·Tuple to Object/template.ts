// type TupleToObject<T extends readonly any[]> = any;
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
	[P in T[number]]: P;
};

// const定义的是常量,不允许被修改,自带readonly
type TupleToObject_2<T extends readonly any[]> = {
	[P in keyof T]: P;
};
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
// 这里res拿到的是一个元组的索引
type res = TupleToObject_2<typeof tuple>;
// js实现方式
/*
  ['tesla', 'model 3', 'model X', 'model Y'] 
  =>
  {
    tesla: "tesla";
    "model 3": "model 3";
    "model X": "model X";
    "model Y": "model Y";
  }
*/
// 放到js文件中去执行
/* 
  分析怎么做:
    1.返回一个对象
    2.遍历这个数组,把值赋值给对象的key(问题:ts怎么遍历数组)
*/
/* function convert(arr) {
	const obj = {};
  arr.forEach((value) => {
    obj[value] = value;
  })
	return res;
}
convert(["a", "b", "c"]); */

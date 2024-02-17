/* 只有ts在命名时使用数字,其他变量函数命名全部使用字母且驼峰的形式 */
// 1.给变量添加基本类型
let num:number = 1;
// 2.给对象添加基本类型
let person : {
  name:string,
  age:number
} = {
  name:"capoo",
  age:18
}
  // 2-1.使用type关键字定义可复用的类型
  type Person2 = {
    name:string,
    age:number,
    // 2-2.可选的对象类型属性
    sexy?:string, // 可选对象类型属性
    toSay?():string // 函数的可选应该这样写
  }
  let person2:Person2 = {
    name:"capoo",
    age:18,
    sexy:"man",
    toSay(){
      const res = "hello ts";
      console.log(res);
      return res;
    }
  }
// 3.类型注释:ts会自动推断变量的类型,但是我们用ts就是为了自己设置类型的
let str = "hello ts"
let num2 = 2
// 4.interface 关键字
  // 4-1.定义对象类型
  interface Person3 {
    name:string,
    age:number,
    sex?:string,
    toSay?():string // 为什么方法的类型是string,不是function吗?
  }
  let person4 : Person3 = {
    name:"capoo",
    age:18,
  }
  // 4-2.定义函数类型
  // 定义一个discount计算价格函数
  interface Discount {
    (price: number) : number
  }
  let discount:Discount = function(price){
    const res = price * 0.8
    console.log(res);
    return res
  }
  discount(1)
console.log("capoo")
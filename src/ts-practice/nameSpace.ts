// 1.nameSpace命名空间
namespace MyNamespace {
	export class MyClass {
		constructor(public message: string) {}

		log() {
			console.log(this.message);
		}
	}
}

// 使用命名空间中的类
let myClassInstance = new MyNamespace.MyClass("Hello, world!");
myClassInstance.log(); // 输出 "Hello, world!"

// 2.子命名空间
namespace MyNamespace {
	export namespace MyInnerNamespace {
		export class MyInnerClass {
			constructor(public message: string) {}

			log() {
				console.log(this.message);
			}
		}
	}
}

// type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;

type MyAwaited<T> = T extends Promise<infer U>
	? MyAwaited<U>
	: T extends { then: (onfulfilled: (arg: infer U) => any) => any }
	? U
	: T extends number
	? number
	: T;

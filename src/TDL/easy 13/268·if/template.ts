type If<C, T, F> = C extends true ? T : F;

// if c is true, return T, else return F
// js
// function IF(C, T, F) {
// 	if (C === true) {
// 		return T;
// 	} else {
// 		return F;
// 	}
// }

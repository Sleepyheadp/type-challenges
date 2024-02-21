type Length<T> = T extends readonly any[] ? T["length"] : 0;

// -- js --

function return_length(arr) {
	if (arr.length && arr.length > 0) {
		return arr.length;
	} else {
		return "This is not a tuple";
	}
}

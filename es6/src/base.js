
//let 块级作用域

let a = 3;
console.log(this.a);

let letTest1 = () => {

	{

		var b = 2;
		let a = 10;
	}
	console.log(b);
	console.log(a);

	console.log(c);

	let c = 3;
};

let letTest2 = () => {

	var aa = 3;

	if (true) {

		typeof aa;
		let aa = 2;

		// var aa = 3;
	}
};

letTest1();
letTest2();

let ConstTest = () => {

	// const aa;

	const b = 2;

	b = 3;

	console.log(c);

	if (true) {
		const c = 3;
	}
};

ConstTest();




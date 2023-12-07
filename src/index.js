for (let i = 0; i < 10; i++) {
	console.log(i);

	const factorial = require("./factorial");
	console.log(factorial(i));

	const add = require("./add");
	console.log(add(i, i));

	const fibonacci = require("./fibonacci");
	console.log(fibonacci(i));
}

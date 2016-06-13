import 'babel-polyfill';

let testPromise = function () {
	return new Promise(function (resovle, rej) {
		let result = 'promise resovle';
		setTimeout(function () {
			resovle(result);
		}, 1000);
	});
};

let result = testPromise();

result.then(function (res) {
	console.log(res);
});
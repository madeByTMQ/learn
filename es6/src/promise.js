
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback(value)).then(() => value),
    reason => P.resolve(callback(reason)).then(() => { throw reason })
  );

  // return this.then(
  //   value  => callback(value),
  //   reason => P.resolve(callback(reason)).then(() => { throw reason })
  // );
};

let promise1 = new Promise((res, rej) => {

	setTimeout(() => {
		res('hello');
		
		console.log('promise1 fire');
	}, 1000);

	setTimeout( () => {
		console.log('2s过去');
		rej('error');

		promise1.then((res) => 
			console.log(res)
			);

	}, 2000);
});

let promise2 = new Promise((res, reject) => {

	res(promise1);
});

// promise1.then((res) => {
// 	console.log(res);
// }).catch((err) => console.log(err));


promise2
.then((res) => {
	console.log(`promise2${res}`)

	return new Promise(function (resovle, reject) {

		setTimeout( () => {
			resovle('yahoo');
		}, 0);
	});
})
.then((re) => {

	return re;
})
.then((res) => {

	console.log(res);

	return new Promise(function (resovle, reject) {

		setTimeout( () => {
			resovle('现在是第三个then');
		}, 0);
	});

}).catch( (error) => {

	console.log(error);
}).finally( (v) => {

	console.log(v);
}).then( (v) => {
	console.log(v);
});


var p1 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 1000, "one"); 
}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 2000, "two"); 
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
var p5 = new Promise((resolve, reject) => {

	setTimeout(reject, 5000, "reject");
  // reject("reject");
});

Promise.all([p1, p2, p3, p4]).then(value => { 
  console.log(value);
}, reason => {
  console.log(reason)
}); 



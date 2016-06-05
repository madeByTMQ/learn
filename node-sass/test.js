const sass = require('node-sass');
const fs = require('fs');

sass.render({
  file: './test.scss',
}, function(err, result) { 

	if (err) {
		return console.log(err);
	}

	fs.writeFile('./result/output.css', result.css, function(err){
		if (!err) {
			console.log('1')
		}

		console.log(err);
	});

});
// OR
// var result = sass.renderSync({
//   data: scss_content
//   [, options..]
// });
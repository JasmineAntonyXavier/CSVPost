var request = require('request');
var LineByLineReader = require('line-by-line'),

lr = new LineByLineReader('stateandcapital.csv');

var count = 0;
lr.on('line', function (line) {
	count ++;
	if (count != 1){
		var res = line.split(",");
		console.log(res[0]);
		var jsonDataObj = { state_name: res[0], capital_name: res[1] };
		request.post({
			url: 'http://localhost:1000/states/',
			body: jsonDataObj,
			json: true
		  }, function(error, response, body){
		  console.log(body);
		});
	}
	
});
	

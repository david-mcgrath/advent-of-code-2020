(function () {
	var input = `1000340
13,x,x,x,x,x,x,37,x,x,x,x,x,401,x,x,x,x,x,x,x,x,x,x,x,x,x,17,x,x,x,x,19,x,x,x,23,x,x,x,x,x,29,x,613,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41`;

// input = `939
// 7,13,x,x,59,x,31,19`

	input = {
		timestamp: +input.split("\n")[0],
		buses: input.split("\n")[1].split(",").filter(x => x !== "x").map(x => +x)
	};
	
	var min_id = 99999;
	var min_time = 99999;
	for (var i = 0; i < input.buses.length; i++) {
		var time = input.buses[i] - (input.timestamp % input.buses[i]);
		if (time < min_time) {
			min_id = input.buses[i];
			min_time = time;
		}
	}
	
	return min_id * min_time;
})();
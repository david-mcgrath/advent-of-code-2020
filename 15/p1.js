(function () {
	var input = `0,13,1,16,6,17`;

	input = input.split(",").map(x => +x);
	
	var history = {};
	
	var curr = null, next = null;
	for (var i = 0; i < 2020; i++) {
		var ts = i + 1;
		
		var curr = i < input.length ? input[i] : next;
		
		next = history[curr] ? ts - history[curr] : 0;
		
		history[curr] = ts;
	}
	
	return curr;
})();
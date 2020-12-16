(function () {
	var input = `1000340
13,x,x,x,x,x,x,37,x,x,x,x,x,401,x,x,x,x,x,x,x,x,x,x,x,x,x,17,x,x,x,x,19,x,x,x,23,x,x,x,x,x,29,x,613,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41`;

	function gcd(a,b) {
		if (a === 0) return b;
		if (b === 0) return a;
		if (a === b) return a;
		if (a > b) return gcd(b, a % b);
		return gcd(a, b % a);
	}

	input = input.split("\n")[1].split(",").map(x => x !== "x" ? +x : null).map((x, i) => x ? { n: x, delta: i } : null).filter(x => x);
	
	var ring = 0;
	var ts = 0;
	
	for (var i = 0; i < input.length; i++) {
		var n = input[i].n;
		var delta = input[i].delta;
		
		if (ring === 0) {
			ring = n;
			ts = n;
		}
		else {
			while (n - (ts % n) !== delta % n) {
				ts += ring;
			}
			
			ring *= n / gcd(ring, n);
		}
	}
	
	return ts;
})();
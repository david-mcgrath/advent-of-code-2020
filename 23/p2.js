(function (n) {
	var input = `247819356`;

	//input = `389125467`; // Expected result: 149245887792
	
	input = input.split("").map(x => +x);
	for (var i = 10; i <= 1000000; i++) {
		input.push(i);
	}
	
	var min = 999;
	var max = 0;
	var cups = [];
	function Cup(value) {
		this.Value = +value;
		this.Active = true;
		this.Next = null;
		this.Prev = null;
		
		cups[this.Value] = this;
		if (max < this.Value) max = this.Value;
		if (min > this.Value) min = this.Value;
	}
	
	for (var i = 0; i < input.length; i++) {
		new Cup(input[i]);
	}
	for (var i = 0; i < input.length; i++) {
		var cup = cups[+input[i]];
		var prev_i = i - 1;
		var next_i = i + 1;
		if (prev_i < 0) prev_i = input.length - 1;
		if (next_i > input.length - 1) next_i = 0;
		cup.Prev = cups[+input[prev_i]];
		cup.Next = cups[+input[next_i]];
	}
	
	var current = cups[+input[0]];
	
	function step() {
		var removed = [current.Next, current.Next.Next, current.Next.Next.Next];
		
		removed.forEach(x => x.Active = false);
		
		var destination;
		destinationValue = current.Value;
		while (true) {
			destinationValue--;
			if (destinationValue < min)
				destinationValue = max;
			
			destination = cups[destinationValue];
			if (destination.Active)
				break;
		}
		
		removed[2].Next.Prev = removed[0].Prev;
		removed[0].Prev.Next = removed[2].Next;
		
		removed[2].Next = destination.Next;
		removed[0].Prev = destination;
		
		destination.Next.Prev = removed[2];
		destination.Next = removed[0];
		
		removed.forEach(x => x.Active = true);
		
		current = current.Next;
	}
	
	for (var i = 0; i < n; i++) {
		step();
	}
	
	return cups[1].Next.Value * cups[1].Next.Next.Value;
})(10000000);
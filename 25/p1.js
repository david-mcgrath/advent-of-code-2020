(function () {
	var card_public_key = 11239946;
	var door_public_key = 10464955;
	var subject = 7;

	// card_public_key = 5764801;
	// door_public_key = 17807724;
	// subject = 7; // Expected result: 14897079
	
	
	function step(n, subject) {
		return (n * subject) % 20201227;
	}
	
	function crack(num, subject) {
		var loop = 0;
		var n = subject;
		
		while (n !== num) {
			n = step(n, subject);
			loop++;
		}
		
		return loop;
	}
	
	var card_loop_size = crack(card_public_key, subject);
	
	var key = door_public_key;
	for (var i = 0; i < card_loop_size; i++) {
		key = step(key, door_public_key);
	}
	
	return key;
})();
(function () {
	var input = `Player 1:
44
24
36
6
27
46
33
45
47
41
15
23
40
38
43
42
25
5
30
35
34
13
29
1
50

Player 2:
32
28
4
12
9
21
48
18
31
39
20
16
3
37
49
7
17
22
8
26
2
14
11
19
10`;

	// input = `Player 1:
// 9
// 2
// 6
// 3
// 1

// Player 2:
// 5
// 8
// 4
// 7
// 10`; // Expected result: 306
	
	var state = input
		.split("\n\n")
		.map(x => x.split(":\n"))
		.map(x => [x[0], x[1].split("\n").map(y => +y)])
		.reduce((a, b) => {
			a[b[0]] = b[1];
			return a;
		}, {});
	
	function step() {
		var activePlayers = Object.keys(state)
			.filter(x => state[x].length > 0);
		
		if (activePlayers.length < 2) {
			return false;
		}
		
		var cards = activePlayers
			.map(x => { return { Player: x, Card: state[x].shift() }; });
		
		cards.sort((a, b) => b.Card - a.Card);
		
		var winner = cards[0].Player;
		
		for (var i = 0; i < cards.length; i++) {
			state[winner].push(cards[i].Card);
		}
		
		return true;
	}
	
	while (step()) {}
	
	return Object.keys(state)
		.map(x => state[x]
			.map((y, i) => y * (state[x].length - i))
			.reduce((a, b) => a + b, 0))
		.reduce((a, b) => a + b, 0);

})();
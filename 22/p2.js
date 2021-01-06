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
// 10`; // Expected result: 291
	
	function State(input) {
		this.State = typeof input === "string"
			? input
				.split("\n\n")
				.map(x => x.split(":\n"))
				.map(x => [x[0], x[1].split("\n").map(y => +y)])
				.reduce((a, b) => {
					a[b[0]] = b[1];
					return a;
				}, {})
			: input;
		this.Seen = {};
		
		this.NewGame = function (cards) {
			var numCards = cards
				.reduce((a, b) => {
					a[b.Player] = b.Card;
					return a;
				}, {});
			
			var state = this.State;
			
			return new State(Object.keys(state)
				.reduce((a, b) => {
					var num = numCards[b];
					a[b] = state[b].filter((x, i) => i < num);
					return a;
				}, {}));
		}.bind(this);
		this.IsDuplicateState = function () {
			var stateString = JSON.stringify(this.State);
			if (this.Seen[stateString]) {
				return true;
			}
			else {
				this.Seen[stateString] = true;
				return false;
			}
		}.bind(this);
	}
	
	var initialState = new State(input);
	
	function game(state) {
		var winner;
		for (winner = null; !winner; winner = step(state)) {}
		return winner;
	}
	
	function step(state) {
		var activePlayers = Object.keys(state.State)
			.filter(x => state.State[x].length > 0);
		
		if (activePlayers.length < 2) {
			return activePlayers[0] || "(no winner)";
		}
		
		if (state.IsDuplicateState()) {
			return activePlayers[0];
		}
		
		var cards = activePlayers
			.map(x => { return { Player: x, Card: state.State[x].shift() }; });
		
		// Recurse...
		var winner;
		if (cards.filter(x => x.Card > state.State[x.Player].length).length === 0) {
			winner = game(state.NewGame(cards));
			cards.sort((a, b) => a.Player === winner ? -1 : 1);
		}
		else {
			cards.sort((a, b) => b.Card - a.Card);
			winner = cards[0].Player;
		}
		
		for (var i = 0; i < cards.length; i++) {
			state.State[winner].push(cards[i].Card);
		}
		
		return false;
	}
	
	game(initialState);
	
	return Object.keys(initialState.State)
		.map(x => initialState.State[x]
			.map((y, i) => y * (initialState.State[x].length - i))
			.reduce((a, b) => a + b, 0))
		.reduce((a, b) => a + b, 0);

})();
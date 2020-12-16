(function () {
	var input = `99
104
120
108
67
136
80
44
129
113
158
157
89
60
138
63
35
57
61
153
116
54
7
22
133
130
5
72
2
28
131
123
55
145
151
42
98
34
140
146
100
79
117
154
9
83
132
45
43
107
91
163
86
115
39
76
36
82
162
6
27
101
150
30
110
139
109
1
64
56
161
92
62
69
144
21
147
12
114
18
137
75
164
33
152
23
68
51
8
95
90
48
29
26
165
81
13
126
14
143
15`;

	input = input.split("\n")
				 .map(x => +x);
	
	// var state = {
		// value: 0,
		// path: [],
		// remaining: input.map(x => x),
		// options: function () {
			// return this.remaining.filter((x => x - value >= 0 && x - value <= 3).bind(this));
		// },
		// step: function () {
			// return this.options().
		// }
	// };
	
	input.sort((a, b) => a - b);
	
	input[input.length] = input[input.length - 1] + 3;
	
	var deltas = input.map((x, i) => i === 0 ? x : x - input[i - 1]);
	
	return deltas.filter(x => x === 1).length * deltas.filter(x => x === 3).length;
})();
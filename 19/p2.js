(function () {
	var input = `65: 35 126 | 43 104
35: "b"
28: 43 93 | 35 109
81: 35 16 | 43 126
100: 95 35 | 67 43
4: 113 35 | 61 43
93: 43 94 | 35 38
60: 35 108 | 43 102
19: 43 131 | 35 40
110: 43 92 | 35 126
116: 35 43 | 43 63
48: 35 35
82: 68 43 | 49 35
26: 35 58 | 43 24
89: 35 6 | 43 50
47: 90 35 | 65 43
56: 14 35 | 104 43
90: 43 92 | 35 18
43: "a"
94: 39 43 | 75 35
70: 55 43 | 12 35
55: 43 119 | 35 71
84: 7 35 | 76 43
128: 34 35 | 23 43
34: 63 63
105: 35 126 | 43 23
126: 35 43 | 43 43
107: 35 70 | 43 132
63: 35 | 43
27: 35 34 | 43 112
106: 33 43 | 77 35
132: 35 66 | 43 84
5: 92 43 | 48 35
91: 35 118 | 43 1
52: 115 63
37: 35 112 | 43 104
30: 35 59 | 43 14
73: 35 97 | 43 119
130: 35 74 | 43 75
129: 35 18 | 43 48
85: 43 43 | 43 35
29: 34 35
96: 35 127 | 43 3
75: 35 18 | 43 85
58: 101 35 | 36 43
11: 42 31
7: 126 43 | 14 35
59: 35 43
118: 35 126 | 43 18
33: 96 43 | 20 35
16: 43 43
92: 35 43 | 35 35
61: 16 35 | 34 43
111: 114 43 | 123 35
88: 43 26 | 35 19
114: 43 18 | 35 14
103: 65 43 | 128 35
38: 35 56 | 43 50
44: 88 43 | 83 35
76: 43 16 | 35 115
68: 43 13 | 35 69
22: 85 43 | 16 35
8: 42
113: 35 23 | 43 85
124: 15 43 | 47 35
104: 35 43 | 63 35
20: 4 35 | 78 43
49: 35 17 | 43 39
21: 43 48 | 35 104
109: 43 60 | 35 98
1: 43 48 | 35 126
121: 43 79 | 35 28
99: 73 35 | 103 43
42: 43 106 | 35 121
64: 35 118 | 43 81
102: 34 35 | 59 43
62: 35 91 | 43 64
50: 43 23 | 35 48
67: 35 105 | 43 2
83: 99 35 | 82 43
25: 35 41 | 43 117
97: 43 34 | 35 104
46: 43 57 | 35 128
15: 43 27 | 35 32
108: 85 43 | 126 35
10: 43 13 | 35 9
95: 86 43 | 30 35
127: 43 110 | 35 87
77: 43 100 | 35 62
69: 43 59 | 35 126
23: 35 63 | 43 43
54: 35 16 | 43 59
6: 35 104 | 43 112
13: 85 43 | 112 35
78: 29 43 | 128 35
125: 23 35 | 126 43
87: 23 43 | 48 35
40: 37 43 | 86 35
57: 112 43 | 59 35
36: 116 43 | 14 35
3: 43 133 | 35 129
32: 43 59 | 35 92
133: 35 59 | 43 92
39: 43 115 | 35 23
86: 43 16 | 35 112
9: 116 35 | 126 43
74: 115 35 | 126 43
18: 35 43 | 43 35
98: 5 35 | 54 43
66: 122 43 | 53 35
101: 35 115 | 43 23
120: 111 43 | 89 35
71: 59 35 | 59 43
119: 23 35 | 18 43
41: 130 43 | 46 35
24: 125 43 | 45 35
0: 8 11
80: 43 30 | 35 51
14: 35 35 | 43 43
72: 25 43 | 107 35
131: 35 52 | 43 22
122: 104 43 | 18 35
12: 21 43 | 75 35
112: 43 35
31: 43 44 | 35 72
45: 43 16
51: 18 43 | 92 35
2: 112 43 | 126 35
115: 35 35 | 43 35
79: 35 120 | 43 124
53: 85 43 | 59 35
123: 43 23 | 35 85
117: 35 80 | 43 10
17: 43 112 | 35 16

baaaabaababaaabbbbabbbabbabaabba
abaaababbaabbbbabbbabbaa
bababbbbaaabbbbaabbaaaaabbaababbabaaaaba
bbbabaabbbabbbbaabbabbbabaabbbbabaabbbbb
baaabaaaaaaaaabbaabaabaa
abbbaabbaaaaabbbbbaaabbabbbbabbb
bbabbaababbbaaabaaababaaaaaaaaba
abaabaababaabaabbbbabbba
bbbabbbaaabbabbababaaabbaaaaaabababaaaaa
abbbbababbbaaaabaababbaaabbbabbaaabbbbab
abaaabbaababaaaabbabbbab
bbbabababbbbbaaabaababbbbaaaababbbababaaaabbbbba
aaabbabaaaaabaabbbbbaaab
abbbbbaaaaabbbabbbbbbbaa
bbbabbaabaaaaababaaabbbabbbaabbbbbababbbaababbabaabaabbbbabbbaaa
baabaaabbababbbaaaaaabbaaabbbaaa
abbaabbbaaaaaabbbaaabbabaabbbabaabbaabab
bbbaaaabbaababaababaaaabbabaabaabaaabaababbaaaabaababaaaaaabbabbbbababab
bbbbbaaaabbbaabbbabbbabaaaaaaabbabaaaabababaabbbaabbbbbbbaabbbbabaaabbba
abbbaaaabbaababbbababaaabbbaabaabaaabbbabababaabaaabaaab
aaabbaaaaaabbaaaabbbaaab
abbbaaaabaaababbabaaaabb
baaabaaabbbaabbbbaaabaabbbabbbbaaaabbabb
baaabbbaabbabbabbbbaaabbaaabbbab
abbbbaaababbbbaabbaabbbb
abaabaabbbabbabbbaaabaabbbbbaabbbababbbbaaaaaabbabaabbabbbababab
ababbababababbbabbabbabb
baaababbbbbbbaabbbabbaabbbabaababaabbbbb
abaaaaabbbabaabbababbaaaaabbaabbabbababb
bbbbaabbbbaaabbbabaabbabababbbaabbabaabaaaaaaabbbabbababbbaabbbbaabaaaaabbbababaabbabbabbaaaabaa
bbbbabaaaaaaababaaabababbabbbaaa
bbbaaaabbabbbbababaabaab
babaabababbbbabaababaaab
abbababaaaaabaababbaabbbaabbaaaa
aaababbaaabaaabbbbbbbbaabaaabbbbabbaabaababbbbabbaabaaba
abaaaaabababaaaabaaaababaabaabbabaaababbbbbbbabbaaabaabbbbbbabab
bababbbaabbabbbaaaaaabaa
abbaaaaaaabbbaababaaabaa
bbababbaaaabbabbbabbbbaababbbaaa
aaabaabababbaababbabbbab
abaabababababbbaaaaaabbbbabbaabaaaaaaaaa
bababbbbaabbbaaaabaaaaabaaaabbab
aaababbabaaaaabaaaaaabbbababbbbaaaababaa
abaaababaaaabbaaaaaababaabbabbabbaaabaaaabbbabbaababbbaa
baabbbaababbaaaaabbaabaa
abaabbbaaababaabaabbbaabbababbbabbabaabababaabba
aabbbabababbaabbbaaaabba
baabbaababbbabbabbbbaaba
babbbaabbabbbbbabaabbbbababaaaaa
baabbabbbbbbaaaaaabaaaba
aaaaababbbabbaabbbbababababbabbabbabbaabaaaabbab
abbbaabaaaabaabaaaaababb
baaabaaabaabbabbaaababbaababbbbaababbbaa
abbabaababbbbbbaaaabababbababbbbabbbabbabbaaabbb
ababbaabbbbaabbbabbbbbabbaaaababbbbaaabb
aababbbbbbbaaabbbababbaaaaaaaababaababaabbabbabababaaaaaababbaab
baaabaabbaabaaabbbabbbaaababbbbb
ababbababbbbbaaabaabbaabaababaaa
bbbbbaaaabbaabbbabaaaaababaabbbaaaabbbbbbbbbaabb
abbbaabababaabaabaabbbaaabbbabba
baaababaaaaabaaababbabbb
bbabbabaaaaaabbbbbbbabbb
bababababbbaaabbabbaabbb
aabbbaababaabbaaabbbbabaabaabaabaababbbb
bbaabbabababaabbaabaaabb
aaabbbababaabbbabbabbbaabaabbbbbaabaababbabbabbabaabbabbbbbaaaab
bbabaabaabbabbababbbaaab
aaaaababbbaabaaaabaabaababaababb
baabaaabaabaaaabbbbabaababaababababababb
bbbaabbbbabbbbabaabbbaaababbabab
babaaabaabbbbbaaaababbaabbaababbbabababb
bbaabbaaaaaabbbbbbbbbbababbbabbb
babbaabaabaabaaaabaabbbabbbaaaabbbabbbaaaaaabbabaababbbabbbbaaababbaaaabbabbabab
abbbaababbaabbabaaabbbbbbabbaababbbaababaaaabbaaaabbbbab
aaaabaabbbbbbaabaababbaabaabaaababbaabbaabababaa
abbaaaaababaababaabbbbbb
babaababaaaaababbaabbaaa
ababaabaaabbabbbbbbaaaabaaababbb
abbababababbabbababbaaaaaabbbbaa
abbbababaaaaababbaababba
bbbaababbbabbbbabbbbabab
ababababaaaabbaabbbaaaba
aababbabbaabbbbbbbabaabaabbbbbabbabbbbaabaababab
aaaabaabababababaabbabbbabbbbbbbabbabaaa
abbabbbaaaabaababaaaabba
bbaaaabaaababbabaaaabbaabaaaabbb
abbbbbbabbaababbbaabaaaa
bbbaababbbabbabaababababbaaaabaabaaaabbaaabaabaa
abaabbaababaababbbabbaabbaaaabba
aaabbbbabaababaaabbababababbbbbbabababbb
abaabbabaaabbbabbbababaabaaaaaaa
aabaabbabbabaaaabaabaaaabaabaaba
babaabaaabbababbbabbaaabaaaababaabaabbaababbbabb
baabbbbabbaabbabaababaaa
aabbaababbbaabbabaabbbbbaababbbabbababaababbabaa
bbabaabaaabbbabababbaabbaaaabaabbababbababbaaaabbaabbaba
bbbaababbbbaaaabbbaabaaabbabbbaaaaabbabaabbababbbaabaabbbabbabbb
bbbaababbaaabaaabaaabbaababbaaaabaabaaba
bbbabaaaaaabbaaababbabababbaaaabbbbbabbabbbabbbaaabaabaa
aabababbbbabbbbbbbbbaabb
bababbbbababbaabaaababaa
aaababbaabbbbbaaababbaabbabbabbb
baaaaababbabaaaaabbbbabaaabababa
babbbbaabaaaababbaaaabba
baababbbbbbabaabbabbbbba
abbbbbaabbaaabbabbaaaaabbbabbaaabbbbbbba
bbabaaaaabaabaaaaaaabababbaaabbb
bbbabaaababaabaaaaaaababaaaabbbbabababbb
bbbaaabbaaabbbbabbbbabba
bbbaabbbaaababbabaaabbbabbbbbabaaabbbbaa
abbaaaaaababababaaabaabaababaaaabaabbbaabbbababaaaaaaaab
aabbabaaabbbbaaaababbbababbbbabb
bbbbbaabaaaaabbabaababaaabbaabbbbaabbaabbbbabbbb
bbaababbababbababbbaaabbababaaaabbabbbbabbaabbba
baaaababababbbabbbaababbaaaababaabbaabbabbaaaaaabbbaaababbaaaaaa
baabbbbaabaabbbabbbabbba
bbbabbabaababbabbbbbaaaa
babaabbbbabaaaababaabbab
abbaababbbbabbbabaabababaaaaabaaaabaaabbbbbababb
aabbbabaabaabaabbabbaaaaabbabbaa
abaaababbbabbababbaaaabbbbaabbbb
bbbaabbbbbabbaabbabaabba
abbaabbabbbaabbbababaabbbbbbbbba
abababbbbbbbaaabbbaaabaaaababbabaaaaaabaabaaabaaaaabaaaa
aababaababaabaaababbbabbbaabbababbaabaaaaabbaaaabababbab
bbbaabbaabbabbbbabbaabaaabbaaaba
bababbbbbbaaaaabbbbbaaaaaababbbb
aabababbabbaaaaabbbaaaabbbbabbabbaaaaaab
aaaaababbbabaaaabaaaabbb
abababbbaaabaaaabbabbabbbbbbbbbbabbbbbaabababbababbbaabaaaabbbabbbabbbbbbbbaaaabbaaaaaab
abbaabbabbabaabbaabbabab
aabaabbaabbbbaaabaababbbbaaaabbb
babaaaabaaaabbaaabbaabbaaaaaababbababbbaabaaaaabaaababaabaabbbbb
abaabbaaaabaabbaabbabbbb
aabbbaaababbbbabaaaaaaab
abbaabbabaabbbbabbbababb
bbbaaaaaabaabaabaababaabaabababbaaaabbabbababaab
baabbbaaababbababbbababaaaabbabaabbabbabbbaabaaabaabbaaa
abbbbbababbaabbbbbaaaaababbababb
abbbbbabbbaabbbaababaaab
ababaabbbabaaabaabaaaaaa
abbbaababaaababbbabbabbaaaaaaabbabbabbaaaabaabaaabbababb
bbaaaaababbbabbbbbbaaaaabbaaaaabbbbaaababbbababbbabbabababaababbaaabbbabbbbaaaabbaabbaba
aabaababbaabbabbababaabbabaabaaa
bbbbaaaaaabbbbbaabbbbbbb
ababaabababbaabbabbaabbabbbbaabaabbaaaab
aababbaaaabbaaabbabbabaa
aaababbbaabaabbaaaabaabababaaaabbabbaababbaaaaaaabaaaababbababbbababbaab
bababbbbbabbbbbbaabbabbbbaabbbab
babbaabbabaaababaabaaabbababbbaababaaaaabbbababb
bbbbbbbbaaaaabbabbaabbaaababbaabbbaaaaabbabbaabaabbabaaa
bbaababbbbbaabbaaabbbaaa
baabbaabaabaabaaaaabbabbaabaaababbbabbbb
bbbaaabbbaabbaabbaaabbbaababbaaaaababaabbaabbabbaabbbabbaaababbbabababaa
abaababaabbaabbbbaabbaba
aaaabaabbbbabaabbbbbbaabaabbaaabaaabbaabbbabbaaaababbbaa
aababbababbbababbabaabbbbabaabbbabaaaaabbaaaabba
baabbabbbabbaabbabababbbbbbbbbba
aabaababbbaaaabbbaabaabababbbababbbbbbabaabbbbbaabaabaab
babbbabbbabaabaabbbabbbbaaabbabbbbaaabbb
abbbbbbaaaabaabaaaaaaaaa
aabaabbabbbaabaabbbbbbbaabababbbabbbabba
aababbabaababbababaaababbbbabaababbababbbbbabbba
babababbbaababbaabaaaaabaababaaabbbbbbaa
bbabaaaabbbbbbababbbbbabbbbabbabaaaabababababaaaaabababa
babbabbababbbbaaaabbabab
abbbbababbaaaabaabbbaabbababbbaa
bbbaabbbbabaabaaaababaaa
abbabaabbbbaabbbabababba
abaabababbabbaabbbbababababababaaabababa
bbbabbbabaaaabbbababbbba
bbabbababbbabbabbababbbaaabbbaaabbabbbaababaaaabaabbaabb
abaaaaabaaabbabaaaababbabaababab
baabbbbbbbbbbbabaaabbbbbaabaaaababbbabbbbabaaaaaabbbbbbabbabbababbabbabaaabbaaabbaaaaaaa
aaabaabaababaabaabbaaaab
abbabbbabaababbbaaabbbbbabbaabaabaabbbab
baababaaaaaaababaaaaabaa
abbbbbbabaabbaababbbabbabaaabbabbbababababbaababbbaaabbbbbaaabaa
bbbbbbbbbbaabaaaaabbabbababbaaabbbaabbabbbbbbabbabbbbbbababaaabbbbbababa
aaabbabbaabbbbbbbbbbabbaabbbbabaaabbbbaabaabbbbbbbaabbbbaaabbbbbabaaaababbbababbabababbb
abbbbbabbabbbbabbbbababb
bbaaababaababaaaaaabbbabbbababba
babababaabbbbaaaababbbba
bbbbabaaaaaabbababbaaaabbbbbabbb
abbbbbbabababaaaabaababb
aaaaaabbbabaaaaaabbaaabb
ababaaaabaabbaababbaabaa
babbaabbbbaabbbabbbbaabb
bababbabbabaaaaaabbbabba
ababbbababbbabababbbabba
baaaaababbabbbaabbaaaaabaaabaaaa
abaabbaabaaababaabbbaaab
babbaabaabbbbbbaabbabaaa
bbaaaabbbbababbbaabbbbabaaaaaabaabbaabbbbbbbbaabbabbbbaaabbbbaaa
aaabbaaabbaaaaabbbabbbbaabaaabaaabbaababbbaabaabababbbaa
abbbbbbaababbaaaaababbbb
bbbaababbbbabababbababbbbbbbbaaaabbaabbaaabaabaa
bbaabbaaabbbbabaaaababbababaaababaaabaabaababbbb
aaaaabbaaaaaabaabbbababb
babababaaababbaabbaabbbbabaaaabb
baabbbaababbbbaababbbaaa
bbbabbaababaabababaaaaaa
abbababaaababbaababbabbababbaaab
abbabaabbbbaababbaaaaabababbaabbbabaabaabbabababaabbbbba
baaabbbaaabaabbaaabbbbaa
bbaabbaaaaaabbababbabaaabababaabaaabaaaabbabbabb
bbaaaaabbbbabaabbaaaaaaa
baaabaabbbbbbbabbbbaababbaabaababaabbbab
aaabaabaaabbabaabbbbbabb
aaaaaabaaabbbbbabaabaaba
abbbababbbabbbbbaaabbaab
aaaabaaaaaabbabaababbaabbbbbbbbbbbabaabaaaaabbaabbbbabbbabaaaaaaabbbbbbbbbababaa
bbbbbbbbaaaaabbbbaaaaaaa
ababaabbbaaababbbababbab
aaaaabbababbaabbabbbbbbb
aabbabaabbbaaabbabaabbbb
bbbaaaababbaabbababbabaa
abbbbbaababababaaaaabbaababbababaabbbbbb
bbbaabaaaabbaababbabaababbabbbab
bbaabbabbbbbabbbaabbabaaaabbbbbabbbbbabaabaababa
bbbaaaabbabbbabbaaabababbbaabaabbaaaabbb
babbbbabbbbaaabbbbabaaaaabbbbbaabbaaabbb
abbabaabbbaaabbaaaabaaaabbbabbbaabbbabaababbbaaabbbabbaa
baaaaaabbabbbbaaabbababaabbbaaababbbaaaabbaaabaa
aaabababaabaabbabbababab
aaaabaabbaaabbbababbbbaabaaabbabbbaabaab
bbaaaabaababababaaabababbaabaaaaabaaabaa
abaaaaabababbaabababaabbbabbaabbaabaaaaaaabbaaaabbaaaabaaaaababa
baaabaabaaaaaabaaabbbabbaaaaabba
baaaaababaabbbaabababbaababbbabbabbbbabaaaaabababbaaaabaaababaab
aaababbaabaabbbaabbbbabaaaabbbbaabaaaaaaaaaaaaaaababbbba
bababaaabaaaababaaaabbab
abaaaaabbbbaaaabbbbbbaababbaaaaabababbababaaaaaabbaaabaa
aabbaabababaabaaaaaaababbbbaabbbbbbbbbba
baababbaaaaabbabaaaabaaabbababbabbabaaababbabbaababbbbaabbabbbaabaaaabbbbbbbbaabbaabaaba
bbbaabbbbababababbbbbabb
aabababbbbbaaabbaaabababaabbbbaa
babbaabababbbabbababbaaaaaabaaaababbabab
baabbbbaabaababaabaaaaba
aaabbbbbabbbbbabbaaabbbababbbabbbbababbbbbbaaababbabbaaaabbaaabb
abaaababbbaabbabbbbabaaabaaabababaaaabbbbabbababbbababab
abaabaaaabbaaaaababbabaaabbabbbabaaabbbbabaaabaababbaaba
bababaabbbbaaaaabbbbaabaabbaababbaababba
aabbbabaabbbbbbaaabababa
aaabbbbaaabaabbaaaaaaaabaaabbbabbabbaaab
baababbbbaaabaaabbbaaaaa
aabbbaabaabaabaaaabbbbbb
bbbbaaabbbabbbabbbaabbbbbbbbbbbabaababab
bbbbbaaaaababbaababaaaabbaabbbabbbbbabab
bbbabaabbbababababbbabbbbaababbabaaabaaabbaabbbabaabababbaababaaabbbbbba
abbbbbbaabbabbbabbabaababbaabbaabbababbbaabbbbaaabbaabab
bbaabbbaabbaabbaaaabbbab
baaabaaabaabbabbaaabbbbbbaabbbaaaabaaabb
aaabaaabbbbabbabaaaabbbabbababaabbabbbabaaabaaab
abbabaabaabbbaabbaaababaababababaaabbaaabaabaabbbabbbbba
abbbaaaababaabababaabbabbabaabbbbaaaabbbbaababaabbbaabbababbabab
baaabbabbabaaababbbbbaaaaabbaaababbbaabbaaaaaaba
babaababaabaabbabaabbabbbbabaaaaaaabababaabbaabb
bbabbaaabbbaabbbbaaaaabbbbbbbbaaabbababbababbabbaaaabbaaaaaaabababbbabaaaababbab
ababaaaabbbabababababbbaabaaabbbaaabbbab
bbaaaaaaababbbaababbbbabaabbbabababbaabbbaaaabbababaabaabaaaaabbaaaaabab
ababbabaaaabababbbbaababbaaabbaaabbaaabaaabbabba
aabbaaabaababbabaabbaaabababbbbbaaaaaaababaabbbb
aabbabaabaaababbaabbbaaaababaaababbabbaa
aaaaababbaabbbbabaaabbbabbbbbbaababbabaa
bababbaaabbaabbaabbabaababaabaaaaababbabbababbbabbababaaaabaabbaaabbbbba
aabaabbaaabbbbbbbaabbbbabbbbbaabbabbaabbaaabbaaaabbbabbabbbbaaaabbaaabaaabaababb
babbaabbaabbababbbaaababbaaaaaabbbbbaaaa
bbbbbbbbaabbbaababbabaabaaabbbab
bbaabbabbbbbaabbaaabbbababbbabbababaaaaa
baabbaabaaabababaaabaaab
bababbbabbabbbaababbaaaabbaaabbbbabbbbaabaaabbbaabbbbbbbbbbababbbbabbbab
baaabbbbbabbbbbbbbabaabaabbbbbbb
ababaaaabbbaaabbaababbabababbaaabbbabbbb
aaabbaaabaaabaababbaaaab
babaaaabbaaabbbbaaaabbaaaaaabaaababbabbb
baaaaabbaaaaaaaaabbaaaabbababbab
aaababbaabbaabbbabbabababbabbbab
bbbbbaaaaaaaabbaabaabbaabbabbababaabbbababbababbbbbbabba
baaaabaaaaabaaaaabbbaaab
abaabaabaaabaaabaaaaaaab
aaaababaaaabbbbbabababbaaaabbbababaaaabbbaabbabaabaaabaaababaaaaabbaaaabaaaaaaaa
babaabababbbababaababaabababbbbbbbbbaaba
aababbababbbababbbbbabaabaabbbab
bababbbabaaababbbbabbbbbaabbbabababbaaababaaaabbbaaaaabb
bbbbbbbbabbabbbaabaabbaa
abbaaaaabaaabababbabaaab
babbaabababbbbaaaaabababaabbaaabbaabbaaaaaaaaaba
ababbaaabbababbbababbaabababaabbbabaaabbababbabb
abbbbbaaabbabaabbaabaaaaabaaabaa
bbaaaabbabaabbaabbbabababababaaabaababbbbababaab
bbbbbaaaabaababaabbbbabababbbaababbabbbb
abaaabbababaabbbaabaabbabbbbbbabbaaaabba
babaaabaaaaaabbbaababaaa
abbbababbaaabababbbbbbbbbabbbabaabbaabaa
abaabbaabababaaabbababba
babaabbbbaaabbabababababbbbbabaabaababab
abababababbaaaaaaaaabaabbabbaaaababbaabbaaabbaabbbbbabaabaaabbaa
aabaaaabababaabbbaababab
aaabbbbaabbbbaaabbaaabab
baabaaabbbabbbbbaabaaabbaabbabaabbbabbbbbaaaaabbabbabaaa
ababaababababbaaabaaabaabaabbbbb
baaabaaaabbbbbbaaabbbbaaaababaaababbababbbaabaabaaaabaaaaabaabba
aaabbbbbabaabbbabaabbbbb
abaabaabbbaaaabbbabbabaa
aaabbabaaaabbbbaabbbbaababbbaaab
bbbaaaababbaabbbbababbbbbaabbaababaaaaaabaaaaaab
abbaabbabaaaaababbababbbbbbbbbab
aaaaabbabbbbaaaabaaaabbaaaabaabbabbbaaab
baaaabbaaaababbabbbaaabbabaaababaabbbaabaabaaaaababbbabbbbaaabaababbbababbabbabaaaabaaabbbaaabaa
aaababbabbaababbababababbbbabbabbaabaaba
baaabbaabaaabbabbbbabbaa
babaabbbbbbabbabaaaaabaa
aababbababbbaabaaaaababb
bbaabbbaaabbaababaabaaababbbbabaabbabbbbababbbba
abbabaabbabbabbaabbabaababbabaaaaaabbbab
baabbbbbbbbaabbaababaaab
baaababaaaabababbabbaaaa
abbbbabaabbaabbaaaaaaaba
abbbababbbabaabbaabbbbbb
bababbbbbbbaabbbbabaaabaaabaaabb
baabbbaababababaabbaaaba
aababaabbababbbaaabaaaabababaaabaabbbbab
abbaaaaabababbbabbbabbba
baaabbbabbbaaabbbbaabaab
abbbaaaaabbbbbabababaaab
bbaabaaaaabbbabaaaaababb
aabbabbbbabbbbbbabbbaabbbbaaaabbbaabababbbbbaaaa
bbaaabaabbbbbbbbababbabb
bbbaabbbbabababaaaaabbbaaabababa
baaabaaaabaaababaabbbabb
bbabaabbbaababbbabbbabbb
abaaaaabbbabaabaabbababaabbaabbabbaabaaabbbbaaaa
bbbaaabbbabbaaaabaabbbab
aaaabbbabaaabbaabbbbbaabababbbabaaaabbbbaababaaa
abaaaaababbbbbabaabbabbbaaaaabbbbaaabaabbaabaabaabbaabab
baaaababbbbaaabbbbaabbababbaaabb
baaabaabaabbabbbbbaaaaabaabaabbb
baabaababbabbababaaabaaabbbbaaabbaabbbab
baaabbabaaabbabaaaaaaaba
aaaabababbaaaabbaababbaaaabaaaababaabbbabaabbaba
bababaaaabbaabbbabbaaabb
aaaaababbbaabaaaabbbabba
aaaabaabbbaabaaababbaabb
abaabbaabbaabbabababbabbaaaaaaaa
aabbaaabbbaabbababaaababaababbaaaababbabaabbbbabbbbbaabb
babababaabaaabbaabbbbababbbaababbaabbbaabaaaabba
baabbbbaababbaaaaabbbbabbababbabbaaabbbabababaaa
abbabbbabaababbbaaabbabbabbbbabb
abbaabbabbbbbaaaaabaaaaa
abaabaaaaabbbaababbaaaba
bbbaaabbbabbaabaaabbabaaaabbbbaa
aaababababaabaababbbbababbababab
babbaabbbbaabbaaababaaaaaabbbbababbbbabb
aabbabbbbbaababbbaaaaaaa
baaababbaaabbaabbbbababbbbbabbba
babbaaaabbabbaabbbbaaaba
bbbaababbabbabbabaaabbbaaababbba
aababbabaabaabbabbaabaaaabbbabaa
abbbbbaaaababaabbababaaaabaaabbb
aaabbbbbaaaabbbabbbaababbbbabaaabbbbabbbbabaaaaaabababbb
abbbaabbaababbaabbaaaaaa
babaababbbbaabaabbbbaaaa
abbabbabbaabbaabbbabbbbbaaabaaab
babbaaaaaabaabbaababbbabbaaaabbb
bababbbabbbbbaaabbaabaaabbaaabbabbabbabb
baababaabaaabbbaaaabaabb
abaabaaabbabbaabbbbbaabb
abaabbbaaaaabaababababbb
aaaaaaababbabbbababbbabbbaaaabbabaaaaaaaabbabaaabbabbbbababbbbbbbbabaabbbbbbbaabababbbaa
babaaabaabbbbababbaabbabbbbaabaaaababbbb
abbaabbbbaabbbbaaababbaabaababba
aaaababaaaaabaaaababaabaaabaaaabaabababbbbbabbba
bbaaabbababaabbbbbabaabbabbbbbbbaaaaaaba
bbaaaababbbaaaabbbaaaababbbbababbbbbabab
aaaababaabbbbababbbaabba
abbaaababbbaabaabaabababbbaabbaabbabababbaaabbbb
baabaabaaabbababbbbabbbabaaabaabbaaabbaabbaaabbabaabbbbb
aaabbabaaabaabbaaaaabaabbbabaaabbbaaaaaa
ababaaabbaaaaaabbabbabbb
baaabbbbabaabbaabbbbaaaa
babaaababbabaaaaabbbbababbbaaabb
bbabbbbbaaaababaaabbbabb
abbaabbbbaaabbaababbaabbbbaabaaaaaabbaaababbabbb
babaaabaaabababbbaaababaaabbbbbb
bbaabbbabbabbbbaabbbaaaabaaaaabb
bbabbbbaabaaabbabbabaabbbbaabbbbbabbaaab
baababaabbaaaabaabaabaaabbbabbaa
baaaabbababbbbbaababaababbbaaaaaabbbabab
abbbbbaababbaabbabbaabaa
aababaabbaaabbbbbaaaabaa
aaabbbbabaaabbaabaabbbbbbbaaaaababbbbabaababbabbbbaabbab
abaaababbbbbabaabaaaabbb
ababbbabbbabbaabaaaabbbabbbbaaabbbbabbbb
ababaaaaaabaaaabaabbabba
bbbababaababbaaabbaaaabaaaabbbbbaaaaaaaaabaababbaabbaaaa
baababaabbaabbbaaabaabbb
baaabbbaababaabaaabaaaabababbaaaabaababb
ababababbbbabbaabbbaaaaaaabaaabbaabbabab
bbabbbbabbaababbbabbbbaaabbababb
aaaaabbbababbababbabaaaabaaaaabb
bbaaabbaabbbbabaaaabbaab
bbabbaaaaabbaaaaaabbbbba
babaaaabbbbbbaaaaabbaaab
aaaabbbaaabaabbababaaabaababbbbb
bbbaaabbbbabbbaababbabab`;

	// input = `0: 4 1 5
// 1: 2 3 | 3 2
// 2: 4 4 | 5 5
// 3: 4 5 | 5 4
// 4: "a"
// 5: "b"

// ababbb
// bababa
// abbbab
// aaabbb
// aaaabbb` // expected result: 2

	input = input.split("\n\n");
	input = {
		rules: input[0].split("\n"),
		messages: input[1].split("\n")
	};
	
	var ruleStrings = [];
	for (var i = 0; i < input.rules.length; i++) {
		var str = input.rules[i].split(": ");
		ruleStrings[str[0]] = str[1];
	}
	
	var rules = [];
	
	// Replacement for part 2
	ruleStrings[8] = "42 | 42 8";
	ruleStrings[11] = "42 31 | 42 11 31";
	
	// 8 is always the first
	// 11 is always the last
	
	// So it's 42+(42 31|42 42 31 31|...)
	
	// First thing, need to figure out a minimum bound for 42 31, then I can limit the number of iterations and construct a regex
	
	// 42: (a(((b(a(a(ba|bb)|b(ba|aa))|b((b(b|a)|aa)a|(bb)b))|a(a(b(ba)|a(ba|bb))|b(b(ba|ab)|a(bb))))a|(((b(b(b|a)|aa)|a(aa|ab))b|((aa)b|((b|a)(b|a))a)a)b|((((b|a)(b|a))b)a|(((b|a)(b|a))b|(b(b|a)|aa)a)b)a)b)a|(a(((a(aa)|b(ab))a|(b(ba)|a(bb|aa))b)b|(b(b(ba|aa)|a(b(b|a)|aa))|a((ab)a|(ba|aa)b))a)|b(b(b(b(ba|aa)|a(ba|ab))|a(a(bb)|b(ba|aa)))|a(b(b(ba|aa)|a(ba|ab))|a(b(aa)|a(ba|aa)))))b)|b(a(b(((a(ba|ab)|b(bb|aa))a|(a(b(b|a)|aa)|b(aa|ab))b)a|(b(b(ba|(b|a)b)|a(ab))|a(a(b(b|a)|aa)|b(bb)))b)|a((a(b((b|a)(b|a))|a(ab))|b(a(ba)|b(ba|bb)))a|((a(ba|bb)|b(ba|ab))b|(b(ba|aa)|a(ba|(b|a)b))a)b))|b(a(a((a(bb|ab)|b(b(b|a)|aa))a|(b(ba|ab)|a(aa|ab))b)|b(b((bb|aa)b|(ba|(b|a)b)a)|a(a(b(b|a)|aa)|b(bb))))|b(a(b((aa|ab)a|(ba|aa)b)|a(((b|a)(b|a))b|(ba)a))|b(((ba|bb)a|(bb)b)b|(b(aa)|a(ba))a)))))
	// 31: (a((a(b((b(bb|ab)|a(b(b|a)|aa))b|((ba|a(b|a))a|(bb|aa)b)a)|a(((b(b|a)|aa)b|(ba|aa)a)a|(a(aa))b))|b(a(b((bb|ab)(b|a))|a((aa|ab)a|(aa)b))|b((b(ab)|a(ba|(b|a)b))a|(a(aa)|b(ab))b)))a|(((b(a((b|a)(b|a))|b(ba|(b|a)b))|a((b(b|a)|aa)b|(ba|ab)a))b|((b(ba|aa)|a(ba|(b|a)b))a|(((b|a)(b|a))b|(b(b|a)|aa)a)b)a)b|((a((aa|ab)a|(ab)b)|b(a(ba)|b(ba|aa)))a|(b(a(ab)|b(aa))|a(a(bb|ab)|b(b(b|a)|aa)))b)a)b)|b((b((b((bb|ab)b|(ba|aa)a)|a(b(ba|ab)|a(aa|ab)))a|(a((ab)a|(ba)b)|b(((b|a)(b|a))b|(b(b|a)|aa)a))b)|a(b(a(b(ba)|a(bb|aa))|b((ba|ab)a|(ba|bb)b))|a(a((aa|ab)a|(ab)b)|b((ba|a(b|a))b|(ba|aa)a))))a|(b((a((b(b|a)|aa)b|(ba|ab)a)|b((ba)b|(ba)a))a|((a(bb)|b(ba|(b|a)b))a|(b(ba|ab)|a(aa|ab))b)b)|a(b(((ba|(b|a)b)a|(ba|ab)b)a|((aa|ab)a|(ba)b)b)|a(((ba|aa)a|(bb|aa)b)b|(a(aa)|b(bb|ab))a)))b))
	
	var testRules = [
		"(a(((b(a(a(ba|bb)|b(ba|aa))|b((b(b|a)|aa)a|(bb)b))|a(a(b(ba)|a(ba|bb))|b(b(ba|ab)|a(bb))))a|(((b(b(b|a)|aa)|a(aa|ab))b|((aa)b|((b|a)(b|a))a)a)b|((((b|a)(b|a))b)a|(((b|a)(b|a))b|(b(b|a)|aa)a)b)a)b)a|(a(((a(aa)|b(ab))a|(b(ba)|a(bb|aa))b)b|(b(b(ba|aa)|a(b(b|a)|aa))|a((ab)a|(ba|aa)b))a)|b(b(b(b(ba|aa)|a(ba|ab))|a(a(bb)|b(ba|aa)))|a(b(b(ba|aa)|a(ba|ab))|a(b(aa)|a(ba|aa)))))b)|b(a(b(((a(ba|ab)|b(bb|aa))a|(a(b(b|a)|aa)|b(aa|ab))b)a|(b(b(ba|(b|a)b)|a(ab))|a(a(b(b|a)|aa)|b(bb)))b)|a((a(b((b|a)(b|a))|a(ab))|b(a(ba)|b(ba|bb)))a|((a(ba|bb)|b(ba|ab))b|(b(ba|aa)|a(ba|(b|a)b))a)b))|b(a(a((a(bb|ab)|b(b(b|a)|aa))a|(b(ba|ab)|a(aa|ab))b)|b(b((bb|aa)b|(ba|(b|a)b)a)|a(a(b(b|a)|aa)|b(bb))))|b(a(b((aa|ab)a|(ba|aa)b)|a(((b|a)(b|a))b|(ba)a))|b(((ba|bb)a|(bb)b)b|(b(aa)|a(ba))a)))))",
		"(a((a(b((b(bb|ab)|a(b(b|a)|aa))b|((ba|a(b|a))a|(bb|aa)b)a)|a(((b(b|a)|aa)b|(ba|aa)a)a|(a(aa))b))|b(a(b((bb|ab)(b|a))|a((aa|ab)a|(aa)b))|b((b(ab)|a(ba|(b|a)b))a|(a(aa)|b(ab))b)))a|(((b(a((b|a)(b|a))|b(ba|(b|a)b))|a((b(b|a)|aa)b|(ba|ab)a))b|((b(ba|aa)|a(ba|(b|a)b))a|(((b|a)(b|a))b|(b(b|a)|aa)a)b)a)b|((a((aa|ab)a|(ab)b)|b(a(ba)|b(ba|aa)))a|(b(a(ab)|b(aa))|a(a(bb|ab)|b(b(b|a)|aa)))b)a)b)|b((b((b((bb|ab)b|(ba|aa)a)|a(b(ba|ab)|a(aa|ab)))a|(a((ab)a|(ba)b)|b(((b|a)(b|a))b|(b(b|a)|aa)a))b)|a(b(a(b(ba)|a(bb|aa))|b((ba|ab)a|(ba|bb)b))|a(a((aa|ab)a|(ab)b)|b((ba|a(b|a))b|(ba|aa)a))))a|(b((a((b(b|a)|aa)b|(ba|ab)a)|b((ba)b|(ba)a))a|((a(bb)|b(ba|(b|a)b))a|(b(ba|ab)|a(aa|ab))b)b)|a(b(((ba|(b|a)b)a|(ba|ab)b)a|((aa|ab)a|(ba)b)b)|a(((ba|aa)a|(bb|aa)b)b|(a(aa)|b(bb|ab))a)))b))"
	];
	
	var min = 0;
	for (var i in testRules) {
		var str = testRules[i];
		while (str.indexOf("(") > -1) {
			str = str.replace(/\([^\(\)]*\)/gi, x => 
			{
				var options = x.replace("(", "").replace(")", "").split("|");
				options.sort((a, b) => a.length - b.length);
				return options[0];
			});
		}
		min += str.length;
	}
	
	// Need to get max length of string to check
	var max = 0;
	for (var i in input.messages) {
		if (input.messages[i].length > max) {
			max = input.messages[i].length;
		}
	}
	
	var iterations = max / min | 0;
	
	function Rule(index) {
		rules[index] = this;
		
		var str = ruleStrings[index];
		
		if (str.indexOf("\"") > -1) {
			var matchString = str.replaceAll("\"", "");
			
			this.Generate = function (x) {
				return matchString;
			}
		}
		else {
			var subRules = str.split(" | ").map(x => x.split(" ").map(y => rules[y] ? rules[y] : new Rule(+y)));
			
			this.Generate = function (x) {
				return "(" + subRules.map(y => y.map(z => z.Generate()).reduce((a, b) => a + b)).reduce((a, b) => a + "|" + b) + ")";
			}
		}
	}
	
	var start = new Rule(42).Generate();
	var end = new Rule(31).Generate();
	
	var rule = start + end;
	for (var i = 0; i < iterations; i++) {
		rule = start + "(" + rule + ")?" + end;
	}
	rule = "^(" + start + ")+" + rule + "$";
	
	var regex = new RegExp(rule);
	
	return input.messages.filter(x => regex.test(x)).length;
})();
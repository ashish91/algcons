	b a n a n a
b 1 1 1 1 1 1
a 0 1 1 2 2 2
n 0 0 1 1 3 3


function countDistinctSubsequence(S, T) {
	if (T.length == 0) {
		return 1;
	}

	if (S.length == 0) {
		return 0;
	}

	let mem = [];

	for (let i = 0; i < T.length; i++) {
		mem.push([]);
		for (let j = 0; j < S.length; j++) {
			if (i == 0) {
				mem[i].push(1);				
			} else if (j == 0) {
				mem[i].push(0);
			}
		}
	}

	for (let i = 1; i < T.length; i++) {
		for (let j = 1; j < S.length; j++) {
			if (S[j] == T[i]) {
				mem[i][j] = mem[i][j - 1] + mem[i - 1][j - 1];
			} else {
				mem[i][j] = mem[i][j - 1];
			}
		}
	}

	return mem[T.length - 1][S.length - 1];
}
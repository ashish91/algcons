1 0 1
1 1 1
1 1 1
1 1 1


1 1
1 1

1 1 1
1 2 1

1 0 1
1 2 
1

function maxSubMatrix(M) {
	let S = [];

	for (let i = 0; i < M.length; i++) {
		S.push([]);
		for (let j = 0; j < M.length; j++) {
			S[i][j] = i == 0 || j == 0 ? 1 : 0;
		}
	}

	let max = -1;
	for (let i = 1; i < M.length; i++) {
		for (let j = 1; j < M.length; j++) {
			if (M[i][j] == 1) {
				S[i][j] = min(S[i - 1][j - 1], S[i][j - 1], S[i - 1][j]) + 1;				
			} else {
				S[i][j] = 0;
			}

			max = max > S[i][j] ? max : S[i][j];
		}
	}

	return max;
}
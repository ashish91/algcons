inp = $stdin.readlines
S, Q = inp.shift.split.map(&:to_i)
inp.map!(&:to_i)
i = 0
cache = []

while i < Q do
	j = 2
	max = -1
	while j <= S && j <= inp[i] do
		max = j if S % j == 0 && inp[i] % j == 0 && !cache.include?(j)
		j += 1
	end
	i += 1
	cache << max if max != -1 && !cache.include?(max)
	puts max
end

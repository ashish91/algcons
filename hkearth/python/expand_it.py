import math

s = raw_input()
test_cases = int(raw_input())

count = [0] * 26

j = 0
while j < len(s):
	c = s[j]
	print j
	j += 1
	n = 0
	while j < len(s) and s[j].isdigit():
		n = 10 * n + int(s[j])
		j += 1
	count[(ord(c) - 97)] += n

for _ in xrange(test_cases):
	k = int(raw_input())
	i = 0
	while k > 0 and i < 26:
		k -= count[i]
		i += 1
	if k == 0:
		print chr(97 + i - 1)
	else:
		print -1
require 'pry-byebug'
S = gets.chomp
C = gets.chomp
P = gets.chomp.to_i

max = 0
curr = 0
pos = 0

P.times do |i|
	max += 1 if S[i] == C
end

b, e = 0, P-1

curr = max
while e < S.length
	e += 1
	curr -= 1 if S[b] == C
	curr += 1 if S[e] == C
	binding.pry
	if max <= curr
		max = curr
		pos = b + 1
	end
	
	b += 1
end

if max == P
	print -1
else
	print pos
end
inp = $stdin.readlines
i = 1
cache = {}
max = 0

def is_anagram?(str1, str2)
	return false unless str1.length == str2.length
	
	str1.chars.sort.join == str2.chars.sort.join
end

def char_key(str)
	str.chars.sort.join
end

while i <= inp[0].to_i do
	inp[i].strip!
	if cache.key?(char_key(inp[i]))
		cache[char_key(inp[i])][1] += 1 if is_anagram?(inp[cache[char_key(inp[i])][0]], inp[i])
		max = cache[char_key(inp[i])][1] if max < cache[char_key(inp[i])][1]
	else
		cache[char_key(inp[i])] = [i,1]
		max = 1 if max < 1
	end
	i += 1
end

puts max


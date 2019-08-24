inp = $stdin.readlines
i = 0
max = 0

def char_key(str)
	str.chars.sort.join
end

len = inp.shift
inp.map!{ |c| c.strip.chars.sort.join }
inp.sort!

count = 1
while i < len.to_i do
	if inp[i] != inp[i + 1]
		max = count > max ? count : max
		count = 0
	end
	i += 1
	count += 1
end

puts max


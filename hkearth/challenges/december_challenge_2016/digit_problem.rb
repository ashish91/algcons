x, k = gets.chomp.split
k = k.to_i
x = x.to_s
x.length.times do |i|
	break if k == 0
	if x[i] != "9"
		x[i] = "9"
		k -= 1
	end 
end

puts x
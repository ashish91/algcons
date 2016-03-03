t = gets.chomp.to_i

t.times do
	n = gets.chomp.to_i
	sample = gets.chomp.split(' ').map(&:to_i)

	max = 0
	len = 0

	i = 0
	while i < (1 << n) do
		subset = getSubset(i, sample)
    val = getXOR(subset) | getAND(subset)
    if(val > max)
      max = val
      len = subset.length
    elsif(val == max && subset.length > len)
      len = subset.length
    end
		i += 1
	end

  puts "#{max} #{len}"
end

BEGIN {
  def getXOR(arr)
    return 0 if arr.length == 0

    arr.reduce(&:^)
  end

  def getAND(arr)
    return 0 if arr.length == 0

    arr.reduce(&:&)
  end

  def getBits(num, size)
  	i = size - 1
  	bits = ''
  	while i >= 0 do
  		bits.concat((1 << i) & num != 0 ? "1" : "0")
  		i -= 1
  	end

  	bits
  end

  def getSubset(num, set)
  	bit = getBits(num, set.length)
    puts bit.inspect
  	subset = []
  	i = 0
  	while i < set.length do
  		if bit[i] == "1"
  			subset.push set[i]
  		end
  		i += 1
  	end
    puts subset.inspect

  	subset
  end
}

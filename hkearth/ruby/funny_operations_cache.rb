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
	$binary_cache = {}
  upto_binary = 0
  def getXOR(arr)
    return 0 if arr.length == 0

    arr.reduce(&:^)
  end

  def getAND(arr)
    return 0 if arr.length == 0

    arr.reduce(&:&)
  end

  def getBits(num)
		return $binary_cache[num] if $binary_cache.has_key?(num)

		if num == 0
			$binary_cache[num] = "0"
			return "0" if num == 0
		end

		temp = num
  	bits = ''
		while temp > 0 do
			bits.insert(0, (temp % 2).to_s)
			temp /= 2
		end
    $binary_cache[num] = bits

  	bits
  end

  def getSubset(num, set)
  	bit = getBits(num)
  	subset = []
  	i = bit.length - 1
		j = subset.length - 1
  	while i >= 0 do
  		if bit[i] == "1"
  			subset.push set[j]
  		end
  		i -= 1
			j -= 1
  	end

  	subset
  end
}

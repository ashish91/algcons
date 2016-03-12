def binary_search(arr, low, high, val)
	while low < high
		mid = (low + high)/2
		if val > arr[mid]
			low = mid + 1
		else
			high = mid
		end
	end

	return low
end

testcases = gets.chomp.to_i

testcases.times do
	n = gets.chomp.to_i
	arr = gets.split(' ').slice(0, n).map(&:to_i)
	l = gets.chomp.to_i

	a = Array.new(n, 0)
	a[0] = arr[0]

	tail = 1
	answer = []

	for i in (1..n-1)
		if arr[i] < a[0]
			a[0] = arr[i]
		elsif a[tail - 1] < arr[i]
			a[tail] = arr[i]
			tail += 1
		else
			place = binary_search(a, 0, tail - 1, arr[i])
			a[place] = arr[i]
		end

		if(tail >= l)
			answer.push(a[l-1])
		end
	end

	if answer.empty?
		puts "-1"
	else
		puts answer.min
	end
end

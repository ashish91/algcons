class Stack
	attr_reader :memory

	def initialize
		@memory = []
	end

	def push(val)
		@memory.push(val)
	end

	def pop
		@memory.pop
	end

	def top
		@memory.last
	end

	def empty?
		@memory.empty?
	end
end

class MaxStack
	def initialize
		@aux = Stack.new
		@stack = Stack.new
	end

	def push(val)
		@stack.push(val)
		if @aux.empty?
			@aux.push(val)
		else
			curr_max = @aux.top > val ? @aux.top : val
			@aux.push(curr_max)
		end
	end

	def pop
		@stack.pop
		@aux.pop
	end

	def solve
		@aux.top
	end

	private
	attr_reader :stack, :aux
end

stack_inp = gets.strip.split(' ').map(&:to_i)
max = MaxStack.new

stack_inp.each do |v|
	max.push(v)
end

puts 'Current max is'
puts max.solve

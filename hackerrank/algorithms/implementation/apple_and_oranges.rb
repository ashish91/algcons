#!/bin/ruby

s,t = gets.strip.split(' ').map(&:to_i)
a,b = gets.strip.split(' ').map(&:to_i)
m,n = gets.strip.split(' ').map(&:to_i)
apple = gets.strip
apple = apple.split(' ').map(&:to_i)
orange = gets.strip
orange = orange.split(' ').map(&:to_i)

number_apples = 0
apple.each do |dist| 
	number_apples += 1 if (a + dist) >= s && (a + dist) <= t
end

number_oranges = 0
orange.each do |dist| 
	number_oranges += 1 if (b + dist) >= s && (b + dist) <= t
end

puts number_apples
puts number_oranges
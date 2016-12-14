#!/bin/ruby

t = gets.strip.to_i
for a0 in (0..t-1)
    n = gets.strip.to_i
    x = n
    y = x
    
    while y%3 != 0 && y > 0
        y -= 5
    end
    
    if y >= 0
        puts '5' * y + '3' * (x - y)
    else
        puts '-1'
    end
end

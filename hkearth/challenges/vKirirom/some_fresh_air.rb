=begin
# Read input from stdin and provide input before running code

print "Please enter your name: "
name = gets.chomp
print "Hi #{name}\n"
=end

len = gets.strip.to_i
values = gets.strip.split(' ').map(&:to_i)

i = 0
traversed = {}
max_dist = 0
while i <= len
    if traversed.key?(values[i])
        traversed[values[i]][:end] = i  
    else
        traversed[values[i]] = { start: i, end: i }
    end
    max_dist = (temp = traversed[values[i]][:end] - traversed[values[i]][:start]) > max_dist ? temp : max_dist  
    i += 1
end

if max_dist > 0
    puts max_dist
else
    puts -1
end
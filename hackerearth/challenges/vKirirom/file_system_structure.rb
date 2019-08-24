=begin
# Read input from stdin and provide input before running code

print "Please enter your name: "
name = gets.chomp
print "Hi #{name}\n"
=end

dir = gets.strip.to_i
child_map = {}
while dir > 1
    r, d = gets.strip.split(' ')
    unless child_map.key?(d)
        child_map[d] = r
    end
    dir -= 1
end

queries = gets.strip.to_i
while queries > 0
    q = gets.strip 
    if q != "root" && child_map.key?(q)
        curr = q
        path = ""
        while curr != "root"
            path = "/#{curr}" + path
            curr = child_map[curr]
        end
        puts path
    elsif q == "root"
        puts '/'
    else
        puts 'No such file or directory!'
    end
    queries -= 1
end

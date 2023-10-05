# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudo code: 
#name:filter_letters
#input: an array
#output: an array of words containing that letter
#prpcess: use .select to filter the array and return the words that contain the letter

def filter_letters(array, letter)
    array.select do |value|
        value.include?(letter)
    end
end
p filter_letters(beverages_array, filter_letter_o)
p filter_letters(beverages_array, filter_letter_t)

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
#name: hash_to_ordered_array
#input: a hash
#output: an array of values in alphabetical order
#process: use .values to get the values of the hash, then use .flatten to get rid of nested arrays, then use .sort to sort the array alphabetically

def hash_to_ordered_array hash
    hash.values.flatten.sort
end
p hash_to_ordered_array us_states

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code:
#name: Bike
#input: model, wheels, current_speed
#output: a string interpolated sentence with the model, wheels, and current_speed
#process: use attr_accessor to get the model, wheels, and current_speed, then use interpolation to return a sentence with the data

class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize model, wheels = 2, current_speed = 0
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster number
        @current_speed += number
    end
    def brake number
        @current_speed -= number
        return @current_speed if @current_speed >= 0
        @current_speed = 0
    end
end
my_bike = Bike.new "Trek"
p my_bike.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:
#name: pedal_faster
#input: a number
#output: a number
#process: add the number to the current_speed

# def pedal_faster number
#     @current_speed += number
# end

#name: brake
#input: a number
#output: a number
#process: subtract the number from the current_speed

# def brake number
#     @current_speed -= number
#     return @current_speed if @current_speed >= 0
#     @current_speed = 0

p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
p my_bike.brake(25)
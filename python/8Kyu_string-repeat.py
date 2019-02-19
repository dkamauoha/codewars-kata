# Write a function called repeatStr which repeats the given string string exactly n times.

# repeatStr(6, "I") // "IIIIII"
# repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

def repeat_str(repeat, string):
    x = ''
    i = 0
    while i < repeat:
        x += string
        i += 1
    return x
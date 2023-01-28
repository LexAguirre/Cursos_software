"""
try:
    print(0/0)
except ZeroDivisionError as error:
    print(error)

try:
    assert 1 != 1, "One is equal to One"
except AssertionError as error:
    print(error)

Try:
    age = 10 
    if age < 18:
        raise Exception("You're not an adult.")
except Exception as error:
    print(error)

print("Hello")
"""
# Lo de arriba y de abajo es igual
try:
    print(0/0)
    assert 1 != 1, "One is equal to One"
    age = 10
    if age < 18:
        raise Exception("You're not an adult.")
except ZeroDivisionError as error:
    print(error)
except AssertionError as error:
    print(error)
except Exception as error:
    print(error)
print("Hello")

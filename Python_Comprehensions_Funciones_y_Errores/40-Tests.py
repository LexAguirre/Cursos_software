original = [1, 2, 3, 4, 5]
# new = []

# for x in original:
#     new.append(x * 2)


new = list(map(lambda x: x * 2, original))


print(new)

a = {1, 2}
b = {2, 3}
print(a | b)

a = {1, 2}
b = {2, 3}
print(a - b)

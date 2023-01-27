import utils

keys, values = utils.get_population()
print(keys, values)

print(utils.A)

data = [
    {
        "Country": "Colombia",
        "Population": 500
    },
    {
        "Country": "Bolivia",
        "Population": 300
    }]

country = input("Type Country => ")

result = utils.population_by_countries(data, country)
print(result)

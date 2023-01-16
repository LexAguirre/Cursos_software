import random;

def run():
    contries = ["col", "mex", "bol", "pe"];

    population_v2 = {country: random.randint(1, 100) for country in contries}
    print(population_v2);

    result = {country: population for (country, population) in population_v2.items() if population > 50}
    print(result);

    text = "Hello, I'm Ramon";

    unique = { caracter: caracter.upper() for caracter in text if caracter in "aeiou"};
    print(unique);

if __name__ == '__main__':
    run();
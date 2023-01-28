def get_population():
    keys = ["col", "bol"];
    values = [300, 400];
    return keys, values;

A = "Hello"

def population_by_countries(data, country):
    result = list(filter(lambda item: item["Country"] == country, data));
    return result;
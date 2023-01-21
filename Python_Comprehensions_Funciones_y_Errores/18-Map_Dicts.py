items = [
    {
        "product": "shirt Urbant",
        "price": 100
    },
    {
        "product": "shirt nike",
        "price": 300
    },
    {
        "product": "shirt CK",
        "price": 400
    },
];

prices = list(map(lambda item: item["price"], items)); 
print(prices);

def add_taxes(item):
    item["taxes"] = item["price"] * .19
    return item;

new_items = list(map(add_taxes, items));
print(new_items);
print(items);
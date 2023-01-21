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
    new_item = item.copy() # Se declara esta linea para evitar que se mute el array original ya que con copy traemos todo lo que contiene el otro diccionario
    new_item["taxes"] = new_item["price"] * .19
    return new_item;

new_items = list(map(add_taxes, items));
print("New items");
print(new_items);
print("Old list")
print(items);
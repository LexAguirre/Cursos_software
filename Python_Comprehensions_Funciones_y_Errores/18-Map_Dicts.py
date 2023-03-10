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
    item["taxes"] = item["price"] * .19 #Referencia el array y no como uno nuevo sino el existente por lo que lo muta.
    return item;

new_items = list(map(add_taxes, items));
print(new_items);
print(items);

#Aqui hay un problema ya que si no se quiere modificar el array original entonces no lo esta cumpliendo ya que modifica por lo que se debe editar la funcion add_taxes
"""
Los dicionarios
"""


def run():
    mi_diccionario = {
        "Llave_1": 1,
        "Llave_2": 2,
        "Llave_3": 3,
    }

    # print(mi_diccionario["Llave_1"]);
    # print(mi_diccionario["Llave_2"]);
    # print(mi_diccionario["Llave_3"]);

    poblacion_paises = {
        "Argentina": 44938712,
        "Brasil": 210147125,
        "Colombia": 50372424,
    }

    print(poblacion_paises["Argentina"])

    for pais in poblacion_paises.keys():  # Devuelve las llaves
        print(pais)

    for pais in poblacion_paises.values():  # Devuelve los valores de las llaves
        print(pais)

    for pais, poblacion in poblacion_paises.items():  # Devuelve los valores de las llaves y las llaves
        print(pais + " tiene " + str(poblacion) + " habitantes")


if __name__ == "__main__":
    run()

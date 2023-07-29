def get_packages_info(packages):
   weight = 0
   conteo_paises = {}

   for packs in packages:
      weight += packs[1]

      pais = packs[2]
      if pais in conteo_paises:
         conteo_paises[pais] += 1
      else:
         conteo_paises[pais] = 1
   
   weight = round(weight, 2)

   analisis = {
      "total_weight": weight,
      "destinations": conteo_paises
   }
   return analisis

paquetes = [
  (1, 20, "Mexico"),
  (2, 15.5, "Colombia"),
  (3, 30, "Mexico"),
  (4, 12, "Argentina"),
  (5, 8.2, "Colombia"),
  (6, 25, "Mexico"),
  (7, 18.7, "Argentina"),
  (8, 5, "Colombia"),
  (9, 22.3, "Argentina"),
  (10, 14.8, "Colombia")
]
print(get_packages_info(paquetes))
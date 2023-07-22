let desicion = prompt("Por favor, ingresa si quieres realizar una suma, resta, multiplicacion o division:");
desicion.toLowerCase()

console.log(desicion)
if (desicion == "suma"){
    let num1 = (prompt("Ingresa el primer numero a sumar")).toNumber()
    let num2 = (prompt("Ingresa el primer numero a sumar")).toNumber()

    console.log(num1 + num2)
} else if (desicion == "resta"){
    let num1 = (prompt("Ingresa el primer numero a restar")).toNumber()
    let num2 = (prompt("Ingresa el primer numero a restar")).toNumber()

    console.log(num1 - num2)
} else if (desicion == "multiplicacion"){
    let num1 = (prompt("Ingresa el primer numero a multiplicar")).toNumber()
    let num2 = (prompt("Ingresa el primer numero a multiplicar")).toNumber()

    console.log(num1 * num2)
} else if (desicion == "division"){
    let num1 = (prompt("Ingresa el primer numero a dividir")).toNumber()
    let num2 = (prompt("Ingresa el primer numero a dividir")).toNumber()

    console.log(num1 * num2)
} else {
    console.log("Opcion invalida")
}


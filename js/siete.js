//7- Escriba un script que muestre la tabla 
//de multiplicar de un número ingresado por pantalla,
//la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 
//del número elegido por el usuario.

let nTabla = parseInt(prompt('Ingrese el numero que desea saber la multiplicacion!'))

let tabla = (n) => {
    document.write(`LA TABLA DEL ${n} es: <br>`)
    for (let index = 1; index <= 10; index++) {
        document.write(`${n} X ${index} = ${n * index} <br>`)
    }
}

tabla(nTabla)
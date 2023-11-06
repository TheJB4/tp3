//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

//La fórmula del perímetro  es p = 2*(a +b)

//Ejemplo:

/*

Input:
lado A = 24
lado B = 5

Output: 58
*/

let ladoA = parseInt(prompt('Ingrese el lado A del triangulo'))
let ladoB = parseInt(prompt('Ingrese el lado B del triangulo'))

let perimetro = (a,b) => `El perimetro del triangulo es ${2 * ( a + b)}`

document.write(perimetro(ladoA,ladoB))

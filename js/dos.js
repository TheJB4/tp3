let preguntar = true;
let ciudades = []


while(preguntar){
    let ciudad = prompt('Ingrese una ciudad')

    if(ciudad === null){
        preguntar = false
        break
    }

    ciudades.push(ciudad)
}   


document.write(`El arreglo tiene ${ciudades.length} elementos <br>`)
document.write(`Elemento 1er posicion ${ciudades[0]} <br>`)
document.write(`Elemento 3er posicion ${ciudades[3]} <br>`)

ciudades.push('Paris')
ciudades[2] = 'Barcelona'

document.write(`Elemento ultima posicion ${ciudades[ciudades.length - 1]} <br>`)

document.write(`<ul>
    ${ciudades.forEach(e => document.write(`<li>${e}</li>`))}
</ul>`)
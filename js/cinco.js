//5- Definir una función 
//que muestre información sobre una cadena de texto
// que se le pasa como argumento. 
//A partir de la cadena que se le pasa, 
//la función determina si esa cadena está formada sólo por mayúsculas,
// sólo por minúsculas o por una mezcla de ambas.

let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let abc = 'abcdefghijklmnopqrstuvwxyz'

let result;

let mayusculasMinusculas = (string) => {
    for(let i = 0; i<string.length; i++){
        if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
            result = 'Solo contiene mayusculas'
        }else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
            result = 'Solo contiene minusculas'
        }else{
            result ='Contiene mayusculas y minusculas'
        }
    }

    return result
}

console.log(mayusculasMinusculas('la florencia se vaaa'))

let sumas = []
let aparaciones = []

for (let index = 1; index <= 50; index++) {
    let dado1 = Math.floor(Math.random() * 6 + 1)
    let dado2 = Math.floor(Math.random() * 6 + 1)

    let suma = dado1 + dado2

    if (!sumas.includes(suma)) {
        sumas.push(suma)
    }

    if (aparaciones[suma] !== undefined) {
        aparaciones[suma] += 1;
    } else {
        aparaciones[suma] = 1;
    }
}
console.log(sumas,aparaciones)

let numeros = [54, 89, 66, 32, 0]
for (let index = 0; index < numeros.length; index++) {
    while (numeros[index] < numeros[index + 1]) {
        let numeracao
        numeracao = numeros[index]
        numeros[index] = numeros[index + 1]
        numeros[index + 1] = numeracao
    }
    console.log(numeros[index])
}
let cliente = []
cliente.push(prompt("digite o nome do cliete  N°:" + (cliente.length + 1)))
cliente.push(prompt("digite o nome do cliete é N°:" + (cliente.length + 1)))
cliente.push(prompt("digite o nome do cliete é N°:" + (cliente.length + 1)))
console.log("lista de pessoas")
for (let index = 0; index < cliente.length; index++) {
    const posicao = index + 1
    console.log(posicao + " o cliente é:" + cliente[index])
}
let Aluno1 = parseFloat(prompt('Digite o primeiro valor do primeiro aluno: '));
let Aluno2 = parseFloat(prompt('Digite o primeiro valor do primeiro aluno: '));
let Aluno3 = parseFloat(prompt('Digite o primeiro valor do primeiro aluno: '));
let Aluno4 = parseFloat(prompt('Digite o primeiro valor do Segundo aluno: '));
let Aluno5 = parseFloat(prompt('Digite o primeiro valor do Segundo aluno: '));
let Aluno6 = parseFloat(prompt('Digite o primeiro valor do Segundo aluno: '));
let Aluno7 = parseFloat(prompt('Digite o primeiro valor do Terceiro aluno: '));
let Aluno8 = parseFloat(prompt('Digite o primeiro valor do Terceiro aluno: '));
let Aluno9 = parseFloat(prompt('Digite o primeiro valor do Terceiro aluno: '));
let operador1 = prompt('Digite o operador do primeiro aluno desejado: ');
let operador2 = prompt('Digite o operador do segundo aluno desejado: ');
let operador3 = prompt('Digite o operador do terceiro aluno desejado: ');
let resultado1;
let resultado2;
let resultado3;
switch (operador1) {
    case '/':
        resultado1 = Aluno1 + Aluno2 + Aluno3 / 3;
        break;
}
switch (operador2) {
    case '/':
        resultado2 = Aluno4 + Aluno5 + Aluno6 / 3;
        break;
}
switch (operador3) {
    case '/':
        resultado3 = Aluno7 + Aluno8 +Aluno9 / 3;
        break;
}

console.log('O resultado da operação é: ' + resultado1);
console.log('O resultado da operação é: ' + resultado2);
console.log('O resultado da operação é: ' + resultado3);
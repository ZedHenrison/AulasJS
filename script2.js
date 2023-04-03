/*
    Solicite 2 números, faça a soma deles 
    e apresente o resultado final ao usuário
*/
alert("Iremos somar dois número:")

let numberOne = prompt ("Digite o primeiro número :") 
let numberTwo = prompt ("Digite o segundo número :") 
const resultFinal = ( ( Number(numberOne) + Number (numberTwo) ) /2)

alert(`O resultado final é ${resultFinal}`)
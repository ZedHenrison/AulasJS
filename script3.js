/*
  Capturar 2 números
e fazer as operações matemáticas
de soma, subtração, multiplicação,
divisão e resto da divisão.
     
  E para cada operação exibir um alert com resultado

*/

alert( "Vamos calcular 2 número")

let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const divi = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("soma:" + sum) 
alert("subtração" + sub) 
alert("multiplicação:" + multi) 
alert("divisão:" + divi) 
alert("Resto da divisão:" + restDiv) 
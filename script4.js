/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let name = prompt ("Qual seu nome?")

let firstGrade = prompt("Qual é a sua primeira nota?")
let secondGrade = prompt("Qual é a sua segunda nota?")
let thirdGrade = prompt("Qual é a sua terceira nota?")

firstGrade = Number(firstGrade)
secondGrade = Number(secondGrade)
thirdGrade = Number(thirdGrade)

let average = (firstGrade + secondGrade + thirdGrade)/3 
let result = average >= 6
average = average.toFixed(1)

    if(result) {
        alert(`Parabéns ${name} você passou no bimestre !`)

}
    else{
        alert(`Não desanime ${name} e de o seu melhor na recuperação`)

}
        
alert(`${name} sua nota é ${average} `)


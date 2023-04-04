/*

[] Estruturas de dados: Objetos
[] object literal
[] for..of
*/


/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
   {
    name:"Luiz ",
    age:30,
    weight: 70,
    height:180
   },
   {
    name:"Claudia",
    age:32,
    weight: 80,
    height:185,
   },
   {
    name:"Pedro",
    age:20,
    weight:90,
    height:195,
   }
// podem ser infinitos nomes

]
let patientsData = []

for (let patient of patients) {
    patientsData.push(`${patient.name }  ${ patient.age } anos , pesa ${ patient.weight } kg e tem de ${ patient.height } cm altura.
`)

}
alert(patientsData)

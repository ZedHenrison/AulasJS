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

/*
 Lista de pacientes com todos os dados

for (let patient of patients) {
    patientsData.push(`${patient.name }  ${ patient.age } anos , pesa ${ patient.weight } kg e tem de ${ patient.height } cm altura.
`)

}

*/

// alert(patientsData)

const imcCalculator = (patients) =>{
    
    alert(`Paciente ${patients.name} seu IMC é
     ${(patients.weight / ((patients.height / 100)**2)).toFixed(2)}`)

}

for (let patient of patients) {

  imcCalculator(patient)

}

/* ************** EXEMPLO CLEAN CODE *****************

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  },
]

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}

*/
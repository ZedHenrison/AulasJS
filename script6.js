/*

[] Como controlar o fluxo da aplicação
[] Estrutura de repetição while
[] Gerar número aleatório utilizando Math()

Pacote com funcionalidades matemáticas
Math.random()
Math.round() - Math.ceil() - Math.floor()
[] Tipo de dado: NaN
não é um número
[] Tipo de erro: SyntaxError
erro de sintaxe; erro de escrita de código
[] console
Pacote com funcionalidades para o console do devtools (browser)
[] template literals ou template strings
interpolação de dados
Código da aula:


/*   ATIVIDADE

  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório 
  gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:" => **** while = enquanto **** 

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

let result = prompt ("Advinhe o número que estou pensando? Está entre 0 e 10 ")
const randomNumber = Math.round(Math.random() *10)

let xAttempts = 1;

while( Number(result) != randomNumber) {
    result = prompt (" Erro tente novamente ")
    xAttempts++
}
if(xAttempts > 1) {
alert (`Parabéns, o número que eu pensei foi ${randomNumber} e você acertou em ${xAttempts} tentativas`)
}
else if(xAttempts == 1) {`Parabéns, o número que eu pensei foi ${randomNumber} e você acertou em ${xAttempts} tentativa`}
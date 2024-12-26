var aluno = prompt("Digite o seu nome Aluno: ")
var nota1 = parseFloat(prompt("Digite a nota da sua prova: "))
var nota2 = parseFloat(prompt("Digite a nota de exercicios: "))

const soma = nota1 + nota2
const resultado = soma / 2

console.log(`Sua nota é: ${resultado}`)

if(resultado >= 7){
    console.log(`Parabéns ${aluno}, você foi aprovado!`)
} else if(resultado <7){
    console.log(`Querido aluno: ${aluno}, infelizmente você não alcançou a nota necessária para ser aprovado. Procure o seu professor!`)
}


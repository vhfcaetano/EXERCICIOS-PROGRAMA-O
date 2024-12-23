const nomealuno = prompt("Digite seu nome aluno: ")

const nota_prova = parseFloat(prompt("Digite sua nota de prova desse Semestre: "))
const nota_exercicios = parseFloat(prompt("Digite sua nota de exercicios desse Semestre: "))
const calculo = nota_prova + nota_exercicios
const resultado = calculo / 2

console.log(`${nomealuno}, sua nota é: ${resultado}`)

if(resultado >= 7){
    console.log(`Parabéns, você foi aprovado!`)
} else{
    console.log(`${nomealuno}, Infelizmente você foi reprovado. Procure o seu professor(a) para mais informações`)
}
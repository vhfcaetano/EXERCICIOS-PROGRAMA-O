let Aluno = prompt("Digite o seu nome caro Aluno: ")
let notaAluno = prompt("Agora digite a sua nota Final: ")

if(notaAluno >= 7){
    console.log(`Parabéns, ${Aluno}, você foi Aprovado com nota ${notaAluno}!`)
} else if(notaAluno <5){
    console.log(`Foi por pouco ${Aluno}, Infelizmente você foi Reprovado com a nota ${notaAluno}!`)
} else if(notaAluno >=5 & notaAluno<7){
    console.log(`Caro ${Aluno}, vocês está de recuperação, procure seu Professor!`)
}



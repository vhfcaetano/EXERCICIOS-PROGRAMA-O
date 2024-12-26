var eleitor = prompt("Digite o seu nome caro Eleitor: ")
var idadeEleitor = prompt("Agora digite a sua idade: ")

if(idadeEleitor >= 18){
    console.log(`${eleitor}, este ano você poderá Votar!`)
} else if(idadeEleitor == 17){
    console.log(`Foi por pouco ${eleitor}, ano que vem você poderá Votar!`)
} else if(idadeEleitor < 18){
    console.log(`${eleitor}, infelizmente esse ano você não poderá votar!`)
}



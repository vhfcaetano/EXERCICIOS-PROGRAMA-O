function calculoIdade(name, age){
    if(age <18){
        console.log(`Olá ${name}, Infelizmente por ter a idade de ${age} anos, você ainda não pode dirigir`)
    } else{
        console.log(`Parabéns ${name}, você já pode dirigir!`)
    }
}

calculoIdade(prompt("Digite o seu nome por gentileza: "), prompt("Digite também a sua idade: "))
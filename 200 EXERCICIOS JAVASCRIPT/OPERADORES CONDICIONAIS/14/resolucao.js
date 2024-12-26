const anoBissexto = (ano) => {
    if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)){
        console.log(ano + ` é uma ano bissexto`)
    }
    else{
        console.log(ano + ` não é um ano bissexto`)
    }
}

let ano = prompt("Bem vindo ao calculo de ano Bissexto,digite um ano: ")

anoBissexto (ano)
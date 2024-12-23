const letra = prompt("Digite uma Letra").toUpperCase()

if(letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U"){
    console.log("Essa Letra se trata de uma vogal")
} else{
    console.log("Essa letra é uma consoante")
}

console.log(letra)
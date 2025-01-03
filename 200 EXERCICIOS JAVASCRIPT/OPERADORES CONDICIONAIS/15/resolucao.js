function verificarPolindromo (palavra){
    let palavraInvertida = palavra.split("").reverse("").join("")
    if (palavraInvertida == palavra ){
        console.log("Esta palavra é um Polindromo")
    } else {
        console.log("Essa palavra não é um polindromo")
    }
}

verificarPolindromo(prompt("Por favor digite uma palavra: "))
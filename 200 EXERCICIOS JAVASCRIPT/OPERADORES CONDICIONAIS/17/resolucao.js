function parOuImpar (numero){
    const calculo = numero % 2 
    if(calculo == 0){
        console.log(`O numero ${numero} é par`)
    } else{
        console.log(`O numero ${numero} é impar`)
    }
}

parOuImpar(prompt("Digite um numero: "))
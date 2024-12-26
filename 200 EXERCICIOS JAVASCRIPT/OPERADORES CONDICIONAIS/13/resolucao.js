const calculoImc = (peso,altura) => {
    let imc = peso / (altura * altura)
    if(imc >= 40){
        console.log(`Seu IMC é ${imc}, você se encontra em estado de OBESIDADE GRAVE`)
    }
    else if(imc <40 & imc > 30){
        console.log(`Seu IMC é ${imc}, você se encontra em estado de OBESIDADE`)
    }
    else if(imc <30 & imc > 25){
        console.log(`Seu IMC é ${imc}, você se encontra em estado de SOBREPESO`)
    }
    else if(imc <25 & imc >18.5){
        console.log(`Seu IMC é ${imc}, você se encontra em estado de NORMAL`)
    } 
    else{
        console.log(`Seu IMC é ${imc}, você se encontra em estado de MAGREZA`)
    }
}

let user = prompt("Bem vindo ao calculo de IMC usuário, Digite seu nome por gentileza: ")
let peso = parseFloat(prompt("Digite também seu peso: "))
let altura = parseFloat(prompt("Digite também sua altura: "))

calculoImc (peso, altura)
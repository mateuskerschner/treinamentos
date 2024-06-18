let nome = prompt("Qual o seu nome?")
let velocidadeInicial = 0

let velocidade = prompt("Qual velocidade deseja alcançar?")
let confirmacao = confirm("A velocidade atual é de: " + velocidade + "km/s" )

if(confirmacao){
    velocidadeInicial = velocidade
}

if(velocidade <= 0){ 
    alert("Nave está parada. Considere partir e aumentar a velocidade.") 
} else{
    if (velocidade < 40){
        alert("Você está devagar, podemos aumentar a velocidade>")
    }else{
        if(velocidade >= 40, velocidade < 80){
            alert("Parece uma boa velocidade para manter.")
        }else{
            if(velocidade >= 80, velocidade < 100 ){
                alert("Velocidade alta. Considere diminuir.")
            }else{
                if(velocidade >= 100){
                    alert("Velocidade perigosa Controle automatico forçado.")
                }
            }
        }
    }
}
    
alert(
    "Piloto: " + nome + 
    "\nA velocidade atual da nave é de: " + velocidade + "Km/s"
)


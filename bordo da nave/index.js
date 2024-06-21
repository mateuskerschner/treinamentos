let nome = prompt("Informe o nome da nave")

let velocidade = 0
 
let posOpcao

function exibirMenu(){
    let opcao 
    while(opcao != "1" && opcao != "2" && opcao != "3" && opcao != "4"){
        opcao = prompt ("Oque deseja fazer?" +
                        "\n1. Acelerar a nave em 5km/s"+
                        "\n2. Desacelerar a nave em 5km/s" +
                        "\n3. Imprimir dados de bordo" +
                        "\n4. Sair")
    }
return opcao

}

function acelerar(velocidade1) {
    let novaVelocidade = velocidade1 + 5
    return novaVelocidade
}

function desacelerar(velocidade1){
    let novaVelocidade = velocidade1 - 5
    if( novaVelocidade < 0 ){
        novaVelocidade = 0
    }
    return novaVelocidade
}

function imprimirDados(nome, velocidade1){
    alert("Espaçonave: " + nome + "\nVelocidade: " + velocidade1 + "Km/s")
}

do{
    posOpcao = exibirMenu() 
    switch(posOpcao){
        case "1":
            velocidade = acelerar(velocidade)
            break
        case "2":
            velocidade = desacelerar(velocidade)
            break
        case "3":
            imprimirDados(nome, velocidade)
            break
        default:
            alert("Encerrando programa.")
    }
}while(posOpcao != "4")
   
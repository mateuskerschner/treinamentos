let valor = parseFloat (prompt ("Qual o valor disponível?"))
let opcao = ""

do{
opcao = prompt (
"Saldo disponível: R$" + valor +
"\n1 - Adicionar dinheiro" +
"\n2 - Remover dinheiro" +
"\n3 - Sair"
)

switch(opcao){
    case "1":
    valor += parseFloat(prompt("Insira o valor a ser adicionado:"))
    break
    case "2":
    valor -= parseFloat(prompt("Insira o valor a ser retirado:"))
    break
    case "3": 
    alert("Saindo...")
    break
    default:
        alert("Entrada invalida! Escolha uma das opções.")
        break
}  
}while (opcao !== "3");


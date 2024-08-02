function calcularAreaTriangulo(){
    const base = prompt("Informe a base do triângulo:")
    const altura = prompt("Informe a altura do triângulo:")
    return base * altura / 2
}

function calcularAreaRetangulo(){
    const base = prompt("Informe a base do retângulo:")
    const altura = prompt("Informe a altura do retângulo:")
    return base * altura
}

function calculoAreaQuadrado(){
    const lado = prompt("Informe o lado do quadrado:")
    return lado * lado
}

function calculoAreaTrapezio(){
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
    const altura = parseFloat(prompt("Informe a altura do trapézio:"))
    return (baseMaior + baseMenor) * altura / 2
}
//parseFloat está sendo usado para o "+" não concatenar strings.
function calculoAreaCirculo(){
    const raio = prompt("Informe o raio do círculo:")
    return (3,14 * raio * raio)
}

function exibirMenu(){
    return prompt(
        "Calculadora Geométrica \n" +
        "\n1. Calcular área do triângulo" +
        "\n2. Calcular área do retângulo" +
        "\n3. Calcular área do quadrado" +
        "\n4. Calcular área do trapézio" +
        "\n5. Calcular área do círculo" +
        "\n6. Sair"
    )
}

function executar(){
let opcao = ""

do {
    opcao = exibirMenu()
    let resultado

    switch(opcao){
        case "1":
            resultado = calcularAreaTriangulo()
            break
        case "2":
            resultado = calcularAreaRetangulo()
            break
        case "3":
            resultado = calculoAreaQuadrado()
            break
        case "4":
            resultado = calculoAreaTrapezio()
            break
        case "5":
            resultado = calculoAreaCirculo()
            break
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Entrada inválida!")
            break    
    }
    if(resultado){
        alert("Resultado:" + resultado)
    }
} while(opcao !== "6");
}

executar()
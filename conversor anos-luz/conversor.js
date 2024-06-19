let distancia = prompt("Informe a distância em anos-luz")
let unidadeEscolhida
let conversão

let opcao = prompt(
    "Informe para qual unidade de medida deseja converter:" +
    "\n1. Parsec (pc)" +
    "\n2. Unidade astronônima (AU)" +
    "\n3. Quilômetros (km)" 
 )

    switch(opcao){
        case "1":
            unidadeEscolhida = "Parsec"
            conversão = distancia * 0.306601
            break
        case "2":
            unidadeEscolhida = "Unidade astronônima"
            conversão = distancia * 63241,1
            break
        case "3":
            unidadeEscolhida = "Quilômetros"
            conversão = distancia * 9.5 * Math.pow(10,12)
            break
            default:
                alert("Distância em Anos-luz: " + distancia + 
                " Unidade não identificada: Conversão fora do escopo")
                break

    }

    alert(  
        "Distância em Anos-luz: " + distancia + "\n " + unidadeEscolhida + " : " + conversão
    )
    

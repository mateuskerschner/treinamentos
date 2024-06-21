const nome = prompt("Informe o nome:")
let palavraInvertida = ""

for(let i = nome.length - 1; i >= 0; i--){
    if(nome[i] == "e"){
        break
    }
    palavraInvertida += nome[i]
}

alert("Nome original: " + nome + "\nNome Invertido: " + palavraInvertida )

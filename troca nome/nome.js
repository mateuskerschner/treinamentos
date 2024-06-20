let nome = prompt("Informe seu nome:")

let antigo = prompt("Informe qual caractere deseja substituir:")

let novo = prompt("Informe o caractere que deseja adicionar:")

let novoNome = ""

for(let  pos = 0; pos < nome.length; pos++){
    if(nome[pos] == antigo ){
        novoNome += novo
    }else {
        novoNome += nome[pos]
    }
}

alert("Nome inicial: " + nome + 
    "\nCaractere substituido: " + antigo + 
    "\nCaractere adicionado: " + novo + 
    "\nNome atual: " + novoNome)
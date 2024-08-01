const veiculo1 = prompt(" Insira o nome do veículo:")
const velocidade = parseFloat(prompt(" Insira a velociade do veículo:"))

const veiculo2 = prompt(" Insira o nome do veículo 2 ")
const velocidade2 = parseFloat(prompt(" Insira a velociade do veículo 2"))

if (velocidade > velocidade2) {
    alert(veiculo1 +" mais rapido" + veiculo2)
}else if ( velocidade === velocidade2){
    alert( veiculo1 + veiculo1 + "possuem a mesma velocidade")
}else if( velocidade < velocidade2){
    alert( veiculo2 + "mais rapido" + veiculo1 )
}
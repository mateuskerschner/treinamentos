const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0]) // separa o array P r o n t e r a 

const townsCopy = towns

townsCopy.pop()
townsCopy.pop() // apaga o ultimo array
townsCopy.push('Juno') //adiciona

console.log({ towns, townsCopy }) //copia mas quando executado as alterações seram feitos nas duas funções

const townsClone = [...towns] //clona a função mas sem altera-la caso seja necessário alterar algo na clonagem

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone })

const townsObj = { ...towns } //utilizando o Spread em objetos.
const townsObjClone = { ...townsObj }

townsObjClone.test = 'Test'

console.log({ townsObj, townsObjClone })
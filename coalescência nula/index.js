/* const a = 0       false 
const b = null    false
const c = "teste" true

console.log(a || b || c) */ // "||"" É utilizado para procurar o valor verdadeiro quando encontra ele devolve o resultado nesse caso o "Teste"

let a = 0

let b = a || 42

console.log({ a, b })

b = a ?? 42 // Se a= algum valor então a = b se a = null or undefined enão b = 42

console.log({a, b})

let c = false ?? 42

console.log({c})

// "??" É utilizado para encontrar null e undefined quando encontra qualquer outro valor devolve o valor encontrado.
const valor = (...numbers)=>{
const calculo = numbers.reduce((accum, {number, weight})=> accum +(number*(weight?? 1 )), 0)
const valorSoma = numbers.reduce((accum, entry)=> accum + (entry.weight ?? 1), 0)
return calculo / valorSoma
}

console.log(`Média Aritmética Ponderada: ${ valor(
    {number: 9, weight:2},
    {number:7},
    {number: 10, weight: 1},
)}`)


    const valor = (...numbers) => {
    const sum = numbers.reduce((accum, num)=>accum + num, 0)
    return sum / numbers.length  
}
console.log(`Média Aritimética Simples: ${ valor(3, 6, 12, 10)}`)


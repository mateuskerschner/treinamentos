/* const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0) {
      return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return average(firstMedian, secondMedian)
  }
  
  console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
  console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`) */

  //moda

  const mode = (...numbers) => {
    // [ [n, qtd], [n, qtd], [n, qtd] ]
            // a         b
    const quantities = numbers.map(num => [
      num,
      numbers.filter(n => num === n).length //pega todos os numeros e busca quantas vezes eles aparecem.
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
  }
  
  console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)
const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function (){
    input.value ='Olá, mundo!'

    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function(){
   input.type = input.type !== 'radio' ? 'radio' : 'text' //fica alternando entre radio e texto.
   //input.setAttribute('type', 'radio') //não alterna só transforma.
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digite algo:'
})

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.something
    console.log("O valor do atribudo data-something é: " + data)
    input.dataset.something = 'Algum outro valor'
    console.log("O valor do atribudo data-something agora é: " + input.dataset.something)
})


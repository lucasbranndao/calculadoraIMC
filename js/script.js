const form = document.querySelector("form")
const inputweight = document.querySelector("#peso")
const inputHeight =document.querySelector("#altura")
const botaoCalc = document.querySelector('.calcula-IMC')

form.onsubmit = (event) =>{
  event.preventDefault()
  
  const weight = inputweight.value
  const height = inputHeight.value

 const result= IMC(weight, height)
 console.log(result)
}

function IMC (weight, height)  {
  return (weight /(height / 100) ** 2).toFixed(2)
}


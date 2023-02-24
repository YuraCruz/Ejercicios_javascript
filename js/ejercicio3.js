/**
 * Hacer un programa que pida 2 números al usuario y diga cuál de los dos es el número mayor

 */
const btnAceptar = document.querySelector("#btn");
const valueInputOne = document.querySelector("#input1");
const valueInputTwo = document.querySelector("#input2");
const valueLabel = document.querySelector("#label");

function compararNumeros ( numeroUno , numeroDos){
 
  if (!Number.isInteger(numeroUno ) || !Number.isInteger(numeroDos)){
  return "Por favor ingrese los dos números"
  
}
if(numeroUno > numeroDos )
{
  return(`Resultado : El ${numeroUno} es mayor que el ${ numeroDos}`);
}
else if(numeroUno < numeroDos )
{
  return(`Resultado : El ${numeroDos} es mayor que el ${ numeroUno}`);
}
else {
  return(`Resultado : El ${numeroUno} es igual que el ${ numeroDos}`);
}
}

 btnAceptar.addEventListener('click',() => { 
  //console.log(compararNumeros(6,17));
   valueLabel.innerHTML = compararNumeros(parseInt(valueInputOne.value),parseInt(valueInputTwo.value));

 })

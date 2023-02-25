/**
 * Hacer un programa que le pida al usuario que ingrese un número y al dar clic en un botón el programa le indique al usuario si el numero es par o impar.
   cualquier numero divisible por 2 es par

 */
   const btnAceptar = document.querySelector("#btn");
   const valueInput = document.querySelector("#input");
   const valueparrafo = document.querySelector("#parrafo");



   function imprimirTablaDeMultiplicar ( numero ){
    
    if (!Number.isInteger(numero)){
      return `por favor ingrese un número`;
     }

    let resultado=" "
     
     for(let i = 1; i <= 10 ; i++ ){
         
       resultado = resultado + ` ${numero} x ${i} <br/> `
     }
  
     return resultado

   }  
   

 btnAceptar.addEventListener('click',() => { 
  valueparrafo.innerHTML=imprimirTablaDeMultiplicar( parseInt(valueInput.value) );

 })

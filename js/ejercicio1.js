/**
 * Hacer un programa que le pida al usuario que ingrese un número y al dar clic en un botón el programa le indique al usuario si el numero es par o impar.
   cualquier numero divisible por 2 es par

 */
   const btnAceptar = document.querySelector("#btn");
   const valueInput = document.querySelector("#input");
   const valueLabel = document.querySelector("#label");



   function esNumeroPar ( numeroIngresado = 0 ){

       if (!Number.isInteger(numeroIngresado)){
        return `por favor ingrese un número`;
       }
         
       if ((numeroIngresado % 2) === 0){
             
             return `Resultado: El ${numeroIngresado} es  numero Par`;
         }
         else{
             return `Resultado: El ${numeroIngresado} es  numero Impar`;
         }
         
        }  
   

 btnAceptar.addEventListener('click',() => { 
  valueLabel.innerHTML=esNumeroPar( parseInt(valueInput.value) );

 })

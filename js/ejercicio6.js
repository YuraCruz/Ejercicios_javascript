/**
 * Hacer un programa que le pida al usuario que ingrese un número y al dar clic en un botón el programa le indique al usuario si el numeroIngresado es par o impar.
   cualquier numeroIngresado divisible por 2 es par

 */
   const btnAceptar = document.querySelector("#btn");
   const valueInput = document.querySelector("#input");
   const valueLabel = document.querySelector("#label");



   function esNumeroPrimo ( numeroIngresado){

       if (!Number.isInteger(numeroIngresado)){
        return `por favor ingrese un número`;
       }
         
if( numeroIngresado === 0 || numeroIngresado === 1) {
    
  return `Resultado : El ${numeroIngresado} no es numero primo`
}

else if (numeroIngresado === 2 || numeroIngresado === 3 || numeroIngresado === 5 || numeroIngresado === 7 ){
 
  return `Resultado : El ${numeroIngresado} es numero primo`
}

else {
  
for(i=2 ; i < 10  ; i ++){
  
  if(numeroIngresado % i === 0 ){
    return `Resultado : El ${numeroIngresado} no es numero primo`
  }
}
    return `Resultado : El ${numeroIngresado} es numero primo`
}
 
      
        }  
   

 btnAceptar.addEventListener('click',() => { 
  valueLabel.innerHTML=esNumeroPrimo( parseInt(valueInput.value) );

 })

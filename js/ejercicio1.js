/**
 * Hacer un programa que le pida al usuario que ingrese un número y al dar clic en un botón el programa le indique al usuario si el numero es par o impar.
   cualquier numero divisible por 2 es par

 */




   function esNumeroPar ( numeroIngresado ){
       
         if ((numeroIngresado % 2) === 0){
             
             return `es ${numeroIngresado} numero Par`
         }
         else{
             return `es ${numeroIngresado} numero impar`
         }
         
         
        
   }
   console.log(esNumeroPar(5))
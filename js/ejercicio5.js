/**
 * Hacer un programa que le pida al usuario que ingrese un número y al dar clic en un botón el programa le indique al usuario si el numero es par o impar.
   cualquier numero divisible por 2 es par

 */
   const btnAñadir = document.querySelector("#btnOne");
   const btnOrdenar = document.querySelector("#btnTwo");
   const valueInput = document.querySelector("#input");
   const valueparrafo = document.querySelector("#parrafo")
   const numeros=[]


   function añadir ( numero ){

    if (!Number.isInteger(numero)){
      return `por favor ingrese un número`;
     }
     
     numeros.push(numero)
     return `ingresaste el numero ${numero}`
  }
    
    function ordenar (){

      numeros.sort(function(a, b) {
        return a - b;
      });
      return imprimirResultado()
    }
    
    function imprimirResultado (){ 

      let resultado=" "
       
       for(let i = 0; i < numeros.length ; i++ ){
           
         resultado = resultado + ` ${numeros[i]} <br/> `
       }
    
       return resultado
  
     }  
     

 btnAñadir.addEventListener('click',() => { 
  valueparrafo.innerHTML=añadir( parseInt(valueInput.value) );
 }
  ,btnOrdenar.addEventListener('click',() => { 
    valueparrafo.innerHTML=ordenar();
  }
 ))

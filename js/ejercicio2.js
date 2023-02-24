/**
 * Hacer un programa que le pida al usuario 2 palabras y que indique cuál de ellas es la más larga y
 *  por cuántas letras lo es.

 */
const btnAceptar = document.querySelector("#btn");
const valueInputOne = document.querySelector("#input1");
const valueInputTwo = document.querySelector("#input2");
const valueLabel = document.querySelector("#label");

function compararPalabras ( palabraUno , palabraDos){

  const NumeroletrasPalabraUno= palabraUno.length
  const NumeroletrasPalabraDos= palabraDos.length
if (NumeroletrasPalabraUno === 0 || NumeroletrasPalabraDos === 0 ) {
  return "Por favor ingrese las dos palabras"
  
}
if(NumeroletrasPalabraUno > NumeroletrasPalabraDos )
{
  return(`la palabra ${palabraUno} tiene ${NumeroletrasPalabraUno - NumeroletrasPalabraDos} letras mas que  ${palabraDos}`);
}
else if(NumeroletrasPalabraUno < NumeroletrasPalabraDos )
{
  return(`la palabra ${palabraDos} tiene ${ NumeroletrasPalabraDos - NumeroletrasPalabraUno } letras mas que  ${palabraUno}`);
}
else {
    return(`las palabras ${palabraDos} y ${palabraUno}  son iguales en numero de letras`);
}
}

 btnAceptar.addEventListener('click',() => { 

  valueLabel.innerHTML = compararPalabras( valueInputOne.value , valueInputTwo.value );

 })

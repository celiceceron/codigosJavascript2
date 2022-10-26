/*
Crie uma função que recebe um texto e retorna uma string
com o texto repetindo 10 vezes.
*/

const retornaTexto10Vezes = (texto) => {
    let resultado = "";

   for(let i = 0; i <= 10; i++){
        resultado += texto;
   }
        return resultado
}

console.log(retornaTexto10Vezes("bla"));